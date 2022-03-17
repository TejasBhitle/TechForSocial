(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<div class=\"content\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<footer></footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(title) {
        this.title = title;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title.setTitle('TechForSocial - Technology for Social Good');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _publication_publication_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./publication/publication.component */ "./src/app/publication/publication.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _releases_releases_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./releases/releases.component */ "./src/app/releases/releases.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _join_us_join_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./join-us/join-us.component */ "./src/app/join-us/join-us.component.ts");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./firebase-db.service */ "./src/app/firebase-db.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _short_text_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./short-text.pipe */ "./src/app/short-text.pipe.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");

/*Modules*/










/*Components*/











/*Services*/






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_14__["CarouselComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_16__["PeopleComponent"],
                _publication_publication_component__WEBPACK_IMPORTED_MODULE_17__["PublicationComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__["FaqComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
                _releases_releases_component__WEBPACK_IMPORTED_MODULE_20__["ReleasesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _join_us_join_us_component__WEBPACK_IMPORTED_MODULE_23__["JoinUsComponent"],
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_21__["ProjectDetailsComponent"],
                _short_text_pipe__WEBPACK_IMPORTED_MODULE_26__["ShortTextPipe"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
                    { path: 'projects', component: _project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"] },
                    { path: 'project/:slug', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_21__["ProjectDetailsComponent"] },
                    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_16__["PeopleComponent"] },
                    { path: 'publications', component: _publication_publication_component__WEBPACK_IMPORTED_MODULE_17__["PublicationComponent"] },
                    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_18__["FaqComponent"] },
                    { path: 'releases', component: _releases_releases_component__WEBPACK_IMPORTED_MODULE_20__["ReleasesComponent"] },
                    { path: 'not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__["PageNotFoundComponent"] },
                    { path: '**', redirectTo: 'not-found' }
                ])
            ],
            providers: [
                _firebase_db_service__WEBPACK_IMPORTED_MODULE_24__["FirebaseDbService"],
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["FirestoreSettingsToken"], useValue: {} }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nimg{\r\n    width: 100%;\r\n    height: 400px;\r\n}\r\n.carousel-caption{\r\n    background-color: black;\r\n    opacity: 0.7;\r\n    color: white;\r\n    font-size: 30px;\r\n    line-height: 35px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class='container-fluid carousel-wrapper'>\r\n  <div class='col-12'>\r\n    <ngb-carousel *ngIf=\"news.length > 0\">\r\n      <ng-template ngbSlide *ngFor=\"let newsItem of news\">\r\n        <img src=\"{{newsItem.img}}\" alt=\"{{newsItem.text}}\">\r\n        <div class=\"carousel-caption\">\r\n          <p>{{newsItem.text}}</p>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-carousel>\r\n  </div>\r\n</div> -->\r\n<!-- \r\n<owl-carousel\r\n     [options]=\"{items: 3, dots: false, navigation: false}\"\r\n     [items]=\"images\"\r\n     [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n     <div class=\"item\" *ngFor=\"let image of carousel_images_rel_paths;let i = index\">\r\n         <div class=\"thumbnail-image\" ></div>\r\n     </div>\r\n </owl-carousel> -->\r\n\r\n<!-- <div class=\"carousel carousel-slider\">\r\n  <a *ngFor=\"let newsItem of news\" class=\"carousel-item\" href=\"#one!\">\r\n    <img src=\"{{newsItem.img}}\">\r\n  </a>\r\n</div>\r\n<div class=\"carousel carousel-slider\">\r\n  <a class=\"carousel-item\" href=\"#one!\"><img src=\"https://lorempixel.com/800/400/food/1\"></a>\r\n  <a class=\"carousel-item\" href=\"#two!\"><img src=\"https://lorempixel.com/800/400/food/2\"></a>\r\n  <a class=\"carousel-item\" href=\"#three!\"><img src=\"https://lorempixel.com/800/400/food/3\"></a>\r\n  <a class=\"carousel-item\" href=\"#four!\"><img src=\"https://lorempixel.com/800/400/food/4\"></a>\r\n</div> -->"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(firebaseDb) {
        this.firebaseDb = firebaseDb;
        this.news = [];
        this.carousel_images_rel_paths = [
            'assets/img/carousel1.jpg',
            'assets/img/carousel2.jpg',
            'assets/img/carousel3.jpeg',
            'assets/img/carousel4.jpg',
        ];
        this.i = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.firebaseDb.getNews().subscribe(function (value) {
            _this.news = value.map(function (x) {
                var obj = Object.assign({}, x);
                obj["img"] = _this.carousel_images_rel_paths[_this.i % _this.carousel_images_rel_paths.length];
                _this.i++;
                return obj;
            });
            _this.subscription.unsubscribe();
        });
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDbService"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-wrapper-custom{\r\n    text-align: center;\r\n}\r\n.spinner-custom{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci13cmFwcGVyLWN1c3RvbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3Bpbm5lci1jdXN0b217XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s12 m12 heading-custom  blue-text\">Frequently Asked Questions</div>\r\n\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-wrapper-custom\">\r\n  <div class=\"s12 m12 spinner-custom preloader-wrapper small active\">\r\n      <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n          <div class=\"circle\"></div>\r\n          </div>\r\n          <div class=\"gap-patch\">\r\n          <div class=\"circle\"></div>\r\n          </div>\r\n          <div class=\"circle-clipper right\">\r\n          <div class=\"circle\"></div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div *ngFor=\"let faq of faqs\" class=\"card intro-card col s12 m8 offset-m2\">\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title\">{{faq.question}}</span>\r\n      <span class=\"intro-card-text\">\r\n        {{faq.answer}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div> "

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var FaqComponent = /** @class */ (function () {
    function FaqComponent(firebaseDb, title) {
        this.firebaseDb = firebaseDb;
        this.title = title;
        this.faqs = [];
        this.showSpinner = false;
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("TechForSocial - faq");
        var localfaqs = sessionStorage.getItem('faqs');
        if (!localfaqs) {
            this.showSpinner = true;
            this.subscription = this.firebaseDb.getFAQs().subscribe(function (value) {
                _this.faqs = value.map(function (x) {
                    var obj = Object.assign({}, x);
                    obj["isHidden"] = true;
                    return obj;
                });
                _this.showSpinner = false;
                _this.subscription.unsubscribe();
                sessionStorage.setItem('faqs', JSON.stringify(_this.faqs));
            });
        }
        else {
            this.faqs = JSON.parse(localfaqs);
        }
    };
    FaqComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDbService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/firebase-db.service.ts":
/*!****************************************!*\
  !*** ./src/app/firebase-db.service.ts ***!
  \****************************************/
/*! exports provided: FirebaseDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseDbService", function() { return FirebaseDbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FirebaseDbService = /** @class */ (function () {
    function FirebaseDbService(afs) {
        this.afs = afs;
    }
    FirebaseDbService.prototype.getNews = function () {
        return this.afs.collection('news').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (a) {
                var data = a.payload.doc.data();
                var key = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: key }, data);
            }).sort(function (a1, a2) { return (a1["index"] < a2["index"]) ? -1 : 1; });
        }));
    };
    FirebaseDbService.prototype.createOrUpdateNews = function (news, isUpdate) {
        if (!isUpdate)
            return this.afs.collection('news').add(news);
        else {
            var key = news.key;
            delete news[key];
            return this.afs.collection('news').doc(key).set(news);
        }
    };
    FirebaseDbService.prototype.deleteNews = function (news) {
        return this.afs.collection('news').doc(news.key).delete();
    };
    FirebaseDbService.prototype.getFAQs = function () {
        return this.afs.collection('faqs').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (a) {
                var data = a.payload.doc.data();
                var key = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: key }, data);
            }).sort(function (a1, a2) { return (a1["index"] < a2["index"]) ? -1 : 1; });
        }));
    };
    FirebaseDbService.prototype.createOrUpdateFAQs = function (faq, isUpdate) {
        if (!isUpdate)
            return this.afs.collection('faqs').add(faq);
        else {
            var key = faq.key;
            delete faq[key];
            return this.afs.collection('faqs').doc(key).set(faq);
        }
    };
    FirebaseDbService.prototype.deleteFAQs = function (faq) {
        return this.afs.collection('faqs').doc(faq.key).delete();
    };
    FirebaseDbService.prototype.getProjects = function () {
        return this.afs.collection('projects').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (a) {
                var data = a.payload.doc.data();
                var key = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: key }, data);
            }).sort(function (a1, a2) { return (a1["index"] < a2["index"]) ? -1 : 1; });
        }));
    };
    FirebaseDbService.prototype.getProject = function (slug) {
        return this.afs.collection('projects').doc(slug).get();
    };
    FirebaseDbService.prototype.createOrUpdateProject = function (project, isUpdate) {
        if (!isUpdate)
            return this.afs.collection('projects').add(project);
        else {
            var key = project.key;
            delete project[key];
            return this.afs.collection('projects').doc(key).set(project);
        }
    };
    FirebaseDbService.prototype.deleteProject = function (project) {
        return this.afs.collection('projects').doc(project.key).delete();
    };
    FirebaseDbService.prototype.getPublications = function () {
        return this.afs.collection('publications').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            return items.map(function (a) {
                var data = a.payload.doc.data();
                var key = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: key }, data);
            });
        }));
    };
    FirebaseDbService.prototype.getFounderIntro = function () {
        console.log("getFounderIntro() called");
        return this.afs.collection('people').doc('founder').get();
        // .snapshotChanges()
        // .pipe(map(items => {
        //   return items.map(a => {
        //     const data = a.payload.doc.data();
        //     console.log(data);
        //     return data;
        //   });
        // }));
    };
    FirebaseDbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirebaseDbService);
    return FirebaseDbService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-wrapper{\r\n    background-color: #5E5E5E;\r\n    padding-bottom: 10px;\r\n}\r\n.contact-form{\r\n    color: #369DC8;\r\n    padding-left: 80px;\r\n}\r\n.small-bottom-mrg{\r\n    margin-bottom: 10px;\r\n}\r\n.btn-blue{\r\n    color: white;\r\n    background-color: #369DC8;\r\n    border: solid 3px #369DC8;\r\n}\r\n.btn-blue:focus,\r\n.btn-blue:hover{\r\n    border: solid 3px #369DC8;\r\n    background-color: white;\r\n    color: #369DC8;\r\n}\r\n.map{\r\n    border: solid 2px white;\r\n}\r\n.address{\r\n    color: white;\r\n    margin: 0 5% 0 5%;\r\n}\r\n.address p span{\r\n    color: #369DC8;\r\n}\r\n.footer-bottom{\r\n    background-color: #369DC8;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n.footer-bottom{\r\n    margin-bottom: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVFNUU1RTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jb250YWN0LWZvcm17XHJcbiAgICBjb2xvcjogIzM2OURDODtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufVxyXG4uc21hbGwtYm90dG9tLW1yZ3tcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmJ0bi1ibHVle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2OURDODtcclxuICAgIGJvcmRlcjogc29saWQgM3B4ICMzNjlEQzg7XHJcbn1cclxuLmJ0bi1ibHVlOmZvY3VzLFxyXG4uYnRuLWJsdWU6aG92ZXJ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjMzY5REM4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzM2OURDODtcclxufVxyXG4ubWFwe1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbn1cclxuLmFkZHJlc3N7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgNSUgMCA1JTtcclxufVxyXG4uYWRkcmVzcyBwIHNwYW57XHJcbiAgICBjb2xvcjogIzM2OURDODtcclxufVxyXG4uZm9vdGVyLWJvdHRvbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjlEQzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1ib3R0b217XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"showFooter$\" \r\n  class=\"footer-wrapper container-fluid small-top-mrg\">\r\n  <h2 class=\"pdg-sm-top text-center\">Contact Us</h2>\r\n  <div class=\"address pdg-sm-top\">\r\n    <p></p>\r\n    <p></p>\r\n  </div>\r\n</div>\r\n<div class=\"footer-bottom\">\r\n    <p>Copyright © 2019 - All Rights Reserved</p>\r\n</div> -->\r\n<div class=\"grey darken-2 page-footer footer-custom footer-bottom\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col l12 s12\">\r\n          <p class=\"grey-text text-lighten-4\">\r\n              <span>Address : </span>608, Sardar Patel Institute of Technology, Bhavan's Campus, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058\r\n          </p>\r\n          <p class=\"grey-text text-lighten-4\">\r\n              <span>Phone Number : </span>+91 (22)-26707440\r\n          </p>\r\n          <p class=\"grey-text text-lighten-4\">\r\n            <span><a class=\"yellow-text\" target=\"_blank\" href=\"https://techforsocial.typeform.com/to/LRQlD7\">Feedback</a></span>\r\n        </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-copyright\">\r\n      <div class=\"container\">\r\n          Copyright © 2019 - All Rights Reserved\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSubscription = this.router.events.subscribe(function (data) {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])
                _this.showFooter$ = !(data.url.startsWith('/admin'));
        });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.routerSubscription.unsubscribe();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-custom{\r\n    padding: 0 auto;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n.card-action-custom{\r\n    text-align: center;\r\n}\r\n.spinner-wrapper-custom{\r\n    text-align: center;\r\n}\r\n.spinner-custom{\r\n    display: inline-block;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWN1c3RvbXtcclxuICAgIHBhZGRpbmc6IDAgYXV0bztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY2FyZC1hY3Rpb24tY3VzdG9te1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zcGlubmVyLXdyYXBwZXItY3VzdG9te1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zcGlubmVyLWN1c3RvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <carousel></carousel> -->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s12 m8 offset-m2 mdl-shadow--4dp\">\r\n      <div class=\"card card-custom blue-grey darken-1\">\r\n        <div class=\"card-content white-text\">\r\n          <p>TechForSocial is a platform founded by Dr. Dhananjay Kalbande which aims to find innovative ways to make use of technology for social causes. As a part of this initiative, we have conducted many academic research projects and industry consultation projects. Papers have been published and patents filed for these projects. One of the important points of focus for us is the application of innovative technological solutions in the field of healthcare, and many of our projects are based on this outcome.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col s12 m12 heading-custom blue-text\">Current Projects</div>\r\n\r\n    <div *ngIf=\"showSpinner\" class=\"spinner-wrapper-custom\">\r\n        <div class=\"s12 m12 spinner-custom preloader-wrapper small active\">\r\n            <div class=\"spinner-layer spinner-blue-only\">\r\n                <div class=\"circle-clipper left\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let project of openProjects$; let i = index\" class=\"col s12 m6\">\r\n        <div class=\"card card-custom\">\r\n            <div class=\"card-content\" style=\"text-align:center;\">\r\n                <span class=\"card-title activator grey-text text-darken-4\">\r\n                    {{project.name}}\r\n                </span>\r\n                {{project.description}}\r\n            </div>\r\n            <div class=\"card-action card-action-custom\">\r\n                <a routerLink=\"/project/{{project.slug}}\">Read More</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"i%2==1\" class=\"col s12 m12\"  style=\"height: 1px;\"></div>\r\n    </div>\r\n        \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebaseDb, title) {
        this.firebaseDb = firebaseDb;
        this.title = title;
        this.openProjects$ = [];
        this.showSpinner = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("TechForSocial - Technology For Social Good");
        var localOpenProjects = sessionStorage.getItem('openProjects');
        if (!localOpenProjects) {
            this.showSpinner = true;
            this.subscription = this.firebaseDb.getProjects().subscribe(function (projects) {
                _this.openProjects$ = [];
                projects.forEach(function (project) {
                    if (project['isOpen'])
                        _this.openProjects$.push(project);
                });
                _this.showSpinner = false;
                _this.subscription.unsubscribe();
                sessionStorage.setItem('openProjects', JSON.stringify(_this.openProjects$));
            });
        }
        else {
            this.openProjects$ = JSON.parse(localOpenProjects);
        }
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDbService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/join-us/join-us.component.css":
/*!***********************************************!*\
  !*** ./src/app/join-us/join-us.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".joinus-wrapper{\r\n    width: 20%;\r\n    height: 700px;\r\n    font-size: 20px;\r\n}\r\n.joinus-heading{\r\n    color: #5E5E5E;\r\n    font-size: 40px;\r\n    padding-left: 10%;\r\n}\r\n.joinus-heading strong{\r\n    display: block;\r\n    color: black;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    letter-spacing: 3px;\r\n}\r\n.joinus-btn{\r\n    padding-left: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi11cy9qb2luLXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9qb2luLXVzL2pvaW4tdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2ludXMtd3JhcHBlcntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5qb2ludXMtaGVhZGluZ3tcclxuICAgIGNvbG9yOiAjNUU1RTVFO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbn1cclxuLmpvaW51cy1oZWFkaW5nIHN0cm9uZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcbi5qb2ludXMtYnRue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/join-us/join-us.component.html":
/*!************************************************!*\
  !*** ./src/app/join-us/join-us.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"joinus-heading\">Join Us</h3>\r\n<ul class=\"pdg-xs-top\">\r\n  <li> Project 1 : <a href=\"\">Aute fugiat exercitation nisi magna ex enim </a></li>\r\n  <li> Project 2 : <a href=\"\">Aute fugiat exercitation nisi magna ex enim </a></li>\r\n  <li> Project 3 : <a href=\"\">Aute fugiat exercitation nisi magna ex enim </a></li>\r\n  <li> Project 4 : <a href=\"\">Aute fugiat exercitation nisi magna ex enim </a></li>\r\n</ul>\r\n\r\n<div class=\"joinus-btn\">\r\n\t<h5>Have an idea ?</h5> \r\n<a href=\"\" role=\"button\" class=\"btn btn-lg btn-blue \">Contact Us</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/join-us/join-us.component.ts":
/*!**********************************************!*\
  !*** ./src/app/join-us/join-us.component.ts ***!
  \**********************************************/
/*! exports provided: JoinUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinUsComponent", function() { return JoinUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JoinUsComponent = /** @class */ (function () {
    function JoinUsComponent() {
    }
    JoinUsComponent.prototype.ngOnInit = function () {
    };
    JoinUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'join-us',
            template: __webpack_require__(/*! ./join-us.component.html */ "./src/app/join-us/join-us.component.html"),
            styles: [__webpack_require__(/*! ./join-us.component.css */ "./src/app/join-us/join-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JoinUsComponent);
    return JoinUsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  height: 64px;\r\n}\r\n\r\n.material-icons {\r\n  height: 64px;\r\n  line-height: 64px;\r\n}\r\n\r\n.sidenav > li > a {\r\n  color: #fff;\r\n}\r\n\r\n.brand-logo {\r\n  padding-left: 299px;\r\n}\r\n\r\n@media only screen and (max-width : 992px) {\r\n\r\n  .brand-logo {\r\n    padding-left: 0px;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogNjRweDtcclxuICBsaW5lLWhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnNpZGVuYXYgPiBsaSA+IGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLmJyYW5kLWxvZ28ge1xyXG4gIHBhZGRpbmctbGVmdDogMjk5cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDk5MnB4KSB7XHJcblxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\r\n<nav class=\"blue z-depth-2\">\r\n  <div class=\"nav-wrapper\">\r\n    <a routerLink=\"/\" class=\"brand-logo center\"><img class=\"logo\" src=\"../assets/img/logo.png\" style=\"height: 64px; width: 64px;\"></a>\r\n    <a data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\r\n  </div>\r\n</nav>\r\n</div>\r\n\r\n<ul class=\"sidenav sidenav-fixed blue\" id=\"mobile-demo\">\r\n  <li><a class=\"sidenav-close\" routerLink=\"/\" style=\"font-size: 1.5em; margin-top: 8px;\">TechForSocial</a></li>\r\n  <li><a class=\"sidenav-close\" routerLink=\"/projects\">Projects</a></li>\r\n  <li><a class=\"sidenav-close\" routerLink=\"/people\">People</a></li>\r\n  <li><a class=\"sidenav-close\" routerLink=\"/publications\">Publications</a></li>\r\n  <li><a class=\"sidenav-close\" routerLink=\"/faq\">FAQs</a></li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener('DOMContentLoaded', function () {
            var elems1 = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems1, {});
        });
        this.routerSubscription = this.router.events.subscribe(function (data) {
            if (data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])
                _this.showNavbar$ = !(data.url.startsWith('/admin'));
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.routerSubscription.unsubscribe();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-body{\r\n    margin-top: 40px;\r\n}\r\n.news-text p{\r\n    color: #5e5E5E;\r\n    text-align: justify;\r\n}\r\n.news-container{\r\n    /* opacity: 0.3; */\r\n    background-color: #E6E6E6;\r\n    padding: 0px !important;\r\n    margin: 20px;\r\n}\r\n.news-text{\r\n    padding: 15px;\r\n}\r\n.news-text a{\r\n    color: #5e5E5E; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5uZXdzLXRleHQgcHtcclxuICAgIGNvbG9yOiAjNWU1RTVFO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ubmV3cy1jb250YWluZXJ7XHJcbiAgICAvKiBvcGFjaXR5OiAwLjM7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLm5ld3MtdGV4dHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLm5ld3MtdGV4dCBhe1xyXG4gICAgY29sb3I6ICM1ZTVFNUU7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 class=\"heading news-heading\">News</h1>\r\n<p class=\"news-text\">\r\n    <span *ngFor=\"let newsItem of news \" class=\"news-line\">\r\n        {{newsItem.text}}\r\n    </span>\r\n</p> -->\r\n\r\n<div class=\"news-wrapper\">\r\n    <h1 class=\"heading\">News</h1>\r\n    <div class=\"content-title-underline-black\"></div>\r\n    <div class=\"container-fluid\">\r\n    <div class=\"row news-body\">\r\n        <div class=\"col-md-1\"></div>\r\n        <div class=\"col-md-3 news-container\">\r\n            <div class=\"news-picture\">\r\n                <img src=\"../../assets/img/news1.jpg\" width=\"100%\" class=\"img-responsive\" alt=\"\">\r\n            </div>\r\n            <div class=\"news-text\">\r\n                <h5 class=\"pdg-xs-top\">Mollit ex amet ea minim labore.</h5>\r\n                <p>Occaecat esse ea reprehenderit nulla nostrud elit et et minim qui sit tempor non. Reprehenderit fugiat et.</p>\r\n                <a href=\"\">Read More...</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 news-container\">\r\n            <div class=\"news-picture\">\r\n                <img src=\"../../assets/img/news1.jpg\" width=\"100%\" class=\"img-responsive\" alt=\"\">\r\n            </div>\r\n            <div class=\"news-text\">\r\n                <h5 class=\"pdg-xs-top\">Mollit ex amet ea minim labore.</h5>\r\n                <p>Occaecat esse ea reprehenderit nulla nostrud elit et et minim qui sit tempor non. Reprehenderit qui occaecat.</p>\r\n                <a href=\"\">Read More...</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 news-container\">\r\n            <div class=\"news-picture\">\r\n                <img src=\"../../assets/img/news1.jpg\" width=\"100%\" class=\"img-responsive\" alt=\"\">\r\n            </div>\r\n            <div class=\"news-text\">\r\n                <h5 class=\"pdg-xs-top\">Mollit ex amet ea minim labore.</h5>\r\n                <p>Occaecat esse ea reprehenderit nulla nostrud elit et et minim qui sit tempor non. Reprehenderit fugiat occaecat.</p>\r\n                <a href=\"\">Read More...</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-1\"></div>\r\n    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(firebaseDb) {
        this.firebaseDb = firebaseDb;
        this.news = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.firebaseDb.getNews().subscribe(function (value) {
            _this.news = value;
            _this.subscription.unsubscribe();
        });
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDbService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:300,700);\r\n\r\nbody {\r\n  width:100%;\r\n  height:100%;\r\n  background:#48A9E6;\r\n  font-family: 'Raleway', sans-serif;\r\n  font-weight:300;\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\n#title {\r\n  text-align:center;\r\n  font-size:40px;\r\n  margin-top:40px;\r\n  margin-bottom:-40px;\r\n  position:relative;\r\n  color:#fff;\r\n}\r\n\r\n.circles:after {\r\n  content:'';\r\n  display:inline-block;\r\n  width:100%;\r\n  height:100px;\r\n  background:#fff;\r\n  position:absolute;\r\n  top:-50px;\r\n  left:0;\r\n  transform:skewY(-4deg);\r\n  -webkit-transform:skewY(-4deg);\r\n}\r\n\r\n.circles { \r\n\tbackground:#fff;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n  margin-top:-60px;\r\n  box-shadow:inset -1px -4px 4px rgba(0,0,0,0.2);\r\n}\r\n\r\n.circles p {\r\n\tfont-size: 240px;\r\n\tcolor: #fff;\r\n\tpadding-top: 60px;\r\n\tposition: relative;\r\n  z-index: 9;\r\n  line-height: 100%;\r\n}\r\n\r\n.circles p small { \r\n  font-size: 40px; \r\n  line-height: 100%; \r\n  vertical-align: top;   \r\n}\r\n\r\n.circles .circle.small {\r\n\twidth: 140px;\r\n\theight: 140px;\r\n\tborder-radius: 50%;\r\n\tbackground: #48A9E6;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: 80px;\r\n\tleft: 50%;\r\n\tanimation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);\t\r\n\t-webkit-animation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);\r\n\tanimation-delay: 1.2s;\r\n\t-webkit-animation-delay: 1.2s;\r\n}\r\n\r\n.circles .circle.med {\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tborder-radius: 50%;\r\n\tbackground: #48A9E6;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: 0;\r\n\tleft: 10%;\r\n\tanimation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);\t\r\n\t-webkit-animation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);\r\n\tanimation-delay: 0.4s;\r\n\t-webkit-animation-delay: 0.4s;\r\n}\r\n\r\n.circles .circle.big {\r\n\twidth: 400px;\r\n\theight: 400px;\r\n\tborder-radius: 50%;\r\n\tbackground: #48A9E6;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\ttop: 200px;\r\n\tright: 0;\r\n\tanimation: 8s bigmove infinite;\t\r\n\t-webkit-animation: 8s bigmove infinite;\r\n\tanimation-delay: 3s;\r\n\t-webkit-animation-delay: 1s;\r\n}\r\n\r\n@-webkit-keyframes smallmove {\r\n\t0% { top: 10px; left: 45%; opacity: 1; }\r\n\t25% { top: 300px; left: 40%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 10px; left: 45%; opacity: 1; }\r\n}\r\n\r\n@keyframes smallmove {\r\n\t0% { top: 10px; left: 45%; opacity: 1; }\r\n\t25% { top: 300px; left: 40%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 10px; left: 45%; opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes medmove {\r\n\t0% { top: 0px; left: 20%; opacity: 1; }\r\n\t25% { top: 300px; left: 80%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 0px; left: 20%; opacity: 1; }\r\n}\r\n\r\n@keyframes medmove {\r\n\t0% { top: 0px; left: 20%; opacity: 1; }\r\n\t25% { top: 300px; left: 80%; opacity:0.7; }\r\n\t50% { top: 240px; left: 55%; opacity:0.4; }\r\n\t75% { top: 100px; left: 40%;  opacity:0.6; }\r\n\t100% { top: 0px; left: 20%; opacity: 1; }\r\n}\r\n\r\n@-webkit-keyframes bigmove {\r\n\t0% { top: 0px; right: 4%; opacity: 0.5; }\r\n\t25% { top: 100px; right: 40%; opacity:0.4; }\r\n\t50% { top: 240px; right: 45%; opacity:0.8; }\r\n\t75% { top: 100px; right: 35%;  opacity:0.6; }\r\n\t100% { top: 0px; right: 4%; opacity: 0.5; }\r\n}\r\n\r\n@keyframes bigmove {\r\n\t0% { top: 0px; right: 4%; opacity: 0.5; }\r\n\t25% { top: 100px; right: 40%; opacity:0.4; }\r\n\t50% { top: 240px; right: 45%; opacity:0.8; }\r\n\t75% { top: 100px; right: 35%;  opacity:0.6; }\r\n\t100% { top: 0px; right: 4%; opacity: 0.5; }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7O0FBRXBFO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsTUFBTTtFQUNOLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGtCQUFrQjtFQUNqQixnQkFBZ0I7RUFDaEIsOENBQThDO0FBQ2hEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsa0JBQWtCO0VBQ2pCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFNBQVM7Q0FDVCxTQUFTO0NBQ1QsNERBQTREO0NBQzVELG9FQUFvRTtDQUNwRSxxQkFBcUI7Q0FDckIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsTUFBTTtDQUNOLFNBQVM7Q0FDVCw0REFBNEQ7Q0FDNUQsb0VBQW9FO0NBQ3BFLHFCQUFxQjtDQUNyQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixVQUFVO0NBQ1YsUUFBUTtDQUNSLDhCQUE4QjtDQUM5QixzQ0FBc0M7Q0FDdEMsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLEtBQUssU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7Q0FDdkMsTUFBTSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRTtDQUMxQyxNQUFNLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFO0NBQzFDLE1BQU0sVUFBVSxFQUFFLFNBQVMsR0FBRyxXQUFXLEVBQUU7Q0FDM0MsT0FBTyxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUMxQzs7QUFDQTtDQUNDLEtBQUssU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7Q0FDdkMsTUFBTSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRTtDQUMxQyxNQUFNLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFO0NBQzFDLE1BQU0sVUFBVSxFQUFFLFNBQVMsR0FBRyxXQUFXLEVBQUU7Q0FDM0MsT0FBTyxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUMxQzs7QUFFQTtDQUNDLEtBQUssUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7Q0FDdEMsTUFBTSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRTtDQUMxQyxNQUFNLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFO0NBQzFDLE1BQU0sVUFBVSxFQUFFLFNBQVMsR0FBRyxXQUFXLEVBQUU7Q0FDM0MsT0FBTyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN6Qzs7QUFFQTtDQUNDLEtBQUssUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7Q0FDdEMsTUFBTSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRTtDQUMxQyxNQUFNLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFO0NBQzFDLE1BQU0sVUFBVSxFQUFFLFNBQVMsR0FBRyxXQUFXLEVBQUU7Q0FDM0MsT0FBTyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN6Qzs7QUFFQTtDQUNDLEtBQUssUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUU7Q0FDeEMsTUFBTSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtDQUMzQyxNQUFNLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0NBQzNDLE1BQU0sVUFBVSxFQUFFLFVBQVUsR0FBRyxXQUFXLEVBQUU7Q0FDNUMsT0FBTyxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRTtBQUMzQzs7QUFDQTtDQUNDLEtBQUssUUFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUU7Q0FDeEMsTUFBTSxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtDQUMzQyxNQUFNLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0NBQzNDLE1BQU0sVUFBVSxFQUFFLFVBQVUsR0FBRyxXQUFXLEVBQUU7Q0FDNUMsT0FBTyxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRTtBQUMzQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTozMDAsNzAwKTtcclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDojNDhBOUU2O1xyXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXNpemU6NDBweDtcclxuICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTotNDBweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcblxyXG4uY2lyY2xlczphZnRlciB7XHJcbiAgY29udGVudDonJztcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDBweDtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi01MHB4O1xyXG4gIGxlZnQ6MDtcclxuICB0cmFuc2Zvcm06c2tld1koLTRkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOnNrZXdZKC00ZGVnKTtcclxufVxyXG5cclxuLmNpcmNsZXMgeyBcclxuXHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOi02MHB4O1xyXG4gIGJveC1zaGFkb3c6aW5zZXQgLTFweCAtNHB4IDRweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5jaXJjbGVzIHAge1xyXG5cdGZvbnQtc2l6ZTogMjQwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0cGFkZGluZy10b3A6IDYwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jaXJjbGVzIHAgc21hbGwgeyBcclxuICBmb250LXNpemU6IDQwcHg7IFxyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlOyBcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAgIFxyXG59XHJcblxyXG4uY2lyY2xlcyAuY2lyY2xlLnNtYWxsIHtcclxuXHR3aWR0aDogMTQwcHg7XHJcblx0aGVpZ2h0OiAxNDBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogIzQ4QTlFNjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTtcclxuXHR0b3A6IDgwcHg7XHJcblx0bGVmdDogNTAlO1xyXG5cdGFuaW1hdGlvbjogN3Mgc21hbGxtb3ZlIGluZmluaXRlIGN1YmljLWJlemllcigxLC4yMiwuNzEsLjk4KTtcdFxyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiA3cyBzbWFsbG1vdmUgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDEsLjIyLC43MSwuOTgpO1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4ycztcclxufVxyXG5cclxuLmNpcmNsZXMgLmNpcmNsZS5tZWQge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRoZWlnaHQ6IDIwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiAjNDhBOUU2O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAxMCU7XHJcblx0YW5pbWF0aW9uOiA3cyBtZWRtb3ZlIGluZmluaXRlIGN1YmljLWJlemllciguMzIsLjA0LC4xNSwuNzUpO1x0XHJcblx0LXdlYmtpdC1hbmltYXRpb246IDdzIG1lZG1vdmUgaW5maW5pdGUgY3ViaWMtYmV6aWVyKC4zMiwuMDQsLjE1LC43NSk7XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uY2lyY2xlcyAuY2lyY2xlLmJpZyB7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICM0OEE5RTY7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0dG9wOiAyMDBweDtcclxuXHRyaWdodDogMDtcclxuXHRhbmltYXRpb246IDhzIGJpZ21vdmUgaW5maW5pdGU7XHRcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogOHMgYmlnbW92ZSBpbmZpbml0ZTtcclxuXHRhbmltYXRpb24tZGVsYXk6IDNzO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNtYWxsbW92ZSB7XHJcblx0MCUgeyB0b3A6IDEwcHg7IGxlZnQ6IDQ1JTsgb3BhY2l0eTogMTsgfVxyXG5cdDI1JSB7IHRvcDogMzAwcHg7IGxlZnQ6IDQwJTsgb3BhY2l0eTowLjc7IH1cclxuXHQ1MCUgeyB0b3A6IDI0MHB4OyBsZWZ0OiA1NSU7IG9wYWNpdHk6MC40OyB9XHJcblx0NzUlIHsgdG9wOiAxMDBweDsgbGVmdDogNDAlOyAgb3BhY2l0eTowLjY7IH1cclxuXHQxMDAlIHsgdG9wOiAxMHB4OyBsZWZ0OiA0NSU7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNtYWxsbW92ZSB7XHJcblx0MCUgeyB0b3A6IDEwcHg7IGxlZnQ6IDQ1JTsgb3BhY2l0eTogMTsgfVxyXG5cdDI1JSB7IHRvcDogMzAwcHg7IGxlZnQ6IDQwJTsgb3BhY2l0eTowLjc7IH1cclxuXHQ1MCUgeyB0b3A6IDI0MHB4OyBsZWZ0OiA1NSU7IG9wYWNpdHk6MC40OyB9XHJcblx0NzUlIHsgdG9wOiAxMDBweDsgbGVmdDogNDAlOyAgb3BhY2l0eTowLjY7IH1cclxuXHQxMDAlIHsgdG9wOiAxMHB4OyBsZWZ0OiA0NSU7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1lZG1vdmUge1xyXG5cdDAlIHsgdG9wOiAwcHg7IGxlZnQ6IDIwJTsgb3BhY2l0eTogMTsgfVxyXG5cdDI1JSB7IHRvcDogMzAwcHg7IGxlZnQ6IDgwJTsgb3BhY2l0eTowLjc7IH1cclxuXHQ1MCUgeyB0b3A6IDI0MHB4OyBsZWZ0OiA1NSU7IG9wYWNpdHk6MC40OyB9XHJcblx0NzUlIHsgdG9wOiAxMDBweDsgbGVmdDogNDAlOyAgb3BhY2l0eTowLjY7IH1cclxuXHQxMDAlIHsgdG9wOiAwcHg7IGxlZnQ6IDIwJTsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1lZG1vdmUge1xyXG5cdDAlIHsgdG9wOiAwcHg7IGxlZnQ6IDIwJTsgb3BhY2l0eTogMTsgfVxyXG5cdDI1JSB7IHRvcDogMzAwcHg7IGxlZnQ6IDgwJTsgb3BhY2l0eTowLjc7IH1cclxuXHQ1MCUgeyB0b3A6IDI0MHB4OyBsZWZ0OiA1NSU7IG9wYWNpdHk6MC40OyB9XHJcblx0NzUlIHsgdG9wOiAxMDBweDsgbGVmdDogNDAlOyAgb3BhY2l0eTowLjY7IH1cclxuXHQxMDAlIHsgdG9wOiAwcHg7IGxlZnQ6IDIwJTsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmlnbW92ZSB7XHJcblx0MCUgeyB0b3A6IDBweDsgcmlnaHQ6IDQlOyBvcGFjaXR5OiAwLjU7IH1cclxuXHQyNSUgeyB0b3A6IDEwMHB4OyByaWdodDogNDAlOyBvcGFjaXR5OjAuNDsgfVxyXG5cdDUwJSB7IHRvcDogMjQwcHg7IHJpZ2h0OiA0NSU7IG9wYWNpdHk6MC44OyB9XHJcblx0NzUlIHsgdG9wOiAxMDBweDsgcmlnaHQ6IDM1JTsgIG9wYWNpdHk6MC42OyB9XHJcblx0MTAwJSB7IHRvcDogMHB4OyByaWdodDogNCU7IG9wYWNpdHk6IDAuNTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgYmlnbW92ZSB7XHJcblx0MCUgeyB0b3A6IDBweDsgcmlnaHQ6IDQlOyBvcGFjaXR5OiAwLjU7IH1cclxuXHQyNSUgeyB0b3A6IDEwMHB4OyByaWdodDogNDAlOyBvcGFjaXR5OjAuNDsgfVxyXG5cdDUwJSB7IHRvcDogMjQwcHg7IHJpZ2h0OiA0NSU7IG9wYWNpdHk6MC44OyB9XHJcblx0NzUlIHsgdG9wOiAxMDBweDsgcmlnaHQ6IDM1JTsgIG9wYWNpdHk6MC42OyB9XHJcblx0MTAwJSB7IHRvcDogMHB4OyByaWdodDogNCU7IG9wYWNpdHk6IDAuNTsgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n    \r\n    <div class=\"circles\">\r\n      <p>404<br>\r\n       <small>PAGE NOT FOUND</small>\r\n      </p>\r\n      <span class=\"circle big\"></span>\r\n      <span class=\"circle med\"></span>\r\n      <span class=\"circle small\"></span>\r\n    </div>\r\n  \r\n </body>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(title) {
        this.title = title;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.title.setTitle("TechForSocial - Page Not Found");
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_pic{\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n  border-radius:180px;\r\n  position: relative;\r\n  margin: 0 auto;\r\n  top:20px;\r\n  left:0;right:0;\r\n}\r\n.intro-card{\r\n  padding: 0 auto;\r\n  margin: 0 auto;\r\n  margin-bottom: 24px;\r\n  margin-top: 24px;\r\n  text-align: center;\r\n}\r\n.intro-card-text-drk {\r\n  text-align: justify;\r\n}\r\n.fa-icon-custom{\r\n  text-align: center;\r\n  vertical-align: bottom;\r\n}\r\n.links-card{\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n.link{\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsTUFBTSxDQUFDLE9BQU87QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVfcGlje1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdG9wOjIwcHg7XHJcbiAgbGVmdDowO3JpZ2h0OjA7XHJcbn1cclxuLmludHJvLWNhcmR7XHJcbiAgcGFkZGluZzogMCBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmludHJvLWNhcmQtdGV4dC1kcmsge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmZhLWljb24tY3VzdG9te1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcbi5saW5rcy1jYXJke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubGlua3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col s12 m12 heading-custom blue-text\">Founder</div>\r\n    <div class=\"col s12 m8 offset-m2\">\r\n        <div class=\"card intro-card\">\r\n        <img class=\"profile_pic mdl-shadow--4dp\"  src=\"../assets/img/drk-pic.jpg\"/>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\"><b>Dr. Dhananjay Kalbande</b></span>\r\n\r\n            <div *ngIf=\"showSpinner\" class=\"spinner-wrapper-custom\">\r\n                <div class=\"s12 m12 spinner-custom preloader-wrapper small active\">\r\n                    <div class=\"spinner-layer spinner-blue-only\">\r\n                        <div class=\"circle-clipper left\">\r\n                        <div class=\"circle\"></div>\r\n                        </div>\r\n                        <div class=\"gap-patch\">\r\n                        <div class=\"circle\"></div>\r\n                        </div>\r\n                        <div class=\"circle-clipper right\">\r\n                        <div class=\"circle\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <p class=\"intro-card-text-drk\">\r\n                {{introtext}}\r\n            </p>\r\n        </div>\r\n        <div class=\"card-action links-card\">\r\n            <div class=\"row s12\">\r\n                <div class=\"col s4 m4\">\r\n                <a class=\"link red-text\" target=\"_blank\" href=\"mailto:drkalbande@spit.ac.in\">\r\n                    <i class=\"fas fa-envelope fa-2x fa-icon-custom color-primary\"></i>\r\n                </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link\" target=\"_blank\" href=\"http://www.drkalbande.in\">\r\n                        <i class=\"fas fa-globe-americas fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link red-text\" target=\"_blank\" href=\"https://in.linkedin.com/in/dr-dhananjay-kalbande-77349923\">\r\n                        <i class=\"fab fa-linkedin fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col s12 m12 heading-custom blue-text\">Students</div>\r\n    <div class=\"col s12 m8 offset-m2 l4\">\r\n        <div class=\"card intro-card\">\r\n        <img class=\"profile_pic mdl-shadow--4dp\" src=\"../assets/img/sai.jpg\"/>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\"><b>Sai Yerramreddy</b></span>\r\n            <p class=\"intro-card-text\">\r\n                    Mentor and Overall Head<br><br>\r\n                    <i>Avid learner of technology,<br> Data Science Lover, Comic Geek,<br> CE student at S.P.I.T</i>\r\n            </p>\r\n        </div>\r\n        <div class=\"card-action links-card\">\r\n            <div class=\"row s12\">\r\n                <div class=\"col s4 m4\">\r\n                <a class=\"link\" target=\"_blank\" href=\"mailto:sai.yerremreddy@spit.ac.in\">\r\n                    <i class=\"fas fa-envelope fa-2x fa-icon-custom color-primary\"></i>\r\n                </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link\" target=\"_blank\" href=\"https://github.com/SaiArrow\">\r\n                        <i class=\"fab fa-github fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link\" target=\"_blank\" href=\"https://www.linkedin.com/in/sai-yerremreddy-8240b7128/\">\r\n                        <i class=\"fab fa-linkedin fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col s12 m8 offset-m2 l4\">\r\n        <div class=\"card intro-card\">\r\n        <img class=\"profile_pic mdl-shadow--4dp\" src=\"../assets/img/sam.jpg\"/>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\"><b>Samriddha Basu</b></span>\r\n            <p class=\"intro-card-text\">\r\n                    Mentor and Overall Head<br><br>\r\n                    <i>A computer engineering student<br> with a love of tech<br> and a flair for code</i>\r\n            </p>\r\n        </div>\r\n        <div class=\"card-action links-card\">\r\n            <div class=\"row s12\">\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link\" target=\"_blank\" href=\"https://samriddhabasu.github.io\">\r\n                        <i class=\"fas fa-globe-americas fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link\" target=\"_blank\" href=\"https://github.com/TheDorkKnightRises\">\r\n                        <i class=\"fab fa-github fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                <a class=\"link\" target=\"_blank\" href=\"https://www.linkedin.com/in/samriddha-basu/\">\r\n                    <i class=\"fab fa-linkedin fa-2x color-primary\"></i>\r\n                </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col s12 m8 offset-m2 l4\">\r\n        <div class=\"card intro-card\">\r\n        <img class=\"profile_pic mdl-shadow--4dp\" src=\"../assets/img/tejas.jpg\"/>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\"><b>Tejas Bhitle</b></span>\r\n            <p class=\"intro-card-text\">\r\n                    Mentor and Web Dev Head<br><br>\r\n                    <i>Incoming Tech Analyst at Barclays,<br> Ex Morgan Stanley Intern,<br> Computer undergrad at S.P.I.T.</i>\r\n            </p>\r\n        </div>\r\n        <div class=\"card-action links-card\">\r\n            <div class=\"row s12\">\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link\" target=\"_blank\" href=\"https://tejasbhitle.github.io\">\r\n                        <i class=\"fas fa-globe-americas fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                    <a class=\"link\" target=\"_blank\" href=\"https://github.com/TejasBhitle\">\r\n                        <i class=\"fab fa-github fa-2x color-primary\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col s4 m4\">\r\n                <a class=\"link\" target=\"_blank\" href=\"https://www.linkedin.com/in/tejasbhitle/\">\r\n                    <i class=\"fab fa-linkedin fa-2x color-primary\"></i>\r\n                </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");




var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(firebaseDb, title) {
        this.firebaseDb = firebaseDb;
        this.title = title;
        this.introtext = '';
        this.showSpinner = false;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('TechForSocial - People who made it possible');
        this.showSpinner = true;
        this.subscription = this.firebaseDb.getFounderIntro().subscribe(function (item) {
            var data = item.data();
            var text = data["bio"];
            console.log(text);
            _this.introtext = text;
            _this.showSpinner = false;
        });
    };
    PeopleComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseDbService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/project-details/project-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project-details/project-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-wrapper-custom{\r\n    text-align: center;\r\n}\r\n.spinner-custom{\r\n    display: inline-block;\r\n}\r\n.card-custom{\r\n    padding-top: 40px;\r\n    margin-top: 20px;\r\n}\r\n.card .card-image img {\r\n    margin: auto;\r\n    height: 150px;\r\n    width: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyLXdyYXBwZXItY3VzdG9te1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zcGlubmVyLWN1c3RvbXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uY2FyZC1jdXN0b217XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtaW1hZ2UgaW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/project-details/project-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project-details/project-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m8 offset-m2\">\r\n      <div class=\"card card-custom\">\r\n        <div class=\"card-image\">\r\n            <img src=\"{{project$.logo}}\">\r\n        </div>\r\n\r\n        <div class=\"card-content\" style=\"text-align:center;\">\r\n\r\n        <div *ngIf=\"showSpinner\" class=\"spinner-wrapper-custom\">\r\n          <div class=\"s12 m12 spinner-custom preloader-wrapper small active\">\r\n              <div class=\"spinner-layer spinner-blue-only\">\r\n                  <div class=\"circle-clipper left\">\r\n                  <div class=\"circle\"></div>\r\n                  </div>\r\n                  <div class=\"gap-patch\">\r\n                  <div class=\"circle\"></div>\r\n                  </div>\r\n                  <div class=\"circle-clipper right\">\r\n                  <div class=\"circle\"></div>\r\n                  </div>\r\n              </div>\r\n              </div>\r\n          </div>\r\n            \r\n          <span class=\"card-title activator grey-text text-darken-4\">\r\n              {{project$.name}}\r\n          </span>\r\n          {{project$.abstract}}\r\n      </div>\r\n\r\n      <div class=\"card-action card-action-custom\">\r\n          <span *ngFor=\"let keyword of project$.keywords\">\r\n              <div class=\"chip\">{{keyword}}</div>\r\n          </span>\r\n      </div>\r\n      <div class=\"card-content\" *ngIf=\"project$.papers\">\r\n        Papers/Patents:\r\n        <ul style=\"list-style-type:none\">\r\n          <li *ngFor=\"let paper of project$.papers\">\r\n            <i  class=\"fa fa-file\" aria-hidden=\"true\"></i> \r\n            <a target=\"_blank\" href=\"{{paper.url}}\">{{paper.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"card-content\">Team:<br>{{project$.team}}</div>\r\n      </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/project-details/project-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project/project */ "./src/app/project/project.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(firebaseDb, route, title) {
        this.firebaseDb = firebaseDb;
        this.route = route;
        this.title = title;
        this.project$ = new _project_project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
        this.showSpinner = false;
        this.slug = this.route.snapshot.params.slug;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("TechForSocial - " + this.slug);
        var localProject = sessionStorage.getItem('project/' + this.slug);
        if (!localProject) {
            this.showSpinner = true;
            this.subscription = this.firebaseDb.getProject(this.slug)
                .subscribe(function (item) {
                var data = item.data();
                var project = new _project_project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
                project.key = data["key"];
                project.name = data["name"];
                project.abstract = data["abstract"];
                project.index = data["index"];
                project.isOpen = data["isOpen"];
                project.papers = data["papers"];
                project.slug = data["slug"];
                project.team = data["team"];
                project.keywords = data["keywords"];
                project.logo = data["logo"];
                project.description = data["description"];
                _this.project$ = project;
                _this.showSpinner = false;
                _this.subscription.unsubscribe();
                sessionStorage.setItem('project/' + _this.slug, JSON.stringify(project));
            });
        }
        else {
            this.project$ = JSON.parse(localProject);
        }
    };
    ProjectDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/project-details/project-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDbService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col s12 m12 heading-custom blue-text\">Open Projects</div>\r\n\r\n    <div *ngIf=\"showSpinner\" class=\"spinner-wrapper-custom\">\r\n    <div class=\"s12 m12 spinner-custom preloader-wrapper small active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n          <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n          <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div *ngFor=\"let project of openProjects$ ; let i = index\" class=\"col s12 m6\">\r\n\r\n        <div class=\"card card-custom\">\r\n            <div class=\"card-image\">\r\n                <img src=\"{{project.logo}}\">\r\n            </div>\r\n            <div class=\"card-content\" style=\"text-align:center;\">\r\n                <span class=\"card-title activator grey-text text-darken-4\">\r\n                    {{project.name}}\r\n                </span>\r\n                {{project.abstract | shorttext}}\r\n            </div>\r\n            <div class=\"card-action card-action-custom\">\r\n                <span *ngFor=\"let keyword of project.keywords\">\r\n                    <div class=\"chip\">{{keyword}}</div>\r\n                </span>\r\n            </div>\r\n            <div class=\"card-action card-action-custom\">\r\n                <a routerLink=\"/project/{{project.slug}}\">Read More</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"i%2==1\" class=\"col s12 m12\"  style=\"height: 1px;\"></div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"col s12 m12 heading-custom  blue-text\">Closed Projects</div>\r\n\r\n    <div *ngIf=\"showSpinner\" class=\"spinner-wrapper-custom\">\r\n    <div class=\"s12 m12 spinner-custom preloader-wrapper small active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n            <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let project of closedProjects$ ; let i = index\" class=\"col s12 m6\">\r\n\r\n            <div class=\"card card-custom\">\r\n                <div class=\"card-image\">\r\n                    <img src=\"{{project.logo}}\">\r\n                </div>\r\n                <div class=\"card-content\" style=\"text-align:center;\">\r\n                    <span class=\"card-title activator grey-text text-darken-4\">\r\n                        {{project.name}}\r\n                    </span>\r\n                    {{project.abstract | shorttext}}\r\n                </div>\r\n                <div class=\"card-action card-action-custom\">\r\n                    <span *ngFor=\"let keyword of project.keywords\">\r\n                        <div class=\"chip\">{{keyword}}</div>\r\n                    </span>\r\n                </div>\r\n                <div class=\"card-action card-action-custom\">\r\n                    <a routerLink=\"/project/{{project.slug}}\">Read More</a>\r\n                </div>\r\n            </div>\r\n    \r\n        </div>\r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".same-height-wrapper {\n  display: flex; }\n\n.same-height {\n  flex: 1; }\n\n.spinner-wrapper-custom {\n  text-align: center; }\n\n.spinner-custom {\n  display: inline-block; }\n\n.card-custom {\n  padding-top: 40px;\n  margin-top: 20px; }\n\n.card .card-image img {\n  margin: auto;\n  height: 150px;\n  width: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZS9Qcm9qZWN0cy9Bbmd1bGFyL1RlY2hGb3JTb2NpYWwvZnJvbnRlbmQvc3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksT0FBTyxFQUFBOztBQUVYO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbWUtaGVpZ2h0LXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zYW1lLWhlaWdodHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLnNwaW5uZXItd3JhcHBlci1jdXN0b217XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNwaW5uZXItY3VzdG9te1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jYXJkLWN1c3RvbXtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY2FyZCAuY2FyZC1pbWFnZSBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(firebaseDb, title) {
        this.firebaseDb = firebaseDb;
        this.title = title;
        this.openProjects$ = [];
        this.closedProjects$ = [];
        this.showSpinner = false;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("TechForSocial - Projects which transformed Everything");
        var localOpenProjects = sessionStorage.getItem('openProjects');
        var localClosedProjects = sessionStorage.getItem('closedProjects');
        if (!localClosedProjects) {
            this.showSpinner = true;
            this.subscription = this.firebaseDb.getProjects().subscribe(function (projects) {
                _this.openProjects$ = [];
                _this.closedProjects$ = [];
                projects.forEach(function (project) {
                    if (project['isOpen'])
                        _this.openProjects$.push(project);
                    else
                        _this.closedProjects$.push(project);
                });
                _this.showSpinner = false;
                _this.subscription.unsubscribe();
                console.log("caching projects");
                sessionStorage.setItem('openProjects', JSON.stringify(_this.openProjects$));
                sessionStorage.setItem('closedProjects', JSON.stringify(_this.closedProjects$));
            });
        }
        else {
            this.openProjects$ = JSON.parse(localOpenProjects);
            this.closedProjects$ = JSON.parse(localClosedProjects);
        }
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
        if (this.subscription)
            this.subscription.unsubscribe();
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDbService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.ts":
/*!************************************!*\
  !*** ./src/app/project/project.ts ***!
  \************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/publication/publication.component.css":
/*!*******************************************************!*\
  !*** ./src/app/publication/publication.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-card{\r\n  padding: 0px 0px 40px 0px;\r\n  margin: 0 auto;\r\n  margin-bottom: 12px;\r\n  margin-top: 12px;\r\n}\r\n.card-title{\r\n  text-align: center;\r\n}\r\n.spinner-wrapper-custom{\r\n  text-align: center;\r\n}\r\n.spinner-custom{\r\n  display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb24vcHVibGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY2F0aW9uL3B1YmxpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8tY2FyZHtcclxuICBwYWRkaW5nOiAwcHggMHB4IDQwcHggMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNwaW5uZXItd3JhcHBlci1jdXN0b217XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zcGlubmVyLWN1c3RvbXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/publication/publication.component.html":
/*!********************************************************!*\
  !*** ./src/app/publication/publication.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\" row col s12 m12 heading-custom blue-text\">Publications</div>\r\n\r\n  <div *ngIf=\"showSpinner\" class=\"spinner-wrapper-custom\">\r\n    <div class=\"s12 m12 spinner-custom preloader-wrapper small active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n            <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n            </div>\r\n            <div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n  <div *ngFor=\"let pub_year of pub_years_keys$.slice().reverse()\" class=\"card intro-card col s12 m8 offset-m2\">\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">{{pub_year}}</span>\r\n            \r\n              <ol class=\"intro-card-text\">\r\n                <li *ngFor=\"let pub of pub_years$[pub_year]\"  class=\"col s12 m12\">\r\n                  <a target=\"_blank\" href=\"{{pub.filepath}}\">{{pub.name}}</a>\r\n                </li>\r\n              </ol>\r\n            \r\n        </div>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/publication/publication.component.ts":
/*!******************************************************!*\
  !*** ./src/app/publication/publication.component.ts ***!
  \******************************************************/
/*! exports provided: PublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationComponent", function() { return PublicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-db.service */ "./src/app/firebase-db.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var PublicationComponent = /** @class */ (function () {
    function PublicationComponent(firebaseDb, title) {
        this.firebaseDb = firebaseDb;
        this.title = title;
        this.pub_years$ = {};
        this.pub_years_keys$ = [];
        this.showSpinner = false;
    }
    PublicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle("TechForSocial - Publications");
        var localPublicationsKeys = sessionStorage.getItem('publications-keys');
        var localPublicationYears = sessionStorage.getItem('publication-years');
        if (!localPublicationsKeys) {
            this.showSpinner = true;
            this.subscription = this.firebaseDb.getPublications().subscribe(function (publications) {
                _this.pub_years$ = {};
                for (var _i = 0, publications_1 = publications; _i < publications_1.length; _i++) {
                    var pub = publications_1[_i];
                    if (!_this.pub_years$[pub['year']])
                        _this.pub_years$[pub['year']] = [];
                    _this.pub_years$[pub['year']].push(pub);
                }
                _this.pub_years_keys$ = Object.keys(_this.pub_years$);
                _this.showSpinner = false;
                _this.subscription.unsubscribe();
                sessionStorage.setItem('publications-keys', JSON.stringify(_this.pub_years_keys$));
                sessionStorage.setItem('publication-years', JSON.stringify(_this.pub_years$));
            });
        }
        else {
            this.pub_years_keys$ = JSON.parse(localPublicationsKeys);
            this.pub_years$ = JSON.parse(localPublicationYears);
        }
    };
    PublicationComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    PublicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publication',
            template: __webpack_require__(/*! ./publication.component.html */ "./src/app/publication/publication.component.html"),
            styles: [__webpack_require__(/*! ./publication.component.css */ "./src/app/publication/publication.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_db_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseDbService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ "./src/app/releases/releases.component.css":
/*!*************************************************!*\
  !*** ./src/app/releases/releases.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbGVhc2VzL3JlbGVhc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/releases/releases.component.html":
/*!**************************************************!*\
  !*** ./src/app/releases/releases.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  releases works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/releases/releases.component.ts":
/*!************************************************!*\
  !*** ./src/app/releases/releases.component.ts ***!
  \************************************************/
/*! exports provided: ReleasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function() { return ReleasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReleasesComponent = /** @class */ (function () {
    function ReleasesComponent() {
    }
    ReleasesComponent.prototype.ngOnInit = function () {
    };
    ReleasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-releases',
            template: __webpack_require__(/*! ./releases.component.html */ "./src/app/releases/releases.component.html"),
            styles: [__webpack_require__(/*! ./releases.component.css */ "./src/app/releases/releases.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReleasesComponent);
    return ReleasesComponent;
}());



/***/ }),

/***/ "./src/app/short-text.pipe.ts":
/*!************************************!*\
  !*** ./src/app/short-text.pipe.ts ***!
  \************************************/
/*! exports provided: ShortTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortTextPipe", function() { return ShortTextPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortTextPipe = /** @class */ (function () {
    function ShortTextPipe() {
    }
    ShortTextPipe.prototype.transform = function (text, size) {
        if (size === void 0) { size = 250; }
        if (size > text.length)
            return text;
        else
            return text.slice(0, size) + '...';
    };
    ShortTextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'shorttext' })
    ], ShortTextPipe);
    return ShortTextPipe;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAWRAlE89ply1v8eC2UZDU8vxauav4zBRc",
        authDomain: "tech-for-social.firebaseapp.com",
        databaseURL: "https://tech-for-social.firebaseio.com",
        projectId: "tech-for-social",
        storageBucket: "tech-for-social.appspot.com",
        messagingSenderId: "729728223075"
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAWRAlE89ply1v8eC2UZDU8vxauav4zBRc",
        authDomain: "tech-for-social.firebaseapp.com",
        databaseURL: "https://tech-for-social.firebaseio.com",
        projectId: "tech-for-social",
        storageBucket: "tech-for-social.appspot.com",
        messagingSenderId: "729728223075"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/e/Projects/Angular/TechForSocial/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map