'use server';

import { Contact, createOne } from '../../integrations';

export const createContact = async (
  model: Partial<Contact>
): Promise<{ data: Contact | null; error: string | null; status: string }> => {
  return createOne('contacts', 'contact', model);
};
