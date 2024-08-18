'use server';

import { Contact, createOrUpdateContact, tagContact } from '@/crm';
import { getErrorMessage } from '../../utils';

export const submitCtaForm = async (
  ctaTag: string,
  firstName: string,
  lastName: string,
  company: string,
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
      company,
      email,
      phone,
    });
    // await tagContact(crmContact.id, ctaTag);

    return { data: { contact: crmContact }, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { data: null, error: message };
  }
};
