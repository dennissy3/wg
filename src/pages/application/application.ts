import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {Slides} from "ionic-angular/index";
import { ViewChild } from '@angular/core';



@Component({
  selector: 'page-application',
  templateUrl: 'application.html'
})
export class ApplicationPage {
  @ViewChild(Slides) slides: Slides;

  applicationData = {
  }

  constructor(public navCtrl: NavController) {
    //this.slides.lockSwipeToNext(true)
  }

  answer(question, answer) {
    //todo: store data

    this.slides.slideNext(500)
    let maxIndex = this.slides.length()
    if(question + 1 == maxIndex) {
      this.navCtrl.setRoot(HomePage)
    }
  }

  submitApplication(applicationData){
    //todo: send data to server
    this.slides.slideNext(500)
  }

  returnToDash(){
    this.navCtrl.setRoot(HomePage)
  }
}
