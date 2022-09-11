import module from "./pkg/cloudflare_wasm_problem_bg.wasm";
import init, { hello } from "./pkg";

const instantiate = init(module);

export default {
  async fetch(request) {
    await instantiate;

    return new Response(hello());
  },
};
