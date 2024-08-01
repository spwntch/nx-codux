'use server';

export const getStarted = async (): Promise<{ data: { ping: string } }> => {
  return { data: { ping: 'pong' } };
};
