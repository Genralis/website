import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.email("Enter a valid email"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
});
export type NewsletterValues = z.infer<typeof newsletterSchema>;
