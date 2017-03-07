import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from "angularfire2";
import { ImageInfo } from "./image.model";
import * as firebase from 'firebase';

@Injectable()
export class GalleryService {
  gallery: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
  this.gallery = angularFire.database.list('gallery');
  }
  getImages(){
    return this.gallery;
  }
  uploadImage(
    file,
    startAddress,
    endAddress,
    startLat,
    startLon,
    endLat,
    endLon){
    var currentFile = file.files[0];
    var newUrl: string;
    var storageRef = firebase.storage().ref('images/' + currentFile.name);
    var task = storageRef.put(currentFile);
    var gallery = this.angularFire.database.list('gallery');


    task.on('state_changed',
    function progress(snapshot){
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    }, function error(err){

    }, function complete(){
       storageRef.getDownloadURL().then(function (url){
        //  console.log("start:", startAddress,
        //  "\n url:", url,
        //  "\n endAddress:", endAddress,
        //  "\n startLat:", startLat,
        //   "\n startLon:", startLon,
        //   "\n endLon:", endLon,
        //   "\n endLat:", endLat);
         gallery.push({
           "url": url,
           "startAddress": startAddress,
           "endAddress": endAddress,
           "startLat": startLat,
           "startLon": startLon,
           "endLat": endLat,
           "endLon": endLon

         });
       });
    });


  }

}
