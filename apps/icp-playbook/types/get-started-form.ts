import { z } from 'zod';

export const getStartedFormSchema = z.object({
  firstName: z.string().min(1, { message: 'Required' }),
  lastName: z.string().min(1, { message: 'Required' }),
  company: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
  phone: z.string().optional(),
});

export type GetStartedFormInputs = z.infer<typeof getStartedFormSchema>;
