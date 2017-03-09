import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from "../user.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserServiceService } from "../user-service.service";
import { AuthService } from "../auth.service";
declare var $:any;

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserServiceService, AuthService]
})
export class UserDetailComponent implements OnInit {
  userId:string;
  name:string = null;
  address:string =null;
  loggedInUser;
  isLoggedIn:boolean = false;

  userToDisplay;
  constructor(
    private userServiceService: UserServiceService,
    private location: Location,
    private route: ActivatedRoute,
    private AuthService: AuthService
  ) {
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


  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.userId = urlParameters["id"];
      console.log(this.userId);
    });
   this.loggedInUser = this.userServiceService.getUserbyId(this.userId);


  }
  editUser(address, city, state, country, zip){
    var params = {
      "address": address,
      "city": city,
      "state": state,
      "country": country,
      "zip": zip
    }
  
    this.userServiceService.editUser(this.userId, params);
    $("#myModal").modal('hide');

  }



}
