addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(`
    <h1>Hello world!</h1>
    <h2>I'm bamchoh</h2>
    <img src="https://github.com/bamchoh/bamchoh.deno.dev/blob/main/face_icon.jpg?raw=true" />
    `, {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/html",
      },
    })
  );
});
