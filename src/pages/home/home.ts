import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {ModalController} from "ionic-angular/index";
import {FlatModal} from "../modal/flatModal/flat";
import {PeopleModal} from "../modal/peopleModal/people";

import {ApplicationPage} from '../application/application'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  adOnline: boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentFlatModal() {
    let modal = this.modalCtrl.create(FlatModal);
    modal.present();
  }

  presentPeopleModal() {
    let modal = this.modalCtrl.create(PeopleModal);
    modal.present();
  }

  swipe(event: any): any {
    console.log('Swipe Down', event);
    this.move(0)
  }

  move(index) {
    if(index == 0) {
      this.slides.slidePrev(500);
    }
    else {
      this.slides.slideNext(500);
    }

  }



}
