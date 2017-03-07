import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';
import { ImageInfo } from '../image.model';

import { GalleryService } from "../gallery.service";
import { MapsService } from "../maps.service";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss'],
  providers: [GalleryService, MapsService]
})
export class AddImageComponent implements OnInit {
  
  startZip:number;
  endZip:number;
  lat:number;
  lon:number;
  startLat:number;
  startLon:number;
  endLat:number;
  endLon:number;

  constructor(public af: AngularFire, public GalleryService: GalleryService, public MapsService: MapsService) { }
  upload(file, startZip, endZip){
    //get zip and formatted address add to db
    var startLat: number;
    var startLon: number;
    var endLat: number;
    var endLon: number;

    var startAddress: string;
    var endAddress: string;


    this.MapsService.getLatLon(startZip).subscribe(
      data => {
        startAddress = data.results[0].formatted_address;
        this.startLat = data.results[0].geometry.location.lat;
        this.startLon = data.results[0].geometry.location.lng;
      },
      error => console.log(error),
      () => console.log("Finished")
    );
    this.MapsService.getLatLon(endZip).subscribe(
      data => {
        endAddress = data.results[0].formatted_address;
        this.endLat = data.results[0].geometry.location.lat;
        this.endLon = data.results[0].geometry.location.lng;
      },
      error => console.log(error),
      () => {
      //  console.log(startAddress, endAddress)
        this.GalleryService.uploadImage(
          file,
          startAddress,
          endAddress,
          this.startLat,
          this.startLon,
          this.endLat,
          this.endLon
        );
      }

    );




  }
  getZip(zip){
    var response = this.MapsService.getLatLon(zip).subscribe(
      data => {
      this.lat = data.results[0].geometry.location.lat;
      this.lon = data.results[0].geometry.location.lng;
        // console.log(this.lat, this.lon);
      });

    // console.log(response);
  }

  ngOnInit() {
      // this.images = this.GalleryService.getImages();
  }

}
