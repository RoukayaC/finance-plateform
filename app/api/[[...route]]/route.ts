import { Hono } from "hono";
import { handle } from "hono/vercel";

// import summary from "./summary";
// import categories from "./categories";
// import transactions from "./transactions";
import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  // .route("/summary", summary)
  // .route("/categories", categories)
  // .route("/transactions", transactions)
  .route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;