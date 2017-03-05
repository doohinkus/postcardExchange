import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from "../user.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserServiceService]
})
export class EditComponent implements OnInit {
  @Input() activeUser;
  constructor(private UserServiceService: UserServiceService) { }
  editUser(address:string, name:string){
    this.UserServiceService.editUser(this.activeUser);
  }

  ngOnInit() {
    console.log(this.activeUser);
  }

}
