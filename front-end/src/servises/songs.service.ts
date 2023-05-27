import { SongState, Response } from './../types/models/songsModel';
import { otterbeatApi, songsUrl } from '.';

export const getSongs = async () => {
  const response = await otterbeatApi.get<Response>(songsUrl);
  return response.data as Response;
};

export const searchSongsService = async (song: string) => {
  const response = await otterbeatApi.get<Response>(`${songsUrl}/${song}`);
  console.log(`${songsUrl}/${song}`, 'response', response);

  return response.data as Response;
};
