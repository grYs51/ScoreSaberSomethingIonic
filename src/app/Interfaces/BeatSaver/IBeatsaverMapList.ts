import { IBeatSaverMap } from './BeatsaverMap';
export interface IBeatSavermaplist {
  docs: IBeatSaverMap[] | null;
  totalDocs: number;
  lastPage: number;
  prevPage: number;
  nextPage: number;
}
