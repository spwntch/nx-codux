'use server';

import { Contact, createOrUpdateContact, tagContact } from '@/crm';
import { getErrorMessage } from '../../utils';
import { logGoogeAdsEvent, logProductRequestEvent } from '@/react-tracking';

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
    const crmContact = await createOrUpdateContact({
      firstName,
      lastName,
      email,
      phone,
      fieldValues: [{ field: '147', value: company_name }], // TODO: can't have field id hardcoded. needs to be dynamic
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
