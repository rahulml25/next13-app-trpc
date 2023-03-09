import { createTRPCNextLayout } from "~/@trpc/next-layout";
import { createContext } from "~/server/context";
import { appRouter, AppRouter } from "~/server/routers/_app";
import superjson from "superjson";

export const rsc = createTRPCNextLayout({
  router: appRouter,
  transformer: superjson,
  createContext() {
    return createContext({
      type: "rsc",
    });
  },
});
