import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must include at least one special character ($,#,!)'
    ),
})

export type LoginFormData = z.infer<typeof loginSchema>;
