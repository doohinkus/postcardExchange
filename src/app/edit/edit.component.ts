import { Component, OnInit, Input, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { UserServiceService } from "../user-service.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserServiceService, AuthService]
})
export class EditComponent implements OnInit {
  address:string;
  street:string;
  city:string;
  state:string;
  isLoggedIn:boolean = false;
  uid: string;
  userId:string;

  constructor(
    private UserServiceService: UserServiceService,
    public AuthService: AuthService) {

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
  editUser(id: string,
    address:string,
    street:string,
    city:string,
    state:string){
    var info = {
      "participating": false,
      "received": false,
      "sent": false,
      "address": address,
      "street": street,
      "city": city,
      "state": state,
      "partner": ""
    }
    this.UserServiceService.editUser(id, info);
  }

  ngOnInit() {
    // this.route.params.forEach((urlParameters)=>{
    //   // this.userId = urlParameters["id"];
    // })

  }

}
