import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UrlShrinkerService {
  bitlyBase:string = "https://api-ssl.bitly.com/v3/shorten?access_token=";
  token:string = "705031b0483e144aeb3c248560d1fbe55e7f4067";
  longUrl:string = "&longUrl=";
  bitlyUrl: string = this.bitlyBase + this.token + this.longUrl;

  constructor(private Http: Http) {

  }

  shrinkUrl(url:string){
      return this.Http.get(this.bitlyUrl + encodeURIComponent(url)).map(res => res.json());
  }

}
