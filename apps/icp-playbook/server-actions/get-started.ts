'use server';

import { Contact, readOrCreateContact } from '@/crm';
import { getErrorMessage } from '../lib';

export const getStarted = async (
  first_name: string,
  email: string
): Promise<{
  data: { contact: Contact } | null;
  error: string | null;
}> => {
  try {
    const crmContactModel: Partial<Contact> = {
      firstName: first_name,
      email,
    };

    const crmContact = await readOrCreateContact(crmContactModel);
    return { data: { contact: crmContact }, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { data: null, error: message };
  }
};
