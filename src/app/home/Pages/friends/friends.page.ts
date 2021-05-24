import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';
import { FriendsService } from './friends.service';
import { Component, OnInit } from '@angular/core';
import { IFullProfile } from 'src/app/Interfaces/ScoreSaber/Profile/FullProfile';
import { ToastController } from '@ionic/angular';
import { FriendsGroup } from 'src/app/Interfaces/Friends/FriendsGroup';
@Component({
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.css']
})
export class FriendsPage implements OnInit {

  addUserItem = false;
  Input = '';
  user: IFullProfile = null;
  tempId: string = null;

  constructor(public friendsService: FriendsService, private toast: ToastController) { }

  async ngOnInit(): Promise<void> {
    if (await this.friendsService.GetFriendsFromStorage()) {
      this.friendsService.GetAllFriendProfile();
    }
  }

  showItem(bool: boolean) {
    this.addUserItem = bool;
  }

  async addUser(friend: IStoredUser) {

    const messageString = (await this.friendsService.AddFriendToFriendList(friend)).valueOf()
      ? 'Player already exist!'
      : 'Player addded!';

    const toast = await this.toast.create({
      position: 'top',
      message: messageString,
      duration: 1500,
    });

    toast.present();
    this.showItem(false);
    return;
  }

  RemoveFriend(friend) {
    this.friendsService.RemoveFriendFromList(friend);
  }

  sortBy(friend: FriendsGroup[]) {
    try {
      return friend.sort((a, b) => a.fullFriend.playerInfo.rank - b.fullFriend.playerInfo.rank);
    } catch (e) {
      return;
    }
  }
}
