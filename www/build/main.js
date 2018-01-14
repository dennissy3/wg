webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(11);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]) === "function" && _a || Object)
    ], FlatModal.prototype, "slides", void 0);
    FlatModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flat',template:/*ion-inline-start:"/Development/wg/blank/src/pages/modal/flatModal/flat.html"*/'<ion-header swipeAll (swipedown)="dismiss($event)">\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="flat card-background-page">\n  <p class="title">Neuköllnies</p>\n\n  <div class="flatmates">\n    <div class="flatmate">\n      <div class="head" id="maja"></div>\n      <p>Maja</p>\n    </div>\n    <div class="flatmate">\n      <div class="head" id="karlo"></div>\n      <p>Karlo</p>\n    </div>\n  </div>\n\n  {{flat}}\n  <ion-slides class="flat-slider" slidesPerView="1.5" *ngFor="let f of flat">\n    <ion-slide *ngFor="let i of f.imgs | keys">\n      <ion-card style="background-image: url(\'../../../assets/{{i}}.jpg\');">\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <div id="map"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Development/wg/blank/src/pages/modal/flatModal/flat.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["i" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["f" /* NavParams */]) === "function" && _d || Object])
    ], FlatModal);
    return FlatModal;
    var _a, _b, _c, _d;
}());

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        // check if "routes" exists
        if (value) {
            // create instance vars to store keys and final output
            var keyArr = Object.keys(value), dataArr_1 = [];
            // loop through the object,
            // pushing values to the return array
            keyArr.forEach(function (key) {
                dataArr_1.push(value[key]);
            });
            // return the resulting array
            return dataArr_1;
        }
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'keys', pure: false })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=flat.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(11);
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
            selector: 'page-people',template:/*ion-inline-start:"/Development/wg/blank/src/pages/modal/peopleModal/people.html"*/'<ion-header swipeAll (swipedown)="dismiss($event)">\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Development/wg/blank/src/pages/modal/peopleModal/people.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["i" /* ViewController */]])
    ], PeopleModal);
    return PeopleModal;
}());

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnairePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_index__ = __webpack_require__(11);
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
            selector: 'page-questionnaire',template:/*ion-inline-start:"/Development/wg/blank/src/pages/questionnaire/questionnaire.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content no-bounce>\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let q of metaQuestions; let i = index">\n      <p class="question">{{q.question}}</p>\n\n      <ion-item *ngIf="q.answerLabels.length <= 1">\n        <ion-input type={{q.answerType}} [(ngModel)]="a[0].meta[i]" placeholder={{q.answerLabels[0]}}></ion-input>\n        <button clear item-right (click)="move(0, \'Klosterstraße 62\')"><ion-icon name="arrow-forward"></ion-icon></button>\n      </ion-item>\n\n      <div *ngIf="q.answerLabels.length == 2">\n        <ion-card class="answer" (click)="answer(i, q.answerLabels[0])">\n          <ion-card-content>\n            {{q.answerLabels[0]}}\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class="answer" (click)="answer(i, q.answerLabels[1])">\n          <ion-card-content>\n            {{q.answerLabels[1]}}\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Development/wg/blank/src/pages/questionnaire/questionnaire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], QuestionnairePage);
    return QuestionnairePage;
}());

//# sourceMappingURL=questionnaire.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modal_flatModal_flat__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_start_start__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_questionnaire_questionnaire__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_swipe_all_dist_index__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal_peopleModal_people__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_peopleModal_people__["a" /* PeopleModal */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modal_flatModal_flat__["b" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ionic_swipe_all_dist_index__["a" /* IonicSwipeAllModule */],
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
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_peopleModal_people__["a" /* PeopleModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modal_flatModal_flat__["b" /* KeysPipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Development/wg/blank/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Development/wg/blank/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionnaire_questionnaire__ = __webpack_require__(197);
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
            selector: 'page-start',template:/*ion-inline-start:"/Development/wg/blank/src/pages/start/start.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content (click)="goToQuestionnaire()">\n  <p class="title">r__m</p>\n\n  <p class="continue-info">Tap to continue</p>\n</ion-content>\n'/*ion-inline-end:"/Development/wg/blank/src/pages/start/start.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_flatModal_flat__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_peopleModal_people__ = __webpack_require__(196);
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
            selector: 'page-home',template:/*ion-inline-start:"/Development/wg/blank/src/pages/home/home.html"*/'<ion-content class="card-background-page" no-bounce>\n  <ion-slides direction="vertical" initialSlide="1">\n    <ion-slide class="top">\n      <p class="name title">Hey Karlo</p>\n      <ion-card class="wg-ad">\n        <div class="card-title">"Neuköllnies"</div>\n      </ion-card>\n\n      <ion-card>\n        <ion-list>\n          <ion-item>\n            <button *ngIf="!adOnline" ion-button clear>Add your fantastic room</button>\n            <button *ngIf="adOnline" ion-button clear>Edit your fancy room</button>\n          </ion-item>\n          <ion-item>\n            <button *ngIf="adOnline" ion-button clear>Add your kick-ass flatmates</button>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <p class="subtitle">Messages</p>\n      <ion-slides slidesPerView="3" class="message-slider">\n        <ion-slide *ngFor="let a of applicants" (click)="presentPeopleModal()">\n          <ion-card class="message">\n            <div class="fit-circle">{{a.name}}</div>\n            <span class="age">\n              <span id="age">{{a.age}}</span>\n              <span>years<br>old</span>\n            </span>\n            <span class="occupation">{{a.job}}</span>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n\n      <p class="title bottom-arrow" (click)="move(1)"><ion-icon name="arrow-up"></ion-icon></p>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-slides swipeAll (swipedown)="swipe($event)" class="flat-slider">\n\n        <ion-slide *ngFor="let f of flats" swipeAll (swipeup)="presentFlatModal(f)" >\n          <p class="title" (click)="move(0)"><ion-icon name="arrow-down"></ion-icon></p>\n          <ion-card (click)="presentFlatModal(f)">\n            <img src="assets/{{f.imgs[0]}}.jpg"/>\n            <div class="card-title">{{f.location}}</div>\n            <div class="card-subtitle">with {{f.people[0]}} and {{f.people[1]}}</div>\n          </ion-card>\n        </ion-slide>\n\n      </ion-slides>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Development/wg/blank/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["d" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map