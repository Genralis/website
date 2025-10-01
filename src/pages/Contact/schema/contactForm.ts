import { z } from "zod";

export const TopicEnum = z.enum([
  "General",
  "Mentorship",
  "Partnership/Sponsor",
  "Events/Workshops",
  "Other",
]);

export const contactSchema = z.object({
  name: z.string().min(2, "Too short").max(60, "Too long"),
  email: z.string().email("Enter a valid email"),
  topic: TopicEnum,
  message: z
    .string()
    .min(20, "Please add more details (20+ chars)")
    .max(1000, "Keep it under 1000 chars"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export const TOPIC_OPTIONS: z.infer<typeof TopicEnum>[] = [
  "General",
  "Mentorship",
  "Partnership/Sponsor",
  "Events/Workshops",
  "Other",
];
