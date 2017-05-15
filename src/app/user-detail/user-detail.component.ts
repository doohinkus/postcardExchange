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
  loggedInUserPartner;
  loggedInUserSender;
  isLoggedIn:boolean = false;
  isSent:boolean = false;
  partnerIsSent:boolean = false;
  showPartner:boolean = false;
  senderPostcard:boolean=false;
  partnerPostcardMessage: string = "not sent";
  senderPostcardMessage: string = "not sent";
  month:number;
  day:number;
  year:number;
  displayDate:any;
  emptyAddress:boolean = false;

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
    this.showDate();

   this.route.params.forEach((urlParameters)=>{
    this.userId = urlParameters["id"];
   });
   this.loggedInUser = this.userServiceService.getUserbyId(this.userId);
   this.loggedInUser.subscribe((data)=>{
    this.updateMyPostcard(data.postcard);
    this.updatePartnerPostcard(data.partnerPostcard);
  //if user has been paired
    if (data.partners){
      this.loggedInUserPartner = this.userServiceService.getUserbyId(data.partners);
      this.loggedInUserSender = this.userServiceService.getUserbyId(data.receipient);
      this.checkPostcardSender(this.loggedInUserSender);
      this.showPartner=true;
    }else{
      this.showPartner=false;
    }
   });
   this.checkAddress(this.loggedInUser);


  //  this.loggedInUserPartner = this.userServiceService.getUserbyId(this.userId);
  }
  checkAddress(user){
    user.subscribe((data)=>{
     //  console.log(data.partners ," sadfsd");
     if (!data.address || !data.city || !data.state || !data.zip){
       this.emptyAddress=true;
     }else{
       this.emptyAddress=false;
     }
    });
  }
  checkPostcardSender(user){
    user.subscribe((data)=>{
     //  console.log(data.partners ," sadfsd");
     if (!data.postcard){
       this.senderPostcardMessage="NOT sent";
     }else{
       this.senderPostcardMessage=data.postcard;
     }
    });
  }


  showDate(){
    let d = new Date();
    let months = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
   ];
   let month = months[d.getMonth()];
   this.displayDate = month + ", " + d.getDate() + ", " + d.getFullYear();
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

  updateMyPostcard(option){
    var params = {
      "postcard": option
    }
    if (option==="sent"){
      this.isSent=true;
    }else{
      this.isSent=false;
    }
    //update firebase
    this.userServiceService.editUser(this.userId, params);

  }
  updatePartnerPostcard(option){
    var params = {
      "partnerPostcard": option
    }
    this.userServiceService.editUser(this.userId, params);
    if (option==="received"){
      this.partnerPostcardMessage= "received";
      this.partnerIsSent=true;
    }else{
      this.partnerPostcardMessage= "not received";
      this.partnerIsSent=false;

    }
  }


}
