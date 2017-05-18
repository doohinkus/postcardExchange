import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { UserServiceService } from "./user-service.service";
import { Router } from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component';
import { MapComponent } from './map/map.component';
import { AngularFire, FirebaseListObservable} from "angularfire2";
// import { routerTransition } from './router.animations';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // host: {'[@routerTransition]': ''},
  providers: [UserServiceService, AuthService, AngularFire]
})


export class AppComponent implements OnInit{

  isLoggedIn:boolean = false;
  userID:string= "";
  firstTimeUser:boolean=false;


  constructor (public AuthService: AuthService, private router: Router,
    public UserServiceService: UserServiceService, private af: AngularFire){


     this.AuthService.af.auth.subscribe((auth) =>{
       if (auth==null){
          //not logged in
          this.isLoggedIn = false;
       }else{
         //logged in
         this.isLoggedIn = true;
       }
       //navigate to profile page
     })
  }

  setUser(){
    this.firstTimeUser=true;
    console.log(this.firstTimeUser);
  }
  login(){
    this.AuthService.loginWithGoogle().then((data) =>{
      //check if user exists
      //if first time user write base data
      firebase.database().ref('/users/' + data.auth.uid).once('value').then((snapshot)=>{
        if(snapshot.val() === null){
          var info = {
            "name": data.auth.displayName,
            "photoURL": data.auth.photoURL,
            "email": data.auth.email,
            "postcard" : "not sent",
            "partnerPostcard": "not received"
          }
          this.UserServiceService.addUser(info, data.auth.uid);
        }
      });
      if(this.firstTimeUser){

        var info = {
          "name": data.auth.displayName,
          "photoURL": data.auth.photoURL,
          "email": data.auth.email,
          "postcard" : "not sent",
          "partnerPostcard": "not received"
        }
        this.UserServiceService.addUser(info, data.auth.uid);
      }

      this.userID = data.auth.uid;
      this.router.navigate(['profile', data.auth.uid]);
      this.isLoggedIn = true;

    });

  }

  logout(){
    this.AuthService.logout();
    // console.log("loggedout");
    this.isLoggedIn = false;
    this.router.navigate(['']);

  }
  profile (){
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
      this.router.navigate(['profile', user.uid]);
      }
    });

  }

  ngOnInit() {

  }

}
