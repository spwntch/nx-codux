'use server';

import { Contact, readOrCreateContact, tagContact } from '@/crm';
import { getErrorMessage } from '../lib';

export const getStarted = async (
  first_name: string,
  email: string
): Promise<{
  data: { contact: Contact } | null;
  error: string | null;
}> => {
  try {
    const crmContact = await readOrCreateContact({
      firstName: first_name,
      email,
    });
    await tagContact(
      crmContact.id,
      'start-automation_icp-playbook-get-started-form'
    );

    return { data: { contact: crmContact }, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { data: null, error: message };
  }
};
