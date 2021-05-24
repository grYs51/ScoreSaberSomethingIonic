import { IBasicProfile } from './../ScoreSaber/Profile/BasicProfile';
import { IFullProfile } from '../ScoreSaber/Profile/FullProfile';
import { IStoredUser } from '../StoringData/StoreUser';

export interface FriendsGroup {
    storedFriend: IStoredUser;
    fullFriend: IBasicProfile | null;
}
