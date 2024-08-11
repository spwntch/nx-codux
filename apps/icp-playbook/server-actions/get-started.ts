'use server';

import { Contact, readOrCreateContact, tagContact } from '@/crm';
import { getErrorMessage } from '../lib';

export const getStarted = async (
  firstName: string,
  lastName: string,
  company: string,
  email: string,
  phone?:string
): Promise<{
  data: { contact: Contact } | null;
  error: string | null;
}> => {
  try {
    const crmContact = await readOrCreateContact({
      firstName,
      lastName,
      company,
      email,
      phone
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
