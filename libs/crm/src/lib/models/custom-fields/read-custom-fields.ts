'use server';

import { CustomField } from '../../types';
import { readAll } from '../../integrations/activecampaign/utils';

export const readCustomFields = async (): Promise<CustomField[]> => {
  return readAll('fields', 'fields');
};
