/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { router, publicProcedure, privateProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "~/server/prisma";

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultNoteSelect = Prisma.validator<Prisma.NoteSelect>()({
  id: true,
  title: true,
  content: true,
  createdAt: true,
  updatedAt: true,
});

export const noteRouter = router({
  list: publicProcedure.query(() => {
    return prisma.note.findMany({
      select: defaultNoteSelect,
    });
  }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(({ input }) => {
      return prisma.note.create({
        data: input,
      });
    }),
});
