import { hello } from "utils-in-rust";

export default {
  async fetch(request) {
    return new Response(hello());
  },
};
