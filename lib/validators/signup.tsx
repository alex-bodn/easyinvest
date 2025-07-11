import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must include at least one special character ($,#,!)'
    ),
    passwordRepeat: z.string(),
}).refine((data) => data.password === data.passwordRepeat, {
    path: ["passwordRepeat"],
    message: "Passwords do not match"
});

export type SignupFormData = z.infer<typeof signupSchema>;
