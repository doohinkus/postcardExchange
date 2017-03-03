import { Component, OnInit } from '@angular/core';
import { User } from "../user.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';


import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [UserServiceService]
})
export class TestComponent implements OnInit {
   users: FirebaseListObservable<any[]>;
   displayUsers: any[];
  constructor(private UserServiceService: UserServiceService) { }

  ngOnInit() {
    this.users = this.UserServiceService.getUsers();
  
  }

}
