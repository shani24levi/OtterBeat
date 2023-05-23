import { otterbeatApi, authUrl } from '.';

export const login = async () => {
  const response = await otterbeatApi.get(`${authUrl}/login`);
  return response.data;
};
