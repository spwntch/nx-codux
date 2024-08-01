'use server';
import { Contact, readOneByField } from '../../integrations';

export const readContactByEmail = async (
  email: string
): Promise<{ data: Contact | null; error: string | null; status: '200' }> => {
  return readOneByField('contacts', 'contacts', {
    name: 'email',
    value: email,
  });
};
