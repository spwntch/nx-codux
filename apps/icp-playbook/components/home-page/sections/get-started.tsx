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
  SplitLayout,
} from '@spwntch/react-ui';

import { useForm } from 'react-hook-form';
import {
  GetStartedFormInputs,
  getStartedFormSchema,
} from '../../../types/get-started-form';

import { useRouter } from 'next/navigation';
import { getStarted } from '../../../server-actions/get-started';
import Link from 'next/link';

type Props = { id: string; content: IContent; className?: string };

const GetStarted = ({ id, content, className }: Props) => {
  const router = useRouter();
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };

  const form = useForm<GetStartedFormInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(getStartedFormSchema),
    defaultValues: {
      firstName: '',
      email: '',
    },
  });

  const handleFormSubmit = async (values: GetStartedFormInputs) => {
    const { firstName, email } = values;
    console.log(firstName, email);
    const { data, error } = await getStarted(firstName, email);
    console.log({ data, error });
    form.reset();
    router.push(`/thank-you?name=${firstName}`);
  };

  return (
    <div id={id} className={cn('flex-col pt-12 pb-28 ', className)}>
      <div className="container">
        <SplitLayout
          containers={[
            <ContentContainer key={0} innerContent={header} />,
            <div key={1}>
              <InlineForm
                form={form}
                submitButton={{ label: 'GET STARTED NOW' }}
                onSubmit={handleFormSubmit}
                className="max-w-4xl mx-auto"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="min-w-64">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                        />
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
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </InlineForm>
              <div className="flex justfiy-center pt-8 text-sm text-muted-foreground underline hover:text-foreground">
                <Link href="mailto:hello@interactrdt.com" className="mx-auto">
                  I still have questions
                </Link>
              </div>
            </div>,
          ]}
        />
      </div>
    </div>
  );
};

export default GetStarted;
