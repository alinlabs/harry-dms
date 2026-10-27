import { slideData } from './data';

export function getAPNExampleCount(): number {
  return slideData.apnDocument ? 1 : 0;
}
