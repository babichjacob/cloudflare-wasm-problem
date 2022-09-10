Reproduction steps:

1. Have `pnpm`, `cargo`, and `wasm-pack` installed
2. Run `pnpm -r build` to build the `utils-in-rust` crate as Wasm
3. Run `pnpm -r dev` to start a Wrangler dev server for `cloudflare-workers/index.js`. Interacting with the server (`localhost:8787`) will result in an error about Wasm functions

This still happens even after changing `wasm-pack`'s target in `utils-in-rust/package.json`'s `"build"` script to `bundler`.

Thank you 🙏
