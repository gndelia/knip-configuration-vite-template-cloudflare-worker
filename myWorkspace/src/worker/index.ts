import { Hono } from "hono";

// import { usedFn } from "./unused";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => {
  // usedFn()
  return c.json({ name: "Cloudflare" })
});

export default app;
