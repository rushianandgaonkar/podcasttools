export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    let url: URL;
    try {
      url = new URL(request.url);
    } catch {
      // Return custom 400 Bad Request on malformed request URL
      try {
        const page = await env.ASSETS.fetch(new Request("https://podstudiotools.com/400.html"));
        return new Response(page.body, {
          status: 400,
          statusText: "Bad Request",
          headers: {
            ...Object.fromEntries(page.headers.entries()),
            "content-type": "text/html; charset=utf-8",
          },
        });
      } catch {
        return new Response("400 - Bad Request", { status: 400 });
      }
    }

    // 1. Explicit 500 error route handling
    if (url.pathname === "/500" || url.pathname === "/500.html") {
      try {
        const page = await env.ASSETS.fetch(new Request(new URL("/500.html", request.url)));
        return new Response(page.body, {
          status: 500,
          statusText: "Internal Server Error",
          headers: {
            ...Object.fromEntries(page.headers.entries()),
            "content-type": "text/html; charset=utf-8",
          },
        });
      } catch {
        return new Response("500 - Internal Server Error", { status: 500 });
      }
    }

    // 2. Explicit 400 error route handling
    if (url.pathname === "/400" || url.pathname === "/400.html") {
      try {
        const page = await env.ASSETS.fetch(new Request(new URL("/400.html", request.url)));
        return new Response(page.body, {
          status: 400,
          statusText: "Bad Request",
          headers: {
            ...Object.fromEntries(page.headers.entries()),
            "content-type": "text/html; charset=utf-8",
          },
        });
      } catch {
        return new Response("400 - Bad Request", { status: 400 });
      }
    }

    // 3. Fall through from missing static assets -> serve custom 404 page with HTTP 404
    try {
      const notFoundPage = await env.ASSETS.fetch(new Request(new URL("/404.html", request.url)));
      return new Response(notFoundPage.body, {
        status: 404,
        statusText: "Not Found",
        headers: {
          ...Object.fromEntries(notFoundPage.headers.entries()),
          "content-type": "text/html; charset=utf-8",
        },
      });
    } catch {
      return new Response("404 - Not Found", { status: 404 });
    }
  },
};
