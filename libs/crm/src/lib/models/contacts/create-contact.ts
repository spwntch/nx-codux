'use server';

import {  createOne } from '../../integrations';
import { Contact } from '../../types';

export const createContact = async (
  model: Partial<Contact>
): Promise<{ data: Contact | null; error: string | null; status: string }> => {
  return createOne('contacts', 'contact', model);
};
