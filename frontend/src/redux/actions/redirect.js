export const redirect = (path) => ({
    type: 'REDIRECT',
    payload: path,
  });