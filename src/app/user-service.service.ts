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
  getUserbyId(userId: string){
    return this.angularFire.database.object('/users/' + userId);
  }
  editUser(id: string, name: string, address: string){
    var userEntry = this.getUserbyId(id);
    userEntry.update({name: name, address: address});

  }


}
