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

 constructor(private UserServiceService: UserServiceService) { }

 ngOnInit() {
   var index: number = 0;
   this.users = this.UserServiceService.getUsers();
   this.users.forEach((data) => {
     data.forEach((entry) => {
       console.log(entry.$key);
     })
   })

 }

}
