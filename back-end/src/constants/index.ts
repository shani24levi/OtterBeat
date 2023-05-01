import { Songs } from '../types';
import * as infoJson from './data.json';

// console.log('JSON.stringify(infoJson)', String(infoJson));
// console.log('JSON.parse(JSON.stringify(infoJson))', JSON.parse(JSON.stringify(infoJson)));

const infoObject = JSON.parse(JSON.stringify(infoJson));
export const songsArr: Songs[] = infoObject?.default;
