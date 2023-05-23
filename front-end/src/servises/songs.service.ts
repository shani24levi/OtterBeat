import { otterbeatApi, songsUrl } from '.';

export const getSongs = async () => {
  const response = await otterbeatApi.get(songsUrl);
  return response.data;
};
