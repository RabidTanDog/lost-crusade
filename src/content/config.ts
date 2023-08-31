import { defineCollection, reference, z } from "astro:content";

const heroes = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
  }),
});

const mechanics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    heroes: z.array(reference("heroes")),
    note: z.string().optional(),
    strongAgainst: z
      .array(
        z.object({
          id: reference("mechanics"),
          reason: z.string(),
        }),
      )
      .optional(),
    weakAgainst: z
      .array(
        z.object({
          id: reference("mechanics"),
          reason: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { heroes, mechanics };
