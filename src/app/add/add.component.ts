import { Component, OnInit } from '@angular/core';
import { User } from "../user.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [UserServiceService]
})
export class AddComponent implements OnInit {

  constructor(private UserServiceService: UserServiceService) { }

  ngOnInit() {
    // this.users = this.UserServiceService.getUsers();
  }
  submitForm(address:string, name:string){

    var newUser: User = new User(address, name, [{"id":"test0"}], [{
      "lat": 1000,
      "lon": 90000,
      "received": false,
      "sent": true,
      "state": "California",
      "city": "SF",
      "type": "userPostcard"
    },
    {
      "lat": 9000,
      "lon": 10000,
      "received": false,
      "sent": true,
      "state": "California",
      "city": "SJ",
      "type": "partnerPostcard"
    }]);
    this.UserServiceService.addUser(newUser);
    // var newUser: User = new User(address, name, placeholderPartner, placeholderPostcard);

  }

}
