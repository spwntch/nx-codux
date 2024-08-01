'use server';

import { Contact } from '@/crm';
import { getErrorMessage } from '../lib';

export const getStarted = async (
  first_name: string,
  email: string
): Promise<{
  data: { ping: string } | null;
  error: string | null;
}> => {
  try {
    console.log(first_name, email);

    const crmContact: Partial<Contact> = {
      firstName: first_name,
      email,
    };

    return { data: { ping: 'pong' }, error: null };
  } catch (error) {
    const message = getErrorMessage(error);
    return { data: null, error: message };
  }
};
