'use server';

import { Contact } from '../../types';
import { createContact } from './create-contact';
import { readContactByEmail } from './read-contact-by-email';
import { updateContact } from './update-contact';
export const createOrUpdateContact = async (
  model: Partial<Contact>
): Promise<Contact> => {
  const readResponse = await readContactByEmail(model.email as string);
  if (readResponse.error) throw new Error('Failed to read contact');
  if (readResponse.data) {
    const updateResponse = await updateContact(readResponse.data.id, model);
    if (updateResponse.error)
      throw new Error('Failed to update existing contact');
    return updateResponse.data as Contact;
  } else {
    const createResponse = await createContact(model);
    if (createResponse.error) throw new Error('Failed to create contact');
    return createResponse.data as Contact;
  }
};
