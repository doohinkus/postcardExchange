import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from "./auth.service";
import { UserServiceService } from "./user-service.service";
import { Router } from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserServiceService, AuthService]
})


export class AppComponent {

  isLoggedIn:boolean = false;


  constructor (public AuthService: AuthService, private router: Router,
    public UserServiceService: UserServiceService){


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
  login(){
    this.AuthService.loginWithGoogle().then((data) =>{
      var info = {
         "name": data.auth.displayName,
         "photoURL": data.auth.photoURL
      }
      this.UserServiceService.addUser(info, data.auth.uid);
//write data
      console.log(data.auth);
      //uid
      console.log(data.auth.uid);
      //photoURL
      console.log(data.auth.photoURL);
      //email
      console.log(data.auth.email);
      //displayName
      console.log(data.auth.displayName);

      this.router.navigate(['profile', data.auth.uid]);

    })
  }
  logout(){
    this.AuthService.logout();
    console.log("loggedout");
    this.isLoggedIn = false;
  }


}
