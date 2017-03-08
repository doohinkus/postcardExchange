import { Component } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  private isLoggegin: boolean = false;
  constructor (public AuthService: AuthService, private router: Router){

     this.AuthService.af.auth.subscribe((auth) =>{
       if (auth==null){
          //not logged in
          this.isLoggegin = false;
       }else{
         //logged in
         this.isLoggegin = true;
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
    this.isLoggegin = false;
  }


}
