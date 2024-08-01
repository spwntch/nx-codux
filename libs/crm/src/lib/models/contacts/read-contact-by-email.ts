'use server';
import {  readOneByField } from '../../integrations';
import { Contact } from '../../types';

export const readContactByEmail = async (
  email: string
): Promise<{ data: Contact | null; error: string | null; status: '200' }> => {
  return readOneByField('contacts', 'contacts', {
    name: 'email',
    value: email,
  });
};
