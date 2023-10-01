# WebAssembly Runtimes

_There are many WebAssembly host runtimes. This page is an opinionated short list of the main ones._

## Recommended

- [Wasmtime](#wasmtime) 
- [WebAssembly Micro Runtime](#wamr) 
- [WasmEdge](#wasmedge) 
- [Wasmer](#wasmer) 
- [wazero](#wazero) 

## Easy multi language plugin engine

- [Extism](#extism) 

## Other

- [aWsm](#awsm) 
- [EOSVM](#eosvm) 
- [Fizzy](#fizzy) 
- [GraalWASM](#graalwasm) 
- [inNative](#innative) 
- [Lucet](#lucet) 
- [wasm3](#wasm3) 
- [Swam](#swam) 
- [WAKit](#wakit) 
- [Wasmi](#wasmi) 
- [Wasmo](#wasmo) 
- [WasmVM](#wasmvm1) 
- [WAVM](#wavm) 
- [TWVM](#twvm) 

----------------


## <a name="awsm"></a>[aWsm](https://github.com/gwsystems/aWsm) 

> aWsm is a compiler and runtime for compiling WebAssembly (Wasm) code into llvm bytecode, then into sandboxed binaries you can run on various platforms.

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
        <td>C</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>LLVM</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>AOT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    <table>
    <tr>
        <td>C</td>
    </tr>
    </table>

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
    </tr>
    </table>


## <a name="eosvm"></a>[EOSVM](https://github.com/EOSIO/eos-vm) 
> EOS VM is designed from the ground up for the high demands of blockchain applications which require far more from a WebAssembly engine than those designed for web browsers or standards development.

* **Languages written in**

    <table>
    <tr>
        <td>C++</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>


## <a name="extism"></a>[Extism](https://github.com/extism/extism) 
> Extism's goal is to make all software programmable, and is a flexible, embedded runtime to make it easy to extend your software with WebAssembly.

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    SDKs to execute WebAssembly in:
    - [`Browser`](https://extism.org/docs/integrate-into-your-codebase/browser-runtime-sdk/)
    - [`C`](https://extism.org/docs/integrate-into-your-codebase/c-host-sdk/)
    - [`C++`](https://extism.org/docs/integrate-into-your-codebase/cpp-host-sdk/)
    - [`.NET`](https://extism.org/docs/integrate-into-your-codebase/dotnet-host-sdk)
    - [`Elixir`](https://extism.org/docs/integrate-into-your-codebase/elixir-host-sdk/)
    - [`Go`](https://extism.org/docs/integrate-into-your-codebase/go-host-sdk/)
    - [`Haskell`](https://extism.org/docs/integrate-into-your-codebase/haskell-host-sdk/)
    - [`Java`](https://extism.org/docs/integrate-into-your-codebase/java-host-sdk)
    - [`Node`](https://extism.org/docs/integrate-into-your-codebase/node-host-sdk/)
    - [`OCaml`](https://extism.org/docs/integrate-into-your-codebase/ocaml-host-sdk/)
    - [`PHP`](https://extism.org/docs/integrate-into-your-codebase/php-host-sdk/)
    - [`Python`](https://extism.org/docs/integrate-into-your-codebase/python-host-sdk/)
    - [`Ruby`](https://extism.org/docs/integrate-into-your-codebase/ruby-host-sdk/)
    - [`Rust`](https://extism.org/docs/integrate-into-your-codebase/rust-host-sdk/)
    - [`Zig`](https://extism.org/docs/integrate-into-your-codebase/zig-host-sdk)
 
    PDKs to create WebAssembly plug-ins in:
    - [`Rust`](https://github.com/extism/rust-pdk)
    - [`JavaScript`](https://extism.org/docs/write-a-plugin/js-pdk)
    - [`Go`](https://github.com/extism/go-pdk)
    - [`Haskell`](https://extism.org/docs/write-a-plugin/haskell-pdk)
    - [`AssemblyScript`](https://github.com/extism/assemblyscript-pdk)
    - [`C`](https://github.com/extism/c-pdk)
    - [`C++`](https://github.com/extism/c-pdk)
    - [`Zig`](https://extism.org/docs/write-a-plugin/zig-pdk)


* **Host APIs supported**
    - module loading & linking via [`Manifest`](https://extism.org/docs/concepts/manifest)
    - WASI
    - non-WASI `http_request`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>


## <a name="fizzy"></a>[Fizzy](https://github.com/wasmx/fizzy) 
> Fizzy aims to be a fast, deterministic, and pedantic WebAssembly interpreter written in C++.

* **Languages written in**

    <table>
    <tr>
        <td>C++</td>
    </tr>
    </table>

* **Compiler framework**

    - `N/A`

* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreter</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
    </tr>
    </table>

## <a name="graalwasm"></a>[GraalWasm](https://github.com/oracle/graal/tree/master/wasm) 
GraalWasm is a WebAssembly engine implemented in the GraalVM. It can interpret and compile WebAssembly programs in the binary format, or be embedded into other programs.

* **Languages written in**

    <table>
    <tr>
        <td>Java</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>GraalVM</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    <table>
    <tr>
        <td>Java</td>
        <td>JVM</td>
        <td>Graal supported languages</td>
    </tr>
    </table>

* **Non-MVP features supported**

    <table>
    <tr>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Used by**

    - [GraalVM JavaScript](https://github.com/graalvm/graaljs) - A high performance implementation of the JavaScript programming language.

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>

## <a name="happy-new-moon-with-report"></a>[Happy New Moon With Report](https://github.com/fishjd/HappyNewMoonWithReport) 

Happy New Moon with Report is an open-source implementation of WebAssembly written entirely in Java. It is used to run or test Web Assembly Modules (*.wasm) in Java.

* **Languages written in**

    <table>
    <tr>
        <td>Java</td>
    </tr>
    </table>

* **Compiler framework**

    - `N/A`

* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    <table>
    <tr>
        <td>Java</td>
        <td>JVM languages</td>
    </tr>
    </table>

* **Non-MVP features supported**

    <table>
    <tr>
    	<td>Sign Extensions</td>
    </tr>
    </table>

* **Host APIs supported**

    - `N/A`

* **Used by**

    - `N/A`


* **Platforms supported**

    <table>
    <tr>
        <td>JVM</td>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>

## <a name="innative"></a>[inNative](https://github.com/innative-sdk/innative) 
> An AOT (ahead-of-time) compiler for WebAssembly that creates C compatible binaries, either as sandboxed plugins you can dynamically load, or as stand-alone executables that interface directly with the operating system.

* **Languages written in**

    <table>
    <tr>
        <td>C++</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>LLVM</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>AOT</td>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Threads</td>
        <td>Multiple Result and Block Parameters</td>
        <td>Name Section</td>
        <td>Bulk Memory Operations</td>
        <td>Sign Extension Instructions</td>
        <td>Non-trapping Conversion Instructions</td>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>


## <a name="lucet"></a>[Lucet](https://github.com/fastly/lucet) 
> Lucet is a native WebAssembly compiler and runtime. It is designed to safely execute untrusted WebAssembly programs inside your application.

> NOTE: Lucet is now in maintenance mode. Work has been moved to [wasmtime](https://github.com/bytecodealliance/wasmtime/).

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Cranelift</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>AOT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
    </tr>
    </table>


## <a name="wasm3"></a>[Wasm3](https://github.com/wasm3/wasm3) 
> 🚀 A high performance WebAssembly interpreter

* **Languages written in**

    <table>
    <tr>
        <td>C</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    <table>
    <tr>
        <td>Python</td>
        <td>C/C++</td>
        <td>Rust</td>
        <td>Go</td>
        <td>Zig</td>
        <td>Swift</td>
        <td>C#/.Net</td>
    </tr>
    </table>

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Multi-Value</td>
        <td>Bulk Memory Operations</td>
        <td>Sign-extension operators</td>
        <td>Non-trapping conversions</td>
        <td>Name Section</td>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>WASI</td>
        <td>Custom</td>
    </tr>
    </table>

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
        <td>Gas Metering</td>
    </tr>
    </table>

* **Used by**

    - [wasmcloud](https://wasmcloud.dev/) - A platform for writing portable business logic
    - [Shareup](https://shareup.app/) - Fast, private sharing for everyone
    - [WowCube](https://wowcube.com/) - An nnovative console and the gaming platform
    - [txiki.js](https://github.com/saghul/txiki.js) -A small and powerful JavaScript runtime

* **Platforms supported**

    <table>
    <tr>
        <td>Windows</td>
        <td>Linux<br/>(any arch)</td>
        <td>macOS<br/>(any arch)</td>
        <td>FreeBSD<br/>(any arch)</td>
        <td>Android</td>
        <td>OpenWRT</td>
        <td>SBC/MCU</td>
        <td>Arduino</td>
    </tr>
    </table>


## <a name="swam"></a>[Swam](https://github.com/satabin/swam) 
> WebAssembly engine in Scala

* **Languages written in**

    <table>
    <tr>
        <td>Scala</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>


## <a name="wakit"></a>[WAKit](https://github.com/akkyie/WAKit) 
> A WebAssembly runtime written in Swift.

* **Languages written in**

    <table>
    <tr>
        <td>Swift</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
    </tr>
    </table>

## <a name="wasmedge"></a>[WasmEdge](https://github.com/WasmEdge/WasmEdge) 
> A lightweight, high-performance, and extensible WebAssembly runtime for cloud native, edge, and decentralized applications. Project under CNCF.

* **Languages written in**

    <table>
    <tr>
        <td>C++</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>LLVM</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreter</td>
        <td>AOT</td>
    </tr>
    </table>

* **Interoperability with other languages**

   <table>
    <tr>
        <td>Solidity</td>
        <td>Rust</td>
        <td>C/C++</td>
        <td>Go/TinyGo</td>
        <td>JavaScript</td>
        <td>Python</td>
        <td>Grain</td>
        <td>Swift</td>
        <td>Zig</td>
        <td>Ruby</td>
    </tr>
    </table>

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Bulk Memory Operations</td>
        <td>SIMD</td>
        <td>Multi-Memory</td>
        <td>Multi-Value</td>
        <td>Reference Types</td>
        <td>Sign Extension Instructions</td>
        <td>Non-Trapping Float-to-Int Conversions</td>
        <td>Mutable Global</td>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>WASI</td>
        <td>Networking Socket</td>
        <td>TensorFlow</td>
        <td>Command Interface</td>
        <td>Image Processing</td>
    </tr>
    </table>

* **Non-web standards**

   <table>
    <tr>
        <td>WASI</td>
        <td>Gas Metering</td>
        <td>Ethereum Environment Interface</td>
        <td>Oasis</td>
        <td>Substrate</td>
    </tr>
    </table>

* **Used by**

    - [Suborbital](https://blog.suborbital.dev/suborbital-wasmedge)
    - [crun](https://github.com/containers/crun/pull/774)
    - [SuperEdge](https://github.com/superedge/superedge/pull/335)
    - [OpenYurt](https://github.com/openyurtio/openyurt.io/pull/85)
    - [Dapr](https://www.infoq.com/articles/webassembly-dapr-wasmedge/)
    - [Yomo](https://github.com/yomorun/yomo-wasmedge-tensorflow)
    - [Oasis ETH ParaTime](https://medium.com/oasis-protocol-project/the-oasis-eth-paratime-is-live-on-mainnet-33d8713ec870)

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
        <td>Android</td>
        <td>OpenHarmony</td>
        <td>seL4 RTOS</td>
    </tr>
    </table>

## <a name="wasmer"></a>[Wasmer](https://github.com/wasmerio/wasmer) 
> Wasmer is a standalone WebAssembly runtime for running WebAssembly outside of the browser, supporting WASI and Emscripten.

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
        <td>C++</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Singlepass</td>
        <td>Cranelift (Default)</td>
        <td>LLVM</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>JIT</td>
        <td>AOT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    <table>
    <tr>
        <td>Rust</td>
        <td>PHP</td>
        <td>C</td>
        <td>C++</td>
        <td>Python</td>
        <td>Go</td>
        <td>PHP</td>
        <td>Java</td>
        <td>Ruby</td>
        <td>Postgres</td>
        <td>C#/.Net</td>
        <td>Elixir</td>
        <td>R</td>
        <td>D</td>
        <td>Swift</td>
    </tr>
    </table>

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Threads</td>
        <td>SIMD</td>
        <td>Multi Value returns</td>
        <td>Name Section</td>
        <td>Bulk Memory Operations</td>
        <td>Sign Extension Instructions</td>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>Emscripten</td>
        <td>WASI</td>
    </tr>
    </table>

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
        <td>wasm-c-api</td>
    </tr>
    </table>

* **Used by**

    - [Spacemesh Virtual Machine](https://github.com/spacemeshos/svm) - A Spacemesh smart contracts vm
    - [CosmWasm](https://github.com/CosmWasm/cosmwasm) - A Cosmos-compatible library for running wasm smart contracts
    - [NEAR Protocol](https://github.com/near/nearcore) - The reference client for NEAR protocol
    - [Dprint](https://github.com/dprint/dprint) - Pluggable and configurable code formatting platform

* **Platforms supported**

    <table>
    <tr>
        <td>Linux (x64, aarch64, x86)</td>
        <td>macOS (x64, arm64)</td>
        <td>Windows (x64, x86)</td>
        <td>FreeBSD (x64)</td>
        <td>Android</td>
    </tr>
    </table>

## <a name="wasmi"></a>[Wasmi](https://github.com/paritytech/wasmi) 
> A Wasm interpreter.

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Mutable Globals</td>
        <td>Sign-extension operators</td>
        <td>Non-trapping conversions</td>
        <td>Multi-Value</td>
        <td>Bulk Memory Operations</td>
        <td>Reference Types</td>
        <td>Tail Calls</td>
        <td>Extended Const</td>
    </tr>
    </table>

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Used by**

    <table>
    <tr>
        <td>Substrate</td>
        <td>smoldot</td>
        <td>Ayaka Game Engine</td>
    </tr>
    </table>

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
        <td>WebAssembly</td>
    </tr>
    </table>

## <a name="wasmo"></a>[Wasmo](https://github.com/appcypher/wasmo) 
> A WebAssembly Runtime and Compiler based on LLVM.

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>LLVM</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>macOS</td>
    </tr>
    </table>

## <a name="wasmtime"></a>[Wasmtime](https://github.com/CraneStation/wasmtime) 
> Wasmtime is a standalone wasm-only runtime for WebAssembly, using the Cranelift JIT

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Cranelift</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    <table>
    <tr>
        <td>Python</td>
    </tr>
    </table>

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Interface types</td>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
        <td>wasm-c-api</td>
    </tr>
    </table>

* **Used by**

    - [Wasmi](https://github.com/paritytech/wasmi): an efficient WebAssembly interpreter that is used by [Substrate](https://github.com/paritytech/substrate), a next-generation framework for blockchain innovation.

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>

## <a name="wasmvm1"></a>[WasmVM](https://github.com/WasmVM/WasmVM) 
> An unofficial standalone WebAssembly process virtual machine

* **Languages written in**

    <table>
    <tr>
        <td>C++</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>

## <a name="wasmvm2"></a>[wasmvm](https://github.com/kogai/wasvm) 
> WebAssembly Virtual Machine, which aim to fit embedded systems.

* **Languages written in**

    <table>
    <tr>
        <td>Rust</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Life</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>

## <a name="wavm"></a>[WAVM](https://github.com/WAVM/WAVM) 
> WebAssembly Virtual Machine, which aim to fit embedded systems.

* **Languages written in**

    <table>
    <tr>
        <td>C++</td>
        <td>Python</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>LLVM</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Threads</td>
        <td>SIMD</td>
        <td>Multiple Result and Block Parameters</td>
        <td>Exception Handling</td>
        <td>Name Section</td>
        <td>Reference Types</td>
        <td>Bulk Memory Operations</td>
        <td>Sign Extension Instructions</td>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>WASI</td>
        <td>Emscripten</td>
        <td>WAVIX</td>
    </tr>
    </table>

* **Non-web standards**

    - [x] WASI

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>

## <a name="wamr"></a>[WAMR](https://github.com/bytecodealliance/wasm-micro-runtime) 
> WebAssembly Micro Runtime (WAMR) is a standalone WebAssembly (WASM) runtime with small footprint

* **Languages written in**

    <table>
    <tr>
        <td>C</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
        <td>AOT-Modules</td>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - [Non-trapping float-to-int conversions](https://github.com/WebAssembly/nontrapping-float-to-int-conversions)
    - [Sign-extension operators](https://github.com/WebAssembly/sign-extension-ops)
    - [Bulk memory operations](https://github.com/WebAssembly/bulk-memory-operations)
    - [Shared memory](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#shared-linear-memory)
    - [Multi-value](https://github.com/WebAssembly/multi-value)
    - [Tail-call](https://github.com/WebAssembly/tail-call)


* **Host APIs supported**

    - [wasm-c-api](https://github.com/WebAssembly/wasm-c-api)

* **Non-web standards**

    - [x] WASI

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
        <td>AliOS-Things</td>
        <td>Android</td>
        <td>Linux-SGX</td>
        <td>Nuttx</td>
        <td>VxWorks</td>
        <td>Zephyr</td>
    </tr>
    </table>



## <a name="twvm"></a>[TWVM](https://github.com/Becavalier/TWVM) 
>A tiny and efficient WebAssembly virtual machine.

* **Languages written in**

    <table>
    <tr>
        <td>C++</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    - `N/A`

* **Host APIs supported**

    - `N/A`

* **Non-web standards**

    - `N/A`

* **Used by**

    - `N/A`

* **Platforms supported**

    <table>
    <tr>
        <td>Linux</td>
        <td>macOS</td>
        <td>Windows</td>
    </tr>
    </table>



## <a name="wazero"></a>[wazero](https://wazero.io) 
> wazero is a WebAssembly 1.0 and 2.0 spec compliant runtime written in Go, with zero platform dependencies.

* **Languages written in**

    <table>
    <tr>
        <td>Go</td>
    </tr>
    </table>

* **Compiler framework**

    <table>
    <tr>
        <td>Custom</td>
    </tr>
    </table>


* **Compilation / Execution modes**

    <table>
    <tr>
        <td>Interpreted</td>
        <td>JIT</td>
    </tr>
    </table>

* **Interoperability with other languages**

    - `N/A`

* **Non-MVP features supported**

    <table>
    <tr>
        <td>Bulk Memory Operations</td>
        <td>Import/Export of Mutable Globals</td>
        <td>Sign-extension operators</td>
        <td>Multi-Value Returns</td>
        <td>Name Section</td>
        <td>Non-trapping float-to-int conversions</td>
        <td>Reference Types</td>
        <td>SIMD</td>
    </tr>
    </table>

* **Host APIs supported**

    <table>
    <tr>
        <td>AssemblyScript</td>
        <td>WASI</td>
    </tr>
    </table>

* **Non-web standards**

    <table>
    <tr>
        <td>WASI</td>
    </tr>
    </table>

* **Used by**

    - [dapr](https://github.com/dapr/dapr) - APIs that simplify microservice connectivity
    - [trivy](https://github.com/aquasecurity/trivy) - vulnerability/misconfiguration/secret scanner for containers and other artifacts
    - [wapc-go](https://github.com/wapc/wapc-go) - WebAssembly Host Runtime for waPC-compliant modules

* **Platforms supported**

    <table>
    <tr>
        <td>FreeBSD (amd64)</td>
        <td>Linux (amd64, arm64, riscv64)</td>
        <td>macOs (amd64)</td>
        <td>Windows (amd64)</td>
    </tr>
    </table>
-------------------
