import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[!@#$%^&*(),.?":{}|<>]/,
    "Password must include at least one special character"
  ),
});

export type SignupFormData = z.infer<typeof signupSchema>;