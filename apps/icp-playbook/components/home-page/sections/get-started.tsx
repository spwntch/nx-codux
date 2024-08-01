'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  cn,
  ContentContainer,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  IContent,
  InlineForm,
  Input,
} from '@spwntch/react-ui';

import { useForm } from 'react-hook-form';
import {
  GetStartedFormInputs,
  getStartedFormSchema,
} from '../../../types/get-started-form';

import { getStarted } from '../../../server-actions/get-started';

type Props = { id: string; content: IContent; className?: string };

const GetStarted = ({ id, content, className }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };

  const form = useForm<GetStartedFormInputs>({
    resolver: zodResolver(getStartedFormSchema),
    defaultValues: {
      first_name: '',
      email: '',
    },
  });

  const handleFormSubmit = async (values: GetStartedFormInputs) => {
    const { first_name, email } = values;
    const { data, error } = await getStarted(first_name, email);
    console.log({ data, error });
  };

  return (
    <div id={id} className={cn('flex-col pt-12 pb-28 ', className)}>
      <div className="container">
        <ContentContainer innerContent={header} />
        <InlineForm
          form={form}
          submitButton={{ label: 'GET STARTED NOW' }}
          onSubmit={handleFormSubmit}
          className="max-w-4xl mx-auto"
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
        </InlineForm>
      </div>
    </div>
  );
};

export default GetStarted;
