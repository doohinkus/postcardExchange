import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { AngularFire, FirebaseListObservable} from "angularfire2";
import * as firebase from 'firebase';

@Injectable()
export class UserServiceService {
  users: FirebaseListObservable<any[]>;
  usersID: FirebaseListObservable<any[]>;


  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
    // this.usersID = angularFire.database.list('users/');
  }
  pairUsers(userId: string, pairId: string){
    var userEntry = this.getUserbyId(userId);
    userEntry.update({"partners": [pairId]});
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
  uploadImage(file){
    var currentFile = file.files[0];
    var storageRef = firebase.storage().ref('images/' + currentFile.name);
    var task = storageRef.put(currentFile);
    task.on('state_changed',
    function progress(snapshot){
      // var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    }, function error(err){

    }, function complete(){
       console.log("Success!!!!!!!!")
    }
  );

    // console.log(currentFile);


  }


}
