import { z } from "zod";
import { Hono } from "hono";
import { db } from "@/db/drizzle";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { accounts } from "@/db/schema";

const app = new Hono()

.get("/", async (c) => {
  const data = await db
  
  .select({
    id: accounts.id,
    name: accounts.name,
  })
  
  .from(accounts);

  
  return c.json({ data: [] });
});

export default app;
