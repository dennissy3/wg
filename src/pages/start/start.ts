import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {QuestionnairePage} from "../questionnaire/questionnaire";


@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  constructor(public navCtrl: NavController) {

  }

  goToQuestionnaire() {
    this.navCtrl.setRoot(QuestionnairePage)
  }
}
