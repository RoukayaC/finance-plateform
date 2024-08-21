import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
export const runtime = "edge";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { error } from "console";

const app = new Hono().basePath("/api");

app.get(
  "/hello",
   clerkMiddleware(),
  
  );

export const GET = handle(app);
export const POST = handle(app);
