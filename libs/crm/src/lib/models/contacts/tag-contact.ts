import { tagContact as tagAcContact } from '../../integrations';
export const tagContact = async (
  contactId: string,
  tagId: string
): Promise<{ error: string | null; status: '201' | '404' | '422' }> => {
  return tagAcContact(contactId, tagId);
};
