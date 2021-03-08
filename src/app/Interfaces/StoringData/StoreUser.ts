import { ISongScore } from '../ScoreSaber/Scores/SongScore';
import { IFullProfile } from './../ScoreSaber/Profile/FullProfile';

export interface IStoreFullUser {
  User: IFullProfile;
  Date: Date;
  Scores: ISongScore[] | null;
}
