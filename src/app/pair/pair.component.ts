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
   keys.length = 0;
      data.forEach((entry) => {
        keys.push(entry.$key);
      });
    });
  //  //shuffle array
    var scrambled = keys.sort(function(){
      //toggles between 0 and 1, moving elements forward or backward
      //not truly random, but it will serve
      return .5 - Math.random();
    });
    console.log(scrambled);
    scrambled.forEach((key, index) => {
      // console.log("k: ", key, "index: ", index);
      if (index === 0){
          //person person ahead  of me receiving from last person on the list
          this.UserServiceService.pairUsers(scrambled[0], scrambled[1], scrambled[scrambled.length-1]);
        } else if(index!=scrambled.length-1){
          //if it's NOT the first person  or last person pair with person above and the person
          //1 sending to 2  receiving from 0
          this.UserServiceService.pairUsers(scrambled[index], scrambled[index+1], scrambled[index-1]);
        }else{
          //last person on the list sending to first person receviving from person ahead
          this.UserServiceService.pairUsers(scrambled[scrambled.length-1], scrambled[0], scrambled[index-1]);
        }

    });

  //   //pair users with person below them in the array, last person links with top person
  //   scrambled.forEach((key, index) => {
  //     if (index < scrambled.length-1){
  //       if (index === 0){
  //         //person person ahead  of me receiving from last person on the list
  //         this.UserServiceService.pairUsers(scrambled[0], scrambled[1], scrambled[scrambled.length-1]);
  //       } else if(index!=scrambled.length-1){
  //         //if it's NOT the first person  or last person pair with person above and the person
  //         //1 sending to 2  receiving from 0
  //         this.UserServiceService.pairUsers(scrambled[index], scrambled[index+1], scrambled[index-1]);
  //       }else{
  //         //last person on the list sending to first person receviving from person ahead
  //         this.UserServiceService.pairUsers(scrambled[scrambled.length-1], scrambled[0], scrambled[index-1]);
  //       }
   //
  //     }
  //     console.log(scrambled, index);
  //   });
    // this.UserServiceService.pairUsers(entry.$key, "test");
  }

 constructor(private UserServiceService: UserServiceService) { }

 ngOnInit() {
  // this.connectUsers();
 }

}
