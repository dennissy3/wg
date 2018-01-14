import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-flat',
  templateUrl: 'flat.html'
})
export class FlatPage {
  public map: any;
  public markers = [];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.initMap();
  }

  private initMap() {
    var point = {lat: 52.532729, lng: 13.409080};
    let divMap = (<HTMLInputElement>document.getElementById('map2'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 15,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false
    });
/*
    //create marker
    let myLatLng = new google.maps.LatLng(52.532729,13.409080);
    var marker = new google.maps.Marker({
      map: this.map,
      position: myLatLng
    });
    this.markers.push(marker);
*/
  }

  close() {
    this.navCtrl.pop();
  }

}
