// schema.ts
import { z } from "zod";

export const formDataOrder = z.object({
  payment: z.string().min(2, "Invalid Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
});
