import { hello } from "./pkg";

export default {
  async fetch(request) {
    return new Response(hello());
  },
};
