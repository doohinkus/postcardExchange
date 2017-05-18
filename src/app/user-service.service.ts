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

  pairUsers(userId: string, addresseeId: string, receipientId: string){
    var userEntry = this.getUserbyId(userId);
    // if ()
    userEntry.update({
      "partners" : addresseeId,
      "receipient" : receipientId,
      "postcard" : "not sent",
      "partnerPostcard": "not received"
    });
  }

  getUsers(){
    return this.users;
  }

  addUser(user, uid){
    return firebase.database().ref('users/'+uid).update(user);
  }
  checkUserbyId(userId:string){
    let exists:boolean = false
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot){
      if(snapshot.val() !== null){
        exists=true;
        console.log(exists, "asinside");
      }
    });
    console.log(exists, "outsiede");
    return exists;
  }
  getUserbyId(userId: string){
    return this.angularFire.database.object('/users/' + userId);
  }
  editUser(id, params){
    var userEntry = this.getUserbyId(id);
    userEntry.update(params);
  }



}
