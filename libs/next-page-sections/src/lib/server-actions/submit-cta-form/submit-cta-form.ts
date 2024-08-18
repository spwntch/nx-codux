'use server';

import { Contact, createOrUpdateContact, tagContact } from '@/crm';
import { getErrorMessage } from '../../utils';

export const submitCtaForm = async (
  firstName: string,
  lastName: string,
  company_name: string,
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
    console.log({
      firstName,
      lastName,
      company_name,
      email,
      phone,
      triggeredEvents,
    });
    // await createOrUpdateContact({
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   fieldValues: [{ field: '147', value: company_name }], // TODO: can't have field id hardcoded. needs to be dynamic
    // });

    if (triggeredEvents?.ga) {
      console.log(`GA Event: ${triggeredEvents.ga}`);
      // logProductRequestEvent(data.contact);
    }
    if (triggeredEvents?.crm) {
      console.log(`CRM Event: ${triggeredEvents?.crm}`);
      //  await tagContact(crmContact.id, triggeredEvents.crm);
    }

    // return { data: { contact: crmContact }, error: null };
    return { data: null, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { data: null, error: message };
  }
};
