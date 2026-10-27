import { slideData } from './data';

export function getBankCaseComparisonCount(): number {
  return [slideData.wonCase, slideData.lostCase].length;
}
