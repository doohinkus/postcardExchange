import { Component, OnInit, Input, trigger, state, animate, transition, style } from '@angular/core';
import {UrlShrinkerService} from "../url-shrinker.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [UrlShrinkerService],
  inputs: ['image'],
  animations: [
    trigger('showMap', [
      state('show' , style({ opacity: 1, height: 300})),
      state('hide', style({ opacity: 0, height: 0})),
      transition('show <=> hide', animate(500))
    ])
  ]
})
export class MapComponent implements OnInit {
  @Input() image;
  state: string = 'hide';
  showMap: boolean = false;
  twitterUrl:string="https://twitter.com/intent/tweet?text=";
  twitterImage:string;
  message:string = 'Check out this awesome postcard from our international postcard exchange.';
  tweetLink:string = "#/gallery";
  cardUrl:string = "https://quiet-garden-97160.herokuapp.com/?postcard=";
  firebaseLink: string;
  // https://quiet-garden-97160.herokuapp.com/?postcard=

  constructor(public UrlShrinkerService: UrlShrinkerService) { }
  toggleState(){
    this.state = (this.state === 'show' ? 'hide' : 'show');
    // this.toggleMap();
  }
  toggleMap(){
    this.showMap = (this.showMap === true ? false : true);
    this.toggleState();
  }
  tweetImage(img){
      //place shorter link into heroku app

      //then shorten that link and add to message

      this.UrlShrinkerService.shrinkUrl(img).subscribe(
        (data) => {
          this.UrlShrinkerService.shrinkUrl(this.cardUrl+data.data.url).subscribe(
            (data) => {
              //where the magic happens
              this.tweetLink = this.twitterUrl + this. message + data.data.url;
            });

        },
        (err) => {
          console.log(err)
        },
        () => {

        }

      );

  }
  ngOnInit() {
    this.tweetImage(this.image.url);
  }

}
