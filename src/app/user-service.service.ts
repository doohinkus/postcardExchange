import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { AngularFire, FirebaseListObservable} from "angularfire2";
import * as firebase from 'firebase';

@Injectable()
export class UserServiceService {
  users: FirebaseListObservable<any[]>;
  usersID: FirebaseListObservable<any[]>;
  dbs: FirebaseListObservable<any[]>;



  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');


  }
  pairUsers(userId: string, pairId: string){
    var userEntry = this.getUserbyId(userId);
    userEntry.update({"partners": [pairId]});
  }

  getUsers(){
    return this.users;
  }

  addUser(user, uid){
    // this.users.push(newUser);
    //just use firebase!!!!!
    return firebase.database().ref('users/'+uid).update(user);

  }

  getUserbyId(userId: string){
    return this.angularFire.database.object('/users/' + userId);
  }
  editUser(id, params){
    var userEntry = this.getUserbyId(id);
    userEntry.update(params);

  }



}
