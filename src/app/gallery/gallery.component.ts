import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [UserServiceService]
})
export class GalleryComponent implements OnInit {

  constructor(public af: AngularFire, public UserServiceService: UserServiceService) {

  }
  upload(file){
    this.UserServiceService.uploadImage(file);
  }
  ngOnInit() {
  }

}
