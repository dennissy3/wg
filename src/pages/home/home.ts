import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {ModalController} from "ionic-angular/index";
import {FlatModal} from "../modal/flatModal/flat";
import {PeopleModal} from "../modal/peopleModal/people";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  adOnline: boolean = true;

  applicants = [{
    "name": "David",
    "age": 25,
    "job": "Architect",
    "fit": 75
  },
    {
      "name": "Kina",
      "age": 21,
      "job": "Student",
      "fit": 90
    },
    {
      "name": "Maleen",
      "age": 29,
      "job": "Designer",
      "fit": 42
    },
    {
      "name": "Max",
      "age": 23,
      "job": "Sales",
      "fit": 23
    }
  ];

  flats = [{
    "imgs": ["1", "2", "3"],
    "location": "Neukölln",
    "people": ["Maja", "Karlo"],
    "nickname": "Neuköllnies"
  },
    {
      "imgs": ["4", "5", "6"],
      "location": "Prenzlauer Berg",
      "people": ["Phreddy", "Susi"],
      "nickname": "Wang Bang"
    }
  ]

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentFlatModal(f) {
    let modal = this.modalCtrl.create(FlatModal,{data: f});
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
