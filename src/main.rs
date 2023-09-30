//! Default Compute@Edge template program.

use fastly::geo::geo_lookup;
use fastly::http::{header, Method, StatusCode};
use fastly::{mime, ConfigStore, Error, Request, Response};
use serde_json::{json, Value};
use std::net::IpAddr;

fn gh_fetch(path: &str) -> Result<Response, Error> {
    let global = ConfigStore::open("global");
    let gh_actor = global.get("gh_actor").unwrap();
    let gh_token = global.get("gh_token").unwrap();

    let url = format!(
        "https://api.github.com/repos/{}/{}/contents/{}",
        gh_actor, "tech-summit", path
    );

    let bereq = Request::get(url)
        .with_header("User-Agent", "fastly::http")
        .with_header("Accept", "application/vnd.github+json")
        .with_header("Authorization", format!("Bearer {}", gh_token))
        .with_header("X-GitHub-Api-Version", "2022-11-28")
        .with_ttl(60);

    let beresp = bereq.send("github")?;

    return Ok(beresp);
    // return Ok(format!("Bearer {}", gh_token));
}

fn geo_info(client_ip: IpAddr) -> Result<Value, Error> {
    let geo = geo_lookup(client_ip).unwrap();
    let body = json!({
        "as": {
            "name": geo.as_name(),
        },
        "geo" : {
            "city": geo.city(),
            "client_ip": client_ip,
            "country_name": geo.country_name(),
            "gmt_offset:": geo.utc_offset().unwrap().to_string(),
        },
    });
    Ok(body)
}

#[fastly::main]
fn main(req: Request) -> Result<Response, Error> {
    // Log service version
    println!(
        "FASTLY_SERVICE_VERSION: {}",
        std::env::var("FASTLY_SERVICE_VERSION").unwrap_or_else(|_| String::new())
    );

    // Filter request methods...
    match req.get_method() {
        // Block requests with unexpected methods
        &Method::POST | &Method::PUT | &Method::PATCH | &Method::DELETE => {
            return Ok(Response::from_status(StatusCode::METHOD_NOT_ALLOWED)
                .with_header(header::ALLOW, "GET, HEAD, PURGE")
                .with_body_text_plain("This method is not allowed\n"))
        }

        // Let any other requests through
        _ => (),
    };

    // Pattern match on the path...
    match req.get_path() {
        // If request is to the `/` path...
        "/" => Ok(Response::from_status(StatusCode::OK)
            .with_content_type(mime::TEXT_HTML_UTF_8)
            .with_body(include_str!("../index.html"))),

        "/index.html" => Ok(Response::from_status(StatusCode::OK)
            .with_content_type(mime::TEXT_HTML_UTF_8)
            .with_body(include_str!("../index.html"))),

        "/dist/index.js" => Ok(Response::from_status(StatusCode::OK)
            .with_content_type(mime::TEXT_JAVASCRIPT)
            .with_body(include_str!("../dist/index.js"))),

        "/dist/index.css" => Ok(Response::from_status(StatusCode::OK)
            .with_content_type(mime::TEXT_CSS_UTF_8)
            .with_body(include_str!("../dist/index.css"))),

        "/esbuild" => {
            Ok(Response::from_status(StatusCode::OK).with_content_type(mime::TEXT_PLAIN_UTF_8))
        }

        "/list" => {
            let path = req.get_query_parameter("path").unwrap_or_else(|| "docs");
            Ok(gh_fetch(path).unwrap())
        }

        "/fetch" => {
            let path = req
                .get_query_parameter("path")
                .unwrap_or_else(|| "docs/home.md");
            let response = gh_fetch(path).unwrap();

            // Decode the content property of the JSON response
            let body = response.into_body();
            let bytes = body.into_bytes();
            let json_response: serde_json::Value = serde_json::from_slice(&bytes).unwrap();
            let encoded = json_response["content"].as_str().unwrap();
            let decoded_bytes = base64::decode(encoded.replace("\n", "")).unwrap();
            let decoded_string = String::from_utf8(decoded_bytes).unwrap();
            Ok(Response::from_status(StatusCode::OK).with_body_text_plain(decoded_string.as_str()))
        }

        "/geo" => {
            let client_ip = req.get_client_ip_addr().unwrap();
            let info = geo_info(client_ip).unwrap();
            Ok(Response::from_status(StatusCode::OK)
                .with_body_text_plain(info.to_string().as_str()))
        }

        "/test" => {
            let global = ConfigStore::open("global");
            let gh_actor = global.get("gh_actor").unwrap();

            Ok(Response::from_status(StatusCode::OK).with_body_text_plain(gh_actor.as_str()))
        }

        // Catch all other requests and return a 404.
        _ => Ok(Response::from_status(StatusCode::NOT_FOUND)
            .with_body_text_plain("The page you requested could not be found\n")),
    }
}
