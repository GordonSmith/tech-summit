# Sample Web Application

_Sample Edge Hosted Web Application._

## Features

- **Edge** - The application is hosted on the edge by [Fastly.com](https://developer.fastly.com/)
- **Serverless** - The application is serverless, using Fastlys [compute@edge](https://developer.fastly.com/learning/compute/)
- **Host** - The application is written in Rust and compiled to WebAssembly
- **Client** - The web client, uses [React](https://react.dev/) + [Fluent UI](https://github.com/microsoft/fluentui/wiki/Fluent-UI-React-v9-Release)
- **Lite** - 3,364 KB Single WASM file, including bundled 638 KB website

## API

_Simple REST API, used by the web client.  
For example [https://tech-summit.edgecompute.app/geo](https://tech-summit.edgecompute.app/geo) will return a JSON object with information about the cients geo-loaction_

- **list** - Returns the contenst of the docs folder [https://github.com/GordonSmith/tech-summit/docs](https://github.com/GordonSmith/tech-summit/tree/main/docs)
- **fetch?path=...** - Returns the contents of the specified file from GitHub, paths are relative to [https://github.com/GordonSmith/tech-summit](https://github.com/GordonSmith/tech-summit), for example [path=LICENSE](https://tech-summit.edgecompute.app/fetch?path=LICENSE)
- **geo** - Returns geo-location of the client
- **\<default\>** - Serves the React website:
    - The website is bundled into the WASM file, so this is a single request to the edge to get the entire site.  
    - Once loaded the site will fetch the list of markdown files from the `docs` folder via the API `list`.
    - Next it creates the navigation index on the left hand side from this list.
    - When the user selects a navigation item, it will fetch the content from GitHub via the API `fetch?path=...`
    - The markdown content will then be rendered into the page using [@hpcc-js/observable-md](https://hpcc-systems.github.io/Visualization/packages/observablehq-compiler/README.html#usage).
