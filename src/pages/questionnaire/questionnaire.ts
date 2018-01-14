import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {Slides} from "ionic-angular/index";
import { ViewChild } from '@angular/core';



@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html'
})
export class QuestionnairePage {
  @ViewChild(Slides) slides: Slides;

  a = [{
    personal: [],
    meta: []
  }];

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
  },
    {
  "id": "q_cf_party",
  "question": "What describes you better?",
  "answerType": "boolean",
  "answerLabels": ["Berghain two days in a row? I'm in!", "Lets chill and get some drinks!"]
},
{
  "id": "q_cf_creativity",
  "question": "What describes you better?",
  "answerType": "boolean",
  "answerLabels": ["I not only consume music and arts but also enjoy creating it.", "Music makes my day more fun and enjoyable."]
},
{
  "id": "q_cf_cleaning",
  "question": "What describes you better?",
  "answerType": "boolean",
  "answerLabels": ["Uncleaned dishes are the worst! That's why I clean mine right away.", "As long as the place does not look like a cave everything is fine."]
},
{
  "id": "q_cf_ideology",
  "question": "What describes you better?",
  "answerType": "boolean",
  "answerLabels": ["A lot of stuff is wrong in the world and its on us to make it a better place", "Live and let live. Some things are just the way they are."]
},
{
  "id": "q_cf_activities",
  "question": "What describes you better?",
  "answerType": "boolean",
  "answerLabels": ["Cooking dinner together or checking out that new place together? Sure!", "I probably have different plans already."]
}]

  constructor(public navCtrl: NavController) {
    //this.slides.lockSwipeToNext(true)
  }

  answer(question, answer) {

    this.a[0].personal.push(answer)
    this.slides.slideNext(500)
    let maxIndex = this.slides.length()
    if(question + 1 == maxIndex) {
      localStorage.setItem("data", JSON.stringify(this.a));
      this.navCtrl.setRoot(HomePage)
    }

    console.log(JSON.parse(localStorage.getItem("data")));
  }
}
