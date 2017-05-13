import { Component, OnInit } from '@angular/core';
import { User } from "../user.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.scss'],
  providers: [UserServiceService]
})
export class PairComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  displayUsers: string;

  connectUsers(){
    var count: number = 0;
    var keys = [];
    this.users = this.UserServiceService.getUsers();
    this.users.forEach((data) => {
   //grab keys
      data.forEach((entry) => {
        keys.push(entry.$key);
      });
    });
   //shuffle array
    keys.sort(function(){
      //toggles between 0 and 1, moving elements forward or backward
      //not truly random, but it will serve
      return .5 - Math.random();
    })
    //pair users with person below them in the array, last person links with top person
    keys.forEach((key, index) => {
      if (index < keys.length-1){
        this.UserServiceService.pairUsers(keys[index], keys[index+1]);
      }else{
        this.UserServiceService.pairUsers(keys[index], keys[index-index]);
      }
      console.log(key, index);
    });
    // this.UserServiceService.pairUsers(entry.$key, "test");
  }

 constructor(private UserServiceService: UserServiceService) { }

 ngOnInit() {
  // this.connectUsers();
 }

}
