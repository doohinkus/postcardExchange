import { Component, OnInit, Input, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
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
  state: string = 'hide';
  showMap: boolean = false;

  constructor() { }
  toggleState(){
    this.state = (this.state === 'show' ? 'hide' : 'show');
    // this.toggleMap();
  }
  toggleMap(){
    this.showMap = (this.showMap === true ? false : true);
    this.toggleState();
  }

  ngOnInit() {
  }

}
