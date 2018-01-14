import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {ModalController} from "ionic-angular/index";
import {ViewController} from "ionic-angular/index";
import {NavParams} from "ionic-angular/index";
import {ApplicationPage} from '../../application/application'

declare var google;

@Component({
  selector: 'page-flat',
  templateUrl: 'flat.html'
})
export class FlatModal {
  @ViewChild(Slides) slides: Slides;
  public map: any;
  public markers = [];
  flat;
  imgs;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public params: NavParams) {
    this.flat = params.get('data');
    this.imgs = this.flat.imgs
    console.log(this.flat);
  }

  presentApplication(event){
    this.navCtrl.push(ApplicationPage)
  }

  ngOnInit() {
    this.initMap();
  }

  private initMap() {
    var point = {lat: 52.532729, lng: 13.409080};
    let divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 15,
      disableDefaultUI: true,
      draggable: false,
      zoomControl: false
    });

    //create marker
    let myLatLng = new google.maps.LatLng(52.532729,13.409080);
    var marker = new google.maps.Marker({
      map: this.map,
      position: myLatLng
    });
    this.markers.push(marker);

  }

  dismiss(event) {
    console.log(event)
    this.viewCtrl.dismiss();
  }

  hack(val) {
    return Array.from(val);
  }
}
