import { IBasicProfile } from './../../../Interfaces/ScoreSaber/Profile/BasicProfile';
import { IonicStorageService } from 'src/app/Shared/Services/Storage/ionic-storage.service';
import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-api.service';
import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';
import { Injectable } from '@angular/core';
import { FriendsGroup } from 'src/app/Interfaces/Friends/FriendsGroup';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  public friends: FriendsGroup[] = [];


  constructor(private scoreSaberSrv: ScoreSaberService, private store: IonicStorageService) {
    this.GetFriendsFromStorage();
  }



  async GetFriendsFromStorage(): Promise<FriendsGroup[] | undefined> {

    const temp = await this.store.GetFriendsFromStorage();

    this.friends = temp ?
      temp.map(friend => {
        return {
          storedFriend: friend,
          fullFriend: null
        };
      }) : [];

    return this.friends;
  }

  GetFriendProfile(id: string): Promise<IBasicProfile> {
    return this.scoreSaberSrv.FetchBasicProfile(id);
  }

  RemoveFriendFromList(friendToRemove: IStoredUser) {
    this.friends = this.friends.filter(friend => friend.storedFriend.id !== friendToRemove.id);
    this.StoreFriends();
  }

  async AddFriendToFriendList(friend: IStoredUser) {
    if (this.CheckIfUserAlreadyExist(friend)) {
      return true;
    }

    const getFriend = await this.GetFriendProfile(friend.id);

    this.friends.push({
      storedFriend: friend,
      fullFriend: getFriend,
    });
    this.StoreFriends();
    return false;
  }

  StoreFriends(){
    const storedFriends = this.friends.map(x => {
      return x.storedFriend;
    });

    this.store.StoreFriends(storedFriends);
  }

  CheckIfUserAlreadyExist(friend: IStoredUser): boolean | undefined {
    return this.friends.some(obj => obj.storedFriend.id === friend.id);
  }

  async GetAllFriendProfile() {
    if (this.friends.length > 0) {
      this.friends.forEach(async (friend, index) => {
        this.friends[index].fullFriend = await this.GetFriendProfile(friend.storedFriend.id);
      });
    }
    return;
  }
}
