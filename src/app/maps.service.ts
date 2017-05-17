import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MapsService {

  constructor(private Http: Http) {

  }
  getLatLon(zip:number){
      return this.Http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + zip).map(res => res.json());
  }


}
