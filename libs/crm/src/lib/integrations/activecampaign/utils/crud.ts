'use server';
export const createOne = async <T>(
  endPointPath: string,
  responseKey: string,
  model: Partial<T>
): Promise<{ data: T | null; error: string | null; status: '200' | '409' }> => {
  const endpoint = `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_URL']}/api/3/${endPointPath}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Api-Token': `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY']}`,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({ contact: model }),
  });

  const data = await response.json();
  if (data.errors)
    return { data: null, error: data.errors[0].title, status: '409' };
  return { data: data[responseKey] as T, status: '200', error: null };
};

export const readAll = async <T>(endPointPath: string, responseKey: string) => {
  const endpoint = `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_URL']}/api/3/${endPointPath}?limit=1000`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Api-Token': `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY']}`,
    },
  });
  const data = await response.json();
  const records = data[responseKey];

  return records as T[];
};

export const readOneByField = async <T, K>(
  endPointPath: string,
  responseKey: string,
  field: {
    name: string;
    value: K;
  }
): Promise<{ data: T | null; error: string | null; status: '200' }> => {
  const endpoint = `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_URL']}/api/3/${endPointPath}?${field.name}=${field.value}`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Api-Token': `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY']}`,
    },
  });
  const data = await response.json();
  const records = data[responseKey];
  return { data: (records[0] as T) || null, error: null, status: '200' };
};

export const updateOneById = async <T>(
  endPointPath: string,
  responseKey: string,
  id: string,
  update: Partial<T>
): Promise<{ data: T | null; error: string | null; status: '200' | '404' }> => {
  const endpoint = `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_URL']}/api/3/${endPointPath}/${id}`;
  const response = await fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Api-Token': `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY']}`,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({ contact: update }),
  });
  const data = await response.json();
  if (data.errors)
    return { data: null, error: data.errors[0].title, status: '404' };
  return { data: data[responseKey] as T, status: '200', error: null };
};
