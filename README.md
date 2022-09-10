Reproduction steps:

1. Have `pnpm`, `cargo`, and `wasm-pack` installed
2. Run `pnpm -r build` to build the `utils-in-rust` crate as Wasm (alternatively `cd` into `utils-in-rust` and run `pnpm build`)
3. Run `pnpm -r dev` to start a Wrangler dev server for `cloudflare-workers/index.js` (alternatively `cd` into `cloudflare-workers` and run `pnpm dev`). Interacting with the server (`localhost:8787`) will result in an error about internal Wasm functions. 

    One example is 
    ```
    TypeError: Cannot read properties of undefined (reading '__wbindgen_add_to_stack_pointer')
    at hello (.../cloudflare-wasm-problem/utils-in-rust/pkg/utils_in_rust.js:40:14)
    ```
    when using `wasm-pack build --target web` (per `utils-in-rust/package.json`'s `"build"` script)

    but it's about the same issue when switching the `target` to `bundler`:

    ```
    TypeError: wasm.__wbindgen_add_to_stack_pointer is not a function
    at hello (.../cloudflare-wasm-problem/utils-in-rust/pkg/utils_in_rust_bg.js:41:14)
    ```

Thank you 🙏
