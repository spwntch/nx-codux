'use server';

import {
  Contact,
  createOrUpdateContact,
  readCustomFields,
  tagContact,
} from '@/crm';
import { getErrorMessage } from '../../utils';

export const submitCtaForm = async (
  ctaTag: string,
  firstName: string,
  lastName: string,
  company_name: string,
  email: string,
  phone?: string
): Promise<{
  data: { contact: Contact } | null;
  error: string | null;
}> => {
  try {
    const crmContact = await createOrUpdateContact({
      firstName,
      lastName,
      email,
      phone,
      fieldValues: [{ field: '147', value: company_name }], // TODO: can't have field id hardcoded. needs to be dynamic
    });
    // await tagContact(crmContact.id, ctaTag);

    return { data: { contact: crmContact }, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { data: null, error: message };
  }
};
