import { useMediaQuery } from '@react-hooks-library/core';
import { cn } from '../../../utils';
import { Button, Form } from '../../shadcn-ui';

import { PropsWithChildren } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

interface InlineFormProps {
  form: UseFormReturn<any, any, undefined>;
  submitButton: {
    label: string;
  };
  onSubmit: (values: z.infer<any>) => void;
  className?: string;
}
const InlineForm = ({
  form,
  children,
  submitButton,
  onSubmit,
  className,
}: InlineFormProps & PropsWithChildren) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

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
          {children}
          <Button type="submit" size="xl">
            {submitButton.label}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InlineForm;
