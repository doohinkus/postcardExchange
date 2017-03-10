import { Component, OnInit, Input, trigger, state, animate, transition, style } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';
import { O2UploadToFbsComponent } from 'o2-upload-to-fbs';
import { ImageInfo } from '../image.model';
import { GalleryService } from "../gallery.service";
import { MapsService } from "../maps.service";
import { AuthService } from "../auth.service";
declare var $:any;



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],

  providers: [GalleryService, MapsService, AuthService],
  inputs: ['logStatus'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]

})
export class GalleryComponent implements OnInit {
 // isLoggedIn: boolean;

 title: string = 'My first angular2-google-maps project';
 lat: number = 51.678418;
 lng: number = 7.809007;
images: FirebaseListObservable<any[]>;
isLoggedIn:boolean = false;
toggleVal;

showMap(){
  $(".gallery__actions__map").slideToggle();
}


  constructor(public af: AngularFire, public GalleryService: GalleryService, public MapsService: MapsService, public AuthService: AuthService) {
    this.AuthService.af.auth.subscribe((auth) =>{
      if (auth==null){
         //not logged in
         this.isLoggedIn = false;
      }else{
        //logged in
        this.isLoggedIn = true;
      }
    })
 }



  ngOnInit() {
      this.images = this.GalleryService.getImages();
      // this.getZip(97055);
  }

}
