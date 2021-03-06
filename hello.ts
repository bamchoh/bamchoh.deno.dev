import { serve } from "https://deno.land/x/sift/mod.ts";
// You delare a route and its corresponding handler that returns a Response.
serve({
  "/": () => new Response("hello world"),
  "/blog/:slug": (request, {slug}) => {
      const post = `Hello, you visited ${slug}!`;
      return new Response(post)
  },
  404: () => new Response("not found")
});
