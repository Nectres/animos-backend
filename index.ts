import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { z } from "zod";
import express from "express";

const t = initTRPC.create();

export const appRouter = t.router({
  demo: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => {
    return {
      msg: `Hello there! ${input.name}`,
    };
  }),
});

const app = express();

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  })
);

export type AppRouter = typeof appRouter;

app.listen(3000, () => console.log("Express server started"));
