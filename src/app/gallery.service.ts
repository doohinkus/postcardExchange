import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from "angularfire2";
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
  uploadImage(file, lat, lon, niceAddress){
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
         gallery.push({"url": url, "lat": lat, "lon": lon, "niceAddress": niceAddress});
       });
    });


  }

}
