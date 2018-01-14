webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__application_application__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FlatModal = (function () {
    function FlatModal(navCtrl, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.markers = [];
        var flat = params.get('data');
        console.log(JSON.stringify(flat));
    }
    FlatModal.prototype.ngOnInit = function () {
        this.initMap();
    };
    FlatModal.prototype.initMap = function () {
        var point = { lat: 52.532729, lng: 13.409080 };
        var divMap = document.getElementById('map');
        this.map = new google.maps.Map(divMap, {
            center: point,
            zoom: 15,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true
        });
        //create marker
        var myLatLng = new google.maps.LatLng(52.532729, 13.409080);
        var marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng
        });
        this.markers.push(marker);
    };
    FlatModal.prototype.dismiss = function (event) {
        console.log(event);
        this.viewCtrl.dismiss();
    };
    FlatModal.prototype.presentApplication = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__application_application__["a" /* ApplicationPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], FlatModal.prototype, "slides", void 0);
    FlatModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flat',template:/*ion-inline-start:"C:\Users\Daniel Burgmann\wg\src\pages\modal\flatModal\flat.html"*/'<ion-header swipeAll (swipedown)="dismiss($event)">\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="flat card-background-page">\n\n  <p class="title">Neuköllnies</p>\n\n\n\n  <div class="flatmates">\n\n    <div class="flatmate">\n\n      <div class="head" id="maja"></div>\n\n      <p>Maja</p>\n\n    </div>\n\n    <div class="flatmate">\n\n      <div class="head" id="karlo"></div>\n\n      <p>Karlo</p>\n\n    </div>\n\n  </div>\n\n\n\n  {{flat}}\n\n  <ion-slides class="flat-slider" slidesPerView="1.5">\n\n    <ion-slide *ngFor="let i of f.imgs">\n\n      <ion-card style="background-image: url(\'../../../assets/{{i}}.jpg\');">\n\n      </ion-card>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <div id="map"></div>\n\n  <button ion-button color="cta" class="floatingButton" mode="ios" full (click)="presentApplication($event)">Apply</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel Burgmann\wg\src\pages\modal\flatModal\flat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["f" /* NavParams */]])
    ], FlatModal);
    return FlatModal;
}());

//# sourceMappingURL=flat.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicationPage = (function () {
    function ApplicationPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.metaQuestions = [{
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
            }];
        //this.slides.lockSwipeToNext(true)
    }
    ApplicationPage.prototype.answer = function (question, answer) {
        this.slides.slideNext(500);
        var maxIndex = this.slides.length();
        if (question + 1 == maxIndex) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        console.log(this.metaQuestions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__["h" /* Slides */])
    ], ApplicationPage.prototype, "slides", void 0);
    ApplicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-application',template:/*ion-inline-start:"C:\Users\Daniel Burgmann\wg\src\pages\application\application.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content>\n\n  <ion-slides pager>\n\n\n\n    <ion-slide>\n\n        <p class="question">When do you want to meet your potential new roommates?</p>\n\n        <ion-item>\n\n          <ion-slides pager class="dateSlider">\n\n            <ion-slide class="dateSlide">\n\n              <p class="date"> 18th January 2018</p>\n\n              <p class="link"> Check Calendar </p>\n\n            </ion-slide>\n\n            <ion-slide class="dateSlide">\n\n              <p class="date"> 20th January 2018</p>\n\n              <p class="link"> Check Calendar </p>\n\n            </ion-slide>\n\n            <ion-slide class="dateSlide">\n\n              <p class="date"> 21th January 2018</p>\n\n              <p class="link"> Check Calendar </p>\n\n            </ion-slide>\n\n          </ion-slides>\n\n        </ion-item>\n\n        <button ion-button color="cta" class="floatingButton" mode="ios" full (click)="answer(0,\'date\')">Next</button>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <p class="question">Add a little message to your application for Maja</p>\n\n      <ion-card class="answer">\n\n       <ion-textarea  \n\n        placeholder="Hi Maya looking forward to meet you..."\n\n       >  \n\n       </ion-textarea>\n\n      </ion-card>\n\n       <button ion-button color="cta" class="floatingButton" mode="ios" full (click)="move($event)">Send</button>\n\n    </ion-slide>\n\n\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Daniel Burgmann\wg\src\pages\application\application.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ApplicationPage);
    return ApplicationPage;
}());

//# sourceMappingURL=application.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleModal = (function () {
    function PeopleModal(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PeopleModal.prototype.dismiss = function (event) {
        console.log(event);
        this.viewCtrl.dismiss();
    };
    PeopleModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-people',template:/*ion-inline-start:"C:\Users\Daniel Burgmann\wg\src\pages\modal\peopleModal\people.html"*/'<ion-header swipeAll (swipedown)="dismiss($event)">\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel Burgmann\wg\src\pages\modal\peopleModal\people.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["i" /* ViewController */]])
    ], PeopleModal);
    return PeopleModal;
}());

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionnairePage = (function () {
    function QuestionnairePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.a = [{
                personal: [],
                meta: []
            }];
        this.metaQuestions = [{
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
            }];
        //this.slides.lockSwipeToNext(true)
    }
    QuestionnairePage.prototype.answer = function (question, answer) {
        this.a[0].personal.push(answer);
        this.slides.slideNext(500);
        var maxIndex = this.slides.length();
        if (question + 1 == maxIndex) {
            localStorage.setItem("data", JSON.stringify(this.a));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        console.log(JSON.parse(localStorage.getItem("data")));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__["h" /* Slides */])
    ], QuestionnairePage.prototype, "slides", void 0);
    QuestionnairePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questionnaire',template:/*ion-inline-start:"C:\Users\Daniel Burgmann\wg\src\pages\questionnaire\questionnaire.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides pager>\n\n\n\n    <ion-slide *ngFor="let q of metaQuestions; let i = index">\n\n      <p class="question">{{q.question}}</p>\n\n\n\n      <ion-item *ngIf="q.answerLabels.length <= 1">\n\n        <ion-input type={{q.answerType}} [(ngModel)]="a[0].meta[i]" placeholder={{q.answerLabels[0]}}></ion-input>\n\n        <button clear item-right (click)="move(0, \'Klosterstraße 62\')"><ion-icon name="arrow-forward"></ion-icon></button>\n\n      </ion-item>\n\n\n\n      <div *ngIf="q.answerLabels.length == 2">\n\n        <ion-card class="answer" (click)="answer(i, q.answerLabels[0])">\n\n          <ion-card-content>\n\n            {{q.answerLabels[0]}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card class="answer" (click)="answer(i, q.answerLabels[1])">\n\n          <ion-card-content>\n\n            {{q.answerLabels[1]}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel Burgmann\wg\src\pages\questionnaire\questionnaire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], QuestionnairePage);
    return QuestionnairePage;
}());

//# sourceMappingURL=questionnaire.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modal_flatModal_flat__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_start_start__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_questionnaire_questionnaire__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_application_application__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_swipe_all_dist_index__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modal_peopleModal_people__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modal_flatModal_flat__["a" /* FlatModal */],
                __WEBPACK_IMPORTED_MODULE_8__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_peopleModal_people__["a" /* PeopleModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_application_application__["a" /* ApplicationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_swipe_all_dist_index__["a" /* IonicSwipeAllModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modal_flatModal_flat__["a" /* FlatModal */],
                __WEBPACK_IMPORTED_MODULE_8__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_questionnaire_questionnaire__["a" /* QuestionnairePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modal_peopleModal_people__["a" /* PeopleModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_application_application__["a" /* ApplicationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Daniel Burgmann\wg\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Daniel Burgmann\wg\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionnaire_questionnaire__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartPage = (function () {
    function StartPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    StartPage.prototype.goToQuestionnaire = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__questionnaire_questionnaire__["a" /* QuestionnairePage */]);
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"C:\Users\Daniel Burgmann\wg\src\pages\start\start.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n\n\n<ion-content (click)="goToQuestionnaire()">\n\n  <p class="title">r__m</p>\n\n\n\n  <p class="continue-info">Tap to continue</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel Burgmann\wg\src\pages\start\start.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_flatModal_flat__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_peopleModal_people__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.adOnline = true;
        this.applicants = [{
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
        this.flats = [{
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
        ];
    }
    HomePage.prototype.presentFlatModal = function (f) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_flatModal_flat__["a" /* FlatModal */], { data: f });
        modal.present();
    };
    HomePage.prototype.presentPeopleModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_peopleModal_people__["a" /* PeopleModal */]);
        modal.present();
    };
    HomePage.prototype.swipe = function (event) {
        console.log('Swipe Down', event);
        this.move(0);
    };
    HomePage.prototype.move = function (index) {
        if (index == 0) {
            this.slides.slidePrev(500);
        }
        else {
            this.slides.slideNext(500);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Daniel Burgmann\wg\src\pages\home\home.html"*/'<ion-content class="card-background-page" no-bounce>\n\n  <ion-slides direction="vertical" initialSlide="1">\n\n    <ion-slide class="top">\n\n      <p class="name title">Hey Karlo</p>\n\n      <ion-card class="wg-ad">\n\n        <div class="card-title">"Neuköllnies"</div>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <ion-list>\n\n          <ion-item>\n\n            <button *ngIf="!adOnline" ion-button clear>Add your fantastic room</button>\n\n            <button *ngIf="adOnline" ion-button clear>Edit your fancy room</button>\n\n          </ion-item>\n\n          <ion-item>\n\n            <button *ngIf="adOnline" ion-button clear>Add your kick-ass flatmates</button>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card>\n\n\n\n      <p class="subtitle">Messages</p>\n\n      <ion-slides slidesPerView="3" class="message-slider">\n\n        <ion-slide *ngFor="let a of applicants" (click)="presentPeopleModal()">\n\n          <ion-card class="message">\n\n            <div class="fit-circle">{{a.name}}</div>\n\n            <span class="age">\n\n              <span id="age">{{a.age}}</span>\n\n              <span>years<br>old</span>\n\n            </span>\n\n            <span class="occupation">{{a.job}}</span>\n\n          </ion-card>\n\n        </ion-slide>\n\n      </ion-slides>\n\n\n\n\n\n      <p class="title bottom-arrow" (click)="move(1)"><ion-icon name="arrow-up"></ion-icon></p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <ion-slides swipeAll (swipedown)="swipe($event)" class="flat-slider">\n\n\n\n        <ion-slide *ngFor="let f of flats" swipeAll (swipeup)="presentFlatModal(f)" >\n\n          <p class="title" (click)="move(0)"><ion-icon name="arrow-down"></ion-icon></p>\n\n          <ion-card (click)="presentFlatModal(f)">\n\n            <img src="assets/{{f.imgs[0]}}.jpg"/>\n\n            <div class="card-title">{{f.location}}</div>\n\n            <div class="card-subtitle">with {{f.people[0]}} and {{f.people[1]}}</div>\n\n          </ion-card>\n\n        </ion-slide>\n\n\n\n      </ion-slides>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Daniel Burgmann\wg\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map