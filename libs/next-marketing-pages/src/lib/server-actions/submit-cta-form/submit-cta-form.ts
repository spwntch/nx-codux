'use server';

import { Contact, createOrUpdateContact, tagContact } from '@/crm';
import { getErrorMessage } from '../../utils';

export const submitCtaForm = async (
  firstName: string,
  lastName: string,
  companyName: string,
  email: string,
  phone?: string,
  triggeredEvents?: {
    ga?: string;
    crm?: string;
  }
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
      fieldValues: [{ field: '147', value: companyName }], // TODO: can't have field id hardcoded. needs to be dynamic
    });

    if (triggeredEvents?.crm) {
      console.log(`CRM Event: ${triggeredEvents?.crm}`);
      await tagContact(crmContact.id, triggeredEvents.crm);
    }

    return { data: { contact: crmContact }, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { data: null, error: message };
  }
};
