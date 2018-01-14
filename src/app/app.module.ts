import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {FlatModal} from "../pages/modal/flatModal/flat";
import {StartPage} from "../pages/start/start";
import {QuestionnairePage} from "../pages/questionnaire/questionnaire";
import {IonicSwipeAllModule} from "ionic-swipe-all/dist/index";
import {PeopleModal} from "../pages/modal/peopleModal/people";
import {KeysPipe} from "../pages/modal/flatModal/flat";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlatModal,
    StartPage,
    QuestionnairePage,
    PeopleModal,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    IonicSwipeAllModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FlatModal,
    StartPage,
    QuestionnairePage,
    PeopleModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    KeysPipe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
