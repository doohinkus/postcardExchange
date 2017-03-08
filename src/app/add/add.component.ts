import { Component, OnInit } from '@angular/core';
// import { User } from "../user.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserServiceService } from "../user-service.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserServiceService, AuthService]
})
export class AddComponent implements OnInit {
  isLoggedIn:boolean = false;
  uid: string;
  name: string;

  constructor(private UserServiceService: UserServiceService, public AuthService: AuthService) {

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
    // this.users = this.UserServiceService.getUsers();
  }
  submitForm(address: string, street: string, city: string, state: string){

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
    

  }

}
