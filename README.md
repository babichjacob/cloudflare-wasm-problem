# Solved!
I figured it out thanks to [`wg/cf-worker-wasm`](https://github.com/wg/cf-worker-wasm)! You have to import the `.wasm` file too when building for web and use it to initialize before using the functions:
```js
import wasm from "./pkg/cloudflare_wasm_problem_bg.wasm";
import init, { hello } from "./pkg";

const instance = init(module);

export default {
  async fetch(request) {
    await instance;
    return new Response(hello());
  },
};
```

# (Not needed) Reproduction steps:

1. Have Node.js + npm, `cargo`, and `wasm-pack` installed
2. Run `npm install` to install Wrangler
3. Run `npm run build-wasm` to build the crate as Wasm
4. Run `npm run dev` to start a Wrangler dev server for `index.js`. Interacting with the server (`localhost:8787`) will result in an error about internal Wasm functions.

   One example is

   ```
   TypeError: Cannot read properties of undefined (reading '__wbindgen_add_to_stack_pointer')
   at hello (.../cloudflare-wasm-problem/pkg/cloudflare_wasm_problem.js:40:14)
   ```

   when using `wasm-pack build --target web`

   but it's about the same issue when switching the `target` to `bundler`:

   ```
   TypeError: wasm.__wbindgen_add_to_stack_pointer is not a function
   at hello (.../cloudflare-wasm-problem/pkg/cloudflare_wasm_problem_bg.js:41:14)
   ```

Thank you 🙏
