import { Artist } from './types';
import * as infoJson from './data.json';

export const infoObject: Artist[] = JSON.parse(JSON.stringify(infoJson));
