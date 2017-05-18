import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { UserServiceService } from "../user-service.service";
import { Router } from "@angular/router";

import { AngularFire, FirebaseListObservable} from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserServiceService, AuthService, AngularFire]
})
export class ProfileComponent implements OnInit {
  userID;
  admin:boolean = false;

  constructor(public AuthService: AuthService, private router: Router,
    public UserServiceService: UserServiceService, private af: AngularFire) {




  }

  login() {
    this.AuthService.loginWithGoogle().then((data) =>{
      var info = {
         "name": data.auth.displayName,
         "photoURL": data.auth.photoURL,
         "email": data.auth.email
      }
      this.UserServiceService.addUser(info, data.auth.uid);
//write data
      console.log(data.auth);
      //uid
      console.log(data.auth.uid);
      this.userID = data.auth.uid;
      //photoURL
      console.log(data.auth.photoURL);
      //email
      console.log(data.auth.email);
      //displayName
      console.log(data.auth.displayName);

      this.router.navigate(['profile', data.auth.uid]);

    })
  }


  ngOnInit() {
  }

}
