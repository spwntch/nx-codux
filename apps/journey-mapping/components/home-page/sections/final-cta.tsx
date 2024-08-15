'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  cn,
  ContentContainer,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  IContent,
  Input,
  SplitLayout,
  StackedForm,
} from '@spwntch/react-ui';

import { useForm } from 'react-hook-form';
import {
  GetStartedFormInputs,
  getStartedFormSchema,
} from '../../../types/get-started-form';

import { logProductRequestEvent } from '@/react-tracking';
import { useRouter } from 'next/navigation';
import { getStarted } from '../../../server-actions/get-started';

type Props = { id: string; content: IContent; className?: string };

const FinalCta = ({ id, content, className }: Props) => {
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
      lastName: '',
      company: '',
      email: '',
      phone: '',
    },
  });

  const handleFormSubmit = async (values: GetStartedFormInputs) => {
    const { firstName, lastName, company, email, phone } = values;
    const { data, error } = await getStarted(
      firstName,
      lastName,
      company,
      email,
      phone
    );
    if (error) console.log(error);
    if (data) {
      logProductRequestEvent(data.contact);
      form.reset();
      router.push(`/thank-you?name=${firstName}`);
    }
  };

  return (
    <div id={id} className={cn('flex-col pt-12  ', className)}>
      <div className="md:container px-3">
        <SplitLayout
          className="gap-6"
          mainPaneCoverage={70}
          containers={[
            <ContentContainer
              key={0}
              hAlign="left"
              vAlign="top"
              innerContent={header}
            />,
            <div key={1} className="mt-8  flex flex-col justify-center h-full">
              <StackedForm
                form={form}
                submitButton={{
                  label: content?.ctas?.[0].label || 'GET STARTED',
                }}
                onSubmit={handleFormSubmit}
                className="w-full"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="min-w-64 w-full">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="min-w-64 w-full">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="min-w-64 w-full">
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="min-w-64 w-full">
                      <FormLabel>Business Email Address</FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="min-w-64 w-full">
                      <FormLabel>Contact Number (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </StackedForm>
              <div className="flex flex-col justfiy-center pt-8 text-sm text-muted-foreground">
                <p className="mx-auto">
                  We&apos;ll be in touch to schedule a chat
                </p>
                {/* <p className="mx-auto">NO CREDIT CARD REQUIRED</p> */}
                {/* <Link href="mailto:hello@interactrdt.com" className="mx-auto underline hover:text-foreground">
                  I still have questions
                </Link> */}
              </div>
            </div>,
          ]}
        />
      </div>
    </div>
  );
};

export default FinalCta;
