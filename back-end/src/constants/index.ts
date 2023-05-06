import { Songs } from '../types';
import * as infoJson from './data.json';

const infoObject = JSON.parse(JSON.stringify(infoJson));
export const songsArr: Songs[] = infoObject?.default;
