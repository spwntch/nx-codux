import { z } from 'zod';

export const getStartedFormSchema = z.object({
  first_name: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
});

export type GetStartedFormInputs = z.infer<typeof getStartedFormSchema>;
