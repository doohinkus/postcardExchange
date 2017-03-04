import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from "../user.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserServiceService]
})
export class UserDetailComponent implements OnInit {
  userId:string;
  userToDisplay;
  constructor(
    private userServiceService: UserServiceService,
    private location: Location,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.userId = urlParameters["id"];
    });
    this.userToDisplay = this.userServiceService.getUserbyId(this.userId);
  }

}
