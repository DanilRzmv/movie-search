import { z } from "zod";

export const filterSchema = z.object({
  with_genres: z
    .string()
    .optional()
    .transform((val) => (val ? val.split(",") : []))
    .refine((arr) => arr.every((item) => !isNaN(parseInt(item))), {
      message: "with_genres must be a comma-separated string of numbers",
    }),
  primary_release_year: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : undefined))
    .refine((val) => val === undefined || !isNaN(val), {
      message: "primary_release_year must be a valid year",
    }),
  vote_averageLte: z
    .string()
    .optional()
    .transform((val) => (val ? parseFloat(val) : undefined))
    .refine((val) => val === undefined || (!isNaN(val) && val <= 10), {
      message: "vote_averageLte must be a number less than or equal to 10",
    }),
  vote_averageGte: z
    .string()
    .optional()
    .transform((val) => (val ? parseFloat(val) : undefined))
    .refine((val) => val === undefined || (!isNaN(val) && val <= 10), {
      message: "vote_averageGte must be a number less than or equal to 10",
    }),
  sort_by: z.string().optional(),
  page: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : 1))
    .refine((val) => !isNaN(val), {
      message: "page must be a number",
    }),
});
