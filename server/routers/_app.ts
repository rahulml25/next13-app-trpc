/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from "../trpc";
import { noteRouter } from "./note";

export const appRouter = router({
  note: noteRouter,
});

export type AppRouter = typeof appRouter;
