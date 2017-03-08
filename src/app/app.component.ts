import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  isLoggedIn:boolean = false;


  constructor (public AuthService: AuthService, private router: Router){

  
     this.AuthService.af.auth.subscribe((auth) =>{
       if (auth==null){
          //not logged in
          this.isLoggedIn = false;
       }else{
         //logged in
         this.isLoggedIn = true;
       }
     })
  }
  login(){
    this.AuthService.loginWithGoogle().then((data) =>{

      console.log(data.auth);
      //uid
      console.log(data.auth.uid);
      //photoURL
      console.log(data.auth.photoURL);
      //email
      console.log(data.auth.email);
      //displayName
      console.log(data.auth.displayName);
    })
  }
  logout(){
    this.AuthService.logout();
    console.log("loggedout");
    this.isLoggedIn = false;
  }


}
