import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';
import { ImageInfo } from '../image.model';

import { GalleryService } from "../gallery.service";
import { MapsService } from "../maps.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [GalleryService, MapsService]
})
export class GalleryComponent implements OnInit {
images: FirebaseListObservable<any[]>;



  constructor(public af: AngularFire, public GalleryService: GalleryService, public MapsService: MapsService) {

  }


  ngOnInit() {
      this.images = this.GalleryService.getImages();
      // this.getZip(97055);

  }

}
