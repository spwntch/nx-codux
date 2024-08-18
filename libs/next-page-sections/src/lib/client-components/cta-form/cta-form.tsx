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

import { useRouter } from 'next/navigation';

import { z } from 'zod';
import { submitCtaForm } from '../../server-actions';

export const ctaFormSchema = z.object({
  firstName: z.string().min(1, { message: 'Required' }),
  lastName: z.string().min(1, { message: 'Required' }),
  company_name: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
  phone: z.string().optional(),
});

export type CtaFormInputs = z.infer<typeof ctaFormSchema>;

type FinalCtaProps = {
  id: string;
  content: IContent;
  className?: string;
};

export const CtaForm = ({ id, content, className }: FinalCtaProps) => {
  const router = useRouter();
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };

  const form = useForm<CtaFormInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(ctaFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company_name: '',
      email: '',
      phone: '',
    },
  });

  const handleFormSubmit = async (values: CtaFormInputs) => {
    const { firstName, lastName, company_name, email, phone } = values;
    const { data, error } = await submitCtaForm(
      firstName,
      lastName,
      company_name,
      email,
      phone,
      content?.cta?.triggerEvents || content?.ctas?.[0]?.triggerEvents
    );
    if (error) console.log(error);
    if (data) {
      console.log(data);
      // logProductRequestEvent(data.contact);
      // form.reset();
      // router.push(`/thank-you?name=${firstName}`);
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
                  label: content?.cta?.label || 'GET STARTED',
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
                  name="company_name"
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
