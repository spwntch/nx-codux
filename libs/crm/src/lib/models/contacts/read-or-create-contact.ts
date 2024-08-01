'use server';

import { Contact } from '../../integrations';
import { createContact } from './create-contact';
import { readContactByEmail } from './read-contact-by-email';
export const readOrCreateContact = async (
  model: Partial<Contact>
): Promise<Contact> => {
  let crmContact: Contact;
  const readResponse = await readContactByEmail(model.email as string);
  if (readResponse.data) crmContact = readResponse.data;
  else {
    const createResponse = await createContact(model);
    if (createResponse.data) crmContact = createResponse.data;
    else throw new Error('Failed to create contact');
  }
  return crmContact;
};
