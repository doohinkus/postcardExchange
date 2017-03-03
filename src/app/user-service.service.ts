import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class UserServiceService {
  users: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
  }

  getUsers(){
    return this.users;
  }
  addUser(newUser: User){
    this.users.push(newUser);
  }
  getUserbyID(userID: string){
    return this.angularFire.database.object('/users/' + userID);
  }


}
