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

  metaQuestions = [{
    "id": "q_location",
    "question": "Where is your flat located?",
    "answerType": "text",
    "answerLabels": ["Address"]
  }, {
    "id": "q_rent",
    "question": "Whats the monthly rent (including everything)?",
    "answerType": "tel",
    "answerLabels": ["Rent"]
  }, {
    "id": "q_deposit",
    "question": "How much is the security deposit?",
    "answerType": "text",
    "answerLabels": ["Security Deposit"]
  }, {
    "id": "q_time_available",
    "question": "When is the room available and for how long?",
    "answerType": "text",
    "answerLabels": ["Date"]
  }]

  constructor(public navCtrl: NavController) {
    //this.slides.lockSwipeToNext(true)
  }

  answer(question, answer) {

    this.slides.slideNext(500)
    let maxIndex = this.slides.length()
    if(question + 1 == maxIndex) {
      this.navCtrl.setRoot(HomePage)
    }

    console.log(this.metaQuestions);
  }
}
