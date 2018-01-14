import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {ModalController} from "ionic-angular/index";
import {ViewController} from "ionic-angular/index";

@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeopleModal {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss(event) {
    console.log(event)
    this.viewCtrl.dismiss();
  }
}
