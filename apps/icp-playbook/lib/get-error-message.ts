export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (error && typeof error === 'object' && 'message' in error)
    return String(error.message);
  if (typeof error === 'string') return error;
  return 'Something went wrong.';
};

export const getGuaranteedError = (error: unknown): Error => {
  if (error instanceof Error) return error;
  const message = getErrorMessage(error);
  return new Error(message);
};

export const throwGuaranteedError = (error: unknown): never => {
  throw getGuaranteedError(error);
};
