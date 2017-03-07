import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';

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
   zip:number;



  constructor(public af: AngularFire, public GalleryService: GalleryService, public MapsService: MapsService) {

  }
  upload(file, zip){
    //get zip and formatted address add to db
    var lat: number;
    var lon: number;
    var niceAddress: string;

    var response = this.MapsService.getLatLon(zip).subscribe(
      data => {
        niceAddress = data.results[0].formatted_address;
        lat = data.results[0].geometry.location.lat;
        lon = data.results[0].geometry.location.lng;
        this.GalleryService.uploadImage(file, lat, lon, niceAddress);
      },
      error => console.log(error),
      () => console.log("Finished")
    );

  }
  getZip(zip){
    var response = this.MapsService.getLatLon(zip).subscribe(
      data => {
        // console.log(data.results[0].geometry.location.lat);

      });

    // console.log(response);
  }

  ngOnInit() {
      this.images = this.GalleryService.getImages();
      // this.getZip(97055);

  }

}
