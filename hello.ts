addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("<h1>Hello world!</h1>", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/html",
      },
    })
  );
});
