import { defineAction } from "astro:actions";
import { z } from "astro/zod";

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.email(),
    }),
    handler: async (email) => {
      return { success: true };
    },
  }),
};
