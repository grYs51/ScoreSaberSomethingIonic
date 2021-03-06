import { IBasicProfile } from './BasicProfile';
import { IScoreStats } from './ScoreStats';

export interface IFullProfile extends IBasicProfile{
    scoreStats: IScoreStats | null;
}