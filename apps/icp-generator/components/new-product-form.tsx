import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormField, FormItem, FormLabel, Input, StackedForm } from '@spwntch/react-ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const productFormSchema = z.object({
  firstName: z.string().min(1, { message: 'Required' }),
  lastName: z.string().min(1, { message: 'Required' }),
  companyName: z.string().min(1, { message: 'Required' }),
  email: z.string().email(),
  phone: z.string().optional(),
});

export type ProductFormInputs = z.infer<typeof productFormSchema>;

const NewProductForm = () => {
  const form = useForm<ProductFormInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: '',
    },
  });

  const handleFormSubmit = async (values: ProductFormInputs) => {
    console.log(values);
  };

  return (
    <StackedForm
      form={form}
      submitButton={{
        label: 'SUBMIT',
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
              <Input disabled={form.formState.isSubmitting} {...field} />
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
              <Input disabled={form.formState.isSubmitting} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem className="min-w-64 w-full">
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input disabled={form.formState.isSubmitting} {...field} />
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
              <Input disabled={form.formState.isSubmitting} {...field} />
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
              <Input disabled={form.formState.isSubmitting} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </StackedForm>
  );
};

export default NewProductForm;
