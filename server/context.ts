/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(
  opts: // HACKs because we can't import `next/cookies` in `/api`-routes
  | {
        type: "rsc"
      }
    | (trpcNext.CreateNextContextOptions & { type: "api" }),
) {
  // for API-response caching see https://trpc.io/docs/caching

  if (opts.type === "rsc") {
    // RSC
    return {
      type: opts.type,
    };
  }

  return {
    type: opts.type,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
