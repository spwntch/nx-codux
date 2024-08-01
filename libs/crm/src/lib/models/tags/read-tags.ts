'use server';

import { CustomField } from '../../types';
import { readAll } from '../../integrations/activecampaign/utils';

export const readTags = async (): Promise<CustomField[]> => {
  return readAll('tags', 'tags');
};
