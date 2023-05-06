export const isError = (e: any) => {
  return e && e.stack && e.message && typeof e.stack === 'string' && typeof e.message === 'string';
};
