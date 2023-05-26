import { SongState, Response } from './../types/models/songsModel';
import { otterbeatApi, songsUrl } from '.';

export const getSongs = async () => {
  const response = await otterbeatApi.get<Response>(songsUrl);
  return response.data as Response;
};
