import { zodResolver } from '@hookform/resolvers/zod';
import { useMediaQuery } from '@react-hooks-library/core';
import { cn } from '../../../utils';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '../../shadcn-ui';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  first_name: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
});

interface InlineFormProps {
  submitButton: {
    label: string;
  };
  className?: string;
}
const InlineForm = ({ submitButton, className }: InlineFormProps) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      // email: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mx-auto w-fit">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            'flex space-between gap-x-16 gap-y-8 items-center',
            isMobile && 'flex-col'
          )}
        >
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="min-w-64">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="min-w-64">
                <FormLabel>Business Email Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg">
            {submitButton.label}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InlineForm;
