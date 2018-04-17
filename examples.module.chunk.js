webpackJsonp(["examples.module"],{

/***/ "./src/app/site/examples/examples-home/examples-home.component.css":
/***/ (function(module, exports) {

module.exports = ".active1{\r\n    background-color: #1483B7;\r\n    color:white;\r\n}"

/***/ }),

/***/ "./src/app/site/examples/examples-home/examples-home.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"assets/css/animations.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/custom-sa.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/sahil-hover.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/home-responsive.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/useCase.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/animated-masonry-gallery.css\" type=\"text/css\" />\r\n<link rel=\"stylesheet\" href=\"assets/css/useCase-responsive.css\">\r\n<div class=\"usecase\" id=\"\">\r\n    <br><br><br><br>\r\n    <!--  top section-->\r\n    <div class=\"section-main sec-example\">\r\n        <!-- <section class=\"section section-5 sec-outgrowMagic-title\">\r\n            <div class=\"container mobile-container\">\r\n                <div class=\"section-2-heading mk-animate-element scale-up fnt-chnge uppercase\">\r\n                    Outgrow In Practice\r\n                </div>\r\n                <h5 class=\"section-2-subheading mk-animate-element scale-up\">\r\n                    Get inspired by some of our most successful calculators & quizzes!\r\n                </h5>\r\n            </div>\r\n        </section> -->\r\n\r\n        <section class=\"section section-5 sec-outgrowMagic\">\r\n            <div class=\"container-fluid np\">\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 np\">\r\n                    <!--<div id=\"sticky-anchor\"></div>-->\r\n                    <div class=\"tab-outer-frame col-xs-12 col-md-10 col-sm-12 text-center\">\r\n                        <!--<span class=\"icon-webcam\"></span>-->\r\n                        <div class=\"hrefTarget tab-inner-frame col-xs-12 col-md-12 col-sm-12\">\r\n                            <iframe id=\"og-iframe\" src=\"https://website.outgrow.us/build-a-startup?vHeight=1\" style=\"min-height: 635px;\" #frame></iframe>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-md-12 col-sm-12 mobile-container rs-hide calc-links text-center\">\r\n                    <a href=\"javascript:void(0);\" [ngClass]=\"{'active': isActive0}\" (click)=\"videoURL('a',frame)\" >\r\n                        \r\n                        <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc06.jpg\" />\r\n                    </a>\r\n                    <a href=\"javascript:void(0);\"  [ngClass]=\"{'active': isActive1}\"  (click)=\"videoURL('b',frame)\">\r\n                            \r\n                        <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc01.jpg\" />\r\n                    </a>\r\n                    <a href=\"javascript:void(0);\" [ngClass]=\"{'active': isActive2}\"  (click)=\"videoURL('c',frame)\">\r\n                            \r\n                        <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc02.jpg\" />\r\n                    </a>\r\n                    <a href=\"javascript:void(0);\" [ngClass]=\"{'active': isActive3}\"  (click)=\"videoURL('d',frame)\">\r\n                            \r\n                        <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc03.jpg\" />\r\n                    </a>\r\n                    <a href=\"javascript:void(0);\" [ngClass]=\"{'active': isActive4}\"  (click)=\"videoURL('e',frame)\">\r\n                            \r\n                        <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc04.jpg\" />\r\n                    </a>\r\n                    <a href=\"javascript:void(0);\" [ngClass]=\"{'active': isActive5}\"  (click)=\"videoURL('f',frame)\">\r\n                            \r\n                        <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc05.jpg\" />\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"col-xs-12 col-md-12 col-sm-12 section-6-left mobile-container rs-show text-center\">\r\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-links\">\r\n                        <a href=\"https://website.outgrow.us/build-a-startup?vHeight=1\" [ngClass]=\"{'active': isActive0}\" (click)=\"videoURL('a',frame)\" class=\"col-sm-4 np calcembed active\" target=\"_blank\">\r\n                            <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc06.jpg\" />\r\n                        </a>\r\n                        <a href=\"https://website.outgrow.us/Which-engineering-major-is-right-for-you?vHeight=1\" [ngClass]=\"{'active': isActive1}\" (click)=\"videoURL('b',frame)\" class=\"col-sm-4 np calcembed\" target=\"_blank\">\r\n                            <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc01.jpg\" />\r\n                        </a>\r\n                        <a href=\"https://website.outgrow.us/Cost-of-a-video-campaign-4?vHeight=1\" [ngClass]=\"{'active': isActive2}\" (click)=\"videoURL('c',frame)\" class=\"col-sm-4 np calcembed\" target=\"_blank\">\r\n                            <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc02.jpg\" />\r\n                        </a>\r\n                        <a href=\"https://website.outgrow.us/What-is-your-risk-of-getting-a-heart-disease?vHeight=1\" [ngClass]=\"{'active': isActive3}\" (click)=\"videoURL('d',frame)\" class=\"col-sm-4 np calcembed\" target=\"_blank\">\r\n                            <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc03.jpg\" />\r\n                        </a>\r\n                        <a href=\"https://website.outgrow.us/outgrow-roi?vHeight=1\" [ngClass]=\"{'active': isActive4}\" (click)=\"videoURL('e',frame)\" class=\"col-sm-4 np calcembed\" target=\"_blank\">\r\n                            <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc04.jpg\" />\r\n                        </a>\r\n                        <a href=\"https://website.outgrow.us/build-an-app\" [ngClass]=\"{'active': isActive5}\" (click)=\"videoURL('f',frame)\" class=\"col-sm-4 np calcembed\" target=\"_blank\">\r\n                            <img alt=\"Calculator thumb image\" class=\"thumb-calc\" src=\"https://dzvexx2x036l1.cloudfront.net/calc05.jpg\" />\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n\r\n    <!-- Start Trial CTA-->\r\n    <!--<section class=\"section start-trial-cta\">\r\n\t\t<div class=\"container-fluid np\">\r\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t<div class=\"bg2-img\">\r\n\t\t\t\t\t<h3>Generate Ideas</h3>\r\n\t\t\t\t\t<a href=\"/idea-generation?get-started\" class=\"params trialLOL\">\r\n\t\t\t\t\t\t<button onclick=\"callGA(\\'CANNOT WAIT CTA\\')\" class=\"btn-buildcal\">\r\n\t\t\t\t\t\t<img src=\"\" data-src=\"https://dzvexx2x036l1.cloudfront.net/icon-mouse.png\"> &nbsp;Get Started</button>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section> -->\r\n\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 text-center np case-breathers\">\r\n        <div class=\"container custom-container mobile-container\">\r\n            <div class=\"case-breathers-leftSide\">\r\n                <img src=\"assets/images/example-breather-img.png\" class=\"uni1\">\r\n            </div>\r\n            <div class=\"case-breathers-rightSide\">\r\n                <h1 class=\"heading\">Generate interactive content ideas for your company using our idea worksheet</h1>\r\n                <a href=\"https://docs.google.com/spreadsheets/d/1nIktXeookbo_V9dmHPBR4Zmk9ToYX7PODIoQbOV7RFM/edit#gid=1175659431\" target=\"_blank\"\r\n                    class=\"btn btn-download btn-hover\">Download Excel Idea Generator Sheet\r\n                    <i class=\"material-icons\">arrow_forward</i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <section class=\"section\">\r\n        <div class=\"container\">\r\n            <div id=\"premade-heading\" class=\"useCase-heading\"  [ngClass]=\"{'hide': isHeadingHide}\" (click)=\"hide('heading')\">\r\n                {{hiddenHeading}}\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!--  section end-->\r\n\r\n  \r\n\r\n    <!-- start: example calc -->\r\n\r\n    <section class=\"section example-calc\">\r\n        <!-- <div id=\"premade-loader\" class=\"preloader\">\r\n            <div class=\"status\">&nbsp;</div>\r\n        </div> -->\r\n        <div id=\"premade-content\" class=\"tab-section \"  [ngClass]=\"{'hide': isHideContent}\" >\r\n            <div class=\"container-fluid\">\r\n                <!-- Nav tabs -->\r\n                <ul class=\"nav nav-tabs premade-calc\" role=\"tablist\">\r\n                    <li role=\"presentation\" class=\"tab-title active\">\r\n                        <a id=\"Calculator\" href=\"#numeric-calc\" aria-controls=\"numeric-calc\" class=\"res-tab\" role=\"tab\" data-toggle=\"tab\" (click)=\"changeTab('Calculator')\">\r\n                            Numerical Calculator\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"presentation\" class=\"tab-title\">\r\n                        <a id=\"OutcomeQuiz\" href=\"#outcome-quiz\" aria-controls=\"outcome-quiz\" role=\"tab\" data-toggle=\"tab\" (click)=\"changeTab('OutcomeQuiz')\">\r\n                            Outcome Quiz\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"presentation\" class=\"tab-title\">\r\n                        <a id=\"GradedQuiz\" href=\"#graded-quiz\" aria-controls=\"graded-quiz\" role=\"tab\" data-toggle=\"tab\" (click)=\"changeTab('GradedQuiz')\">\r\n                            Graded Quiz\r\n                        </a>\r\n                    </li>\r\n                    <li role=\"presentation\" class=\"tab-title\">\r\n                        <a id=\"Poll\" href=\"#outcome-quiz\" aria-controls=\"poll\" role=\"tab\" data-toggle=\"tab\" (click)=\"changeTab('Poll')\">\r\n                            Poll\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n\r\n                <!-- Tab panes -->\r\n                <div class=\"tab-content usecase\">\r\n                    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"numeric-calc\">\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 new-cards-section pre-card\">\r\n                            <!-- <div class=\"preloader\">\r\n\t\t\t\t\t\t\t\t<div class=\"status\">&nbsp;</div>\r\n\t\t\t\t\t\t\t</div> -->\r\n                            <div class=\"premade-template\">\r\n                                <ul class=\"pre-temp-cat\" id=\"calc-cats\">\r\n                                    \r\n                                    <li class=\"\" *ngFor=\"let item of items; let i=index\"  [class.active]=\"sIndex === i\">\r\n                                    <!-- <li [ngClass]=\"{'active': s}\" *ngFor=\"let item of items; let i=index;let s = false;\"> -->\r\n                                    <a href=\"javascript:void(0)\" id=\"{{item.id}}\" (click)=\"shuffleCalcs(item.id,i);\">{{item.name}}</a>\r\n                                    </li>\r\n                                    \r\n                                </ul>\r\n\r\n                                <div class=\"pre-temp-cont\">\r\n                                    <ul class=\"pre-temp-list\" id=\"gallery-content-center\">\r\n\r\n                                        <li class=\" filter-all filter-auto\" id=\"calc-auto-loan\" *ngFor=\"let item of headingDescription; let ind=index\" [class.active]=\"sIndex1 === ind\">\r\n                                            <a href=\"javascript:void(0)\" (click)=\"markAsActive(ind)\">{{item}} </a>\r\n                                        </li>\r\n                                        \r\n                                    </ul>\r\n\r\n                                    <div class=\"pre-temp-view\">\r\n                                        <div class=\"temp-preview\" *ngFor=\"let gif of gifs\">\r\n                                            <span class=\"image-bg1\">\r\n                                                <span class=\"image-scroll1\">\r\n                                                    <img id=\"premade-gif\" src={{gif.url}} />\r\n                                                </span>\r\n                                            </span>\r\n                                            <div class=\"content temp-info\">\r\n                                                <h3>\r\n                                                    <p id=\"premade-calc-name\">\r\n                                                        <i class=\"material-icons\">&#xE80E;</i>\r\n                                                        {{gif.title}}\r\n                                                    </p>\r\n                                                    <span id=\"premade-calc-layout\">\r\n                                                        <strong>Layout:</strong>\r\n                                                        {{gif.description}}\r\n                                                    </span>\r\n                                                </h3>\r\n                                                <a id=\"premade-preview-link\" class=\"btn btn-red btn-hover\" target=\"_blank\" href={{gif.hRef}}>Preview</a>\r\n                                                <a class=\"btn btn-red btn-hover\" href=\"//app.outgrow.co/signup\">Build your own</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- end: example calc -->\r\n\r\n    <!-- Start Trial CTA-->\r\n    <section class=\"section start-trial-cta mb0\">\r\n        <div class=\"container-fluid np\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                <div class=\"bg1-img\">\r\n                    <a href=\"//app.outgrow.co\" id=\"trialAnchor\">\r\n                        <button class=\"btn-buildcal mk-animate-element left-to-right mk-in-viewport full-visible ripple\">\r\n                            <i class=\"material-icons\">view_compact</i>\r\n                            <p>Build Your interactive experience</p>\r\n                        </button>\r\n                    </a>\r\n                    <!-- <label>No Credit Card Required</label> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- Start: Modal calcEmbed1 -->\r\n    <div id=\"calcEmbed-modal1\" class=\"modal fade calcEmbed-modal\" tabindex=\"-1\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-video\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <i class=\"material-icons\">close</i>\r\n                    </button>\r\n                    <div class=\"col-md-12 np\">\r\n                        <iframe class=\"og-iframe-res\" src=\"\" data-calc=\"https://website.outgrow.us/Which-engineering-major-is-right-for-you?vHeight=1\"></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End: Modal calcEmbed1 -->\r\n\r\n    <!-- Start: Modal calcEmbed2 -->\r\n    <div id=\"calcEmbed-modal2\" class=\"modal fade calcEmbed-modal\" tabindex=\"-1\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-video\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <i class=\"material-icons\">close</i>\r\n                    </button>\r\n                    <div class=\"col-md-12 np\">\r\n                        <iframe class=\"og-iframe-res\" src=\"\" data-calc=\"https://website.outgrow.us/Cost-of-a-video-campaign-4?vHeight=1\" ></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End: Modal calcEmbed2 -->\r\n\r\n    <!-- Start: Modal calcEmbed3 -->\r\n    <div id=\"calcEmbed-modal3\" class=\"modal fade calcEmbed-modal\" tabindex=\"-1\" role=\"dialog\">\r\n        <div class=\"modal-dialog modal-dialog-video\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-body\">\r\n                    <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <i class=\"material-icons\">close</i>\r\n                    </button>\r\n                    <div class=\"col-md-12 np\">\r\n                        <iframe class=\"og-iframe-res\" src=\"\" data-calc=\"https://website.outgrow.us/What-is-your-risk-of-getting-a-heart-disease?vHeight=1\"></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End: Modal calcEmbed3 -->\r\n<!-- <app-footer></app-footer> -->\r\n  \r\n   \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/site/examples/examples-home/examples-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_video_url_service__ = __webpack_require__("./src/app/shared/services/video-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExamplesHomeComponent = /** @class */ (function () {
    function ExamplesHomeComponent(videoURLService, router, title) {
        this.videoURLService = videoURLService;
        this.sIndex = null;
        this.sIndex1 = null;
        title.setTitle("Examples | Outgrow");
        this.isActive0 = true;
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
        this.isActive5 = false;
        this.isHeadingHide = true;
        this.isHideContent = true;
    }
    ExamplesHomeComponent.prototype.ngOnInit = function () {
        // new test();
        this.isHeadingHide = false;
        this.isHideContent = false;
        this.changeTab("Calculator");
    };
    //function for service
    ExamplesHomeComponent.prototype.videoURL = function (type, frame) {
        if (type == 'a') {
            this.isActive0 = true;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive5 = false;
        }
        else if (type == 'b') {
            this.isActive1 = true;
            this.isActive0 = false;
            this.isActive2 = false;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive5 = false;
        }
        else if (type == 'c') {
            this.isActive2 = true;
            this.isActive0 = false;
            this.isActive1 = false;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive5 = false;
        }
        else if (type == 'd') {
            this.isActive3 = true;
            this.isActive0 = false;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive4 = false;
            this.isActive5 = false;
        }
        else if (type == 'e') {
            this.isActive4 = true;
            this.isActive0 = false;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive3 = false;
            this.isActive5 = false;
        }
        else if (type == 'f') {
            this.isActive5 = true;
            this.isActive0 = false;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive3 = false;
            this.isActive4 = false;
        }
        this.videoURLService.videoURL(type, frame);
    }; //end of function videoUrl;
    // function for heading example:"there is a caluculator for that"
    ExamplesHomeComponent.prototype.changeTab = function (tabName) {
        if (tabName == "Calculator") {
            this.hiddenHeading = "There is a Calculator for that!";
            this.items = [
                { name: 'Auto', id: 'Auto' },
                { name: 'Education', id: 'Education' },
                { name: 'Finance', id: 'Finance' },
                { name: 'Marketing & Advertising', id: 'MarketingAdvertising' },
                { name: 'Health & Fitness', id: 'HealthFitness' },
                { name: 'Legal', id: 'Legal' },
                { name: 'Quintessential', id: 'Quintessential' },
                { name: 'Real Estate & Construction', id: 'RealEstateConstruction' },
                { name: 'Technology', id: 'Technology' },
                { name: 'Travel', id: 'Travel' },
                { name: 'Publishing', id: 'Publishing' },
            ];
            this.gifs = [
                {
                    url: 'https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif',
                    title: 'NEW CAR VS USED CAR',
                    description: 'The Chicago',
                    hRef: 'https://premade.outgrow.us/New-Car-vs-Used-Car'
                }
            ];
            console.log("@@@@", this.items[0].id);
            this.shuffleCalcs(this.items[0].id, 0);
        }
        else if (tabName == "OutcomeQuiz") {
            this.hiddenHeading = "There is an Outcome quiz for that";
            this.items = [
                { name: 'Auto', id: 'Auto' },
                { name: 'Education', id: 'Education' },
                { name: 'Health & Fitness', id: 'HealthFitness' },
                { name: 'Real Estate & Construction', id: 'RealEstateConstruction' },
                { name: 'Travel', id: 'Travel' },
                { name: 'TV and Entertainment', id: 'TVandEntertainment' },
                { name: 'Trending', id: 'Trending' }
            ];
            this.gifs = [
                {
                    url: 'https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif',
                    title: 'NEW CAR VS USED CAR',
                    description: 'The Chicago',
                    hRef: 'https://premade.outgrow.us/New-Car-vs-Used-Car'
                }
            ];
            console.log("@@@@", this.items[0].id);
            this.shuffleCalcs(this.items[0].id, 0);
        }
        else if (tabName == "GradedQuiz") {
            this.hiddenHeading = "There is a Graded quiz for that!";
            this.items = [
                { name: 'Auto', id: 'Auto' },
                { name: 'Marketing & Advertising', id: 'MarketingAdvertising' },
                { name: 'Health & Fitness', id: 'HealthFitness' },
                { name: 'Publishing', id: 'Publishing' },
                { name: 'Trending', id: 'Trending' }
            ];
            this.gifs = [
                {
                    url: 'https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif',
                    title: 'NEW CAR VS USED CAR',
                    description: 'The Chicago',
                    hRef: 'https://premade.outgrow.us/New-Car-vs-Used-Car'
                }
            ];
            console.log("@@@@", this.items[0].id);
            this.shuffleCalcs(this.items[0].id, 0);
        }
        else if (tabName == "Poll") {
            this.hiddenHeading = "There is a Poll for that!";
            this.items = [
                { name: 'Marketing & Advertising', id: 'MarketingAdvertising' },
            ];
            this.gifs = [
                {
                    url: 'https://dzvexx2x036l1.cloudfront.net/calc_images/find+out+your+digital+quotient.gif',
                    title: 'WHAT IS YOUR DIGITAL QUOTIENT?',
                    description: 'The Stockholm',
                    hRef: 'https://premade.outgrow.us/digital-quotient-quiz'
                }
            ];
            console.log("@@@@", this.items[0].id);
            this.shuffleCalcs(this.items[0].id, 0);
        }
    };
    //function to change auto education finance etc content;
    ExamplesHomeComponent.prototype.shuffleCalcs = function (item, i) {
        console.log("!!!!!!!", i);
        this.sIndex = i;
        if (item == "Auto") {
            this.headingDescription = ["Find out whether you should buy a used card or a new one.",
                "Answer 6 questions to find out whether you should buy or lease your next car.",
                "Find out if you're ready to buy a car.",
                "Find out how much monthly installment you'll be paying on your auto loan.",
                "Calculate the monthly lease payment on your next car.",
                "How much extra monthly payment will you need to make to shorten your car loan term?",
                "Find out the downpayment amount you'll need to purchase your new home.",
                "Find out which car suits you the best."
            ];
            this.markAsActive(0);
        }
        else if (item == "Education") {
            this.headingDescription = [
                "Answer 9 simple questions to find out which Ivy League college is best for you.",
                "Find out how much is college really going to cost you.",
                "Use this calculator to calculate your budget as a full-time student.",
                "Find out if your SAT or ACT scores are good enough to land you in Harvard.",
                "Find out which major should you study."
            ];
            this.markAsActive(0);
        }
        else if (item == "Finance") {
            this.headingDescription = [
                "Calculate your monthly mortgage payment.",
                "Calculate your monthly home budget and find how much you are saving each month.",
                "How much money do you need if you want to retire?",
                "Find out when you will become a millionaire!",
                "Set your savings goal today and find out how much you need to invest every month to achieve that goal.",
                "Find out how much balance will you have in your 401(k) at retirement.",
                "Find out how long will you take to payoff your credit card."
            ];
            this.markAsActive(0);
        }
        else if (item == "MarketingAdvertising") {
            this.headingDescription = [
                "Find out your Digital Quotient. ",
                "Find out if your SEO knowledge stacks up against top the 150 marketers with this 12-question SEO quiz.",
                "Find out whether you should go for a PPC agency or build an in-house team.",
                "Take this quiz to find out if you are a Facebook Marketing Expert.",
                "Find out how much you should spend on Paid Advertising.",
                "Estimate the ROI of your current email marketing strategy.",
                "Find out how often you should be blogging and how much you stand to gain from it.",
                "Take the poll on the top content marketing trends of 2018."
            ];
            this.markAsActive(0);
        }
        else if (item == "HealthFitness") {
            this.headingDescription = [
                "Find out which sport will be best suited for you.",
                "Set your weight loss target and find out how much calories you need to reduce every day.",
                "Find out if you know enough before jumping into your new fitness regime.",
                "FInd out the ideal number of calories you should be consuming every day.",
                "Find out if you are at risk of a heart attack or a stroke.",
                "Find out which yoga practice will deliver the results you want and is best suited for your physical condition Get your recommended daily protein intake.",
                "Find your ideal bodyweight"
            ];
            this.markAsActive(0);
        }
        else if (item == "Legal") {
            this.headingDescription = [
                "Get an estimate of your legal fees when you purchase a home.",
            ];
            this.markAsActive(0);
        }
        else if (item == "Quintessential") {
            this.headingDescription = [
                "Estimate the ROI you will get from using Outgrow.",
            ];
            this.markAsActive(0);
        }
        else if (item == "RealEstateConstruction") {
            this.headingDescription = [
                "Enter some details about your property and find out how much you will make by selling it.",
                "Find out how much you will need to shell out for your dream pool.",
                "Find out if you should buy or rent your next accomodation.",
                "Enter your details to find out the house value that fits within your budget.",
                "See how much it would cost you to rent instead of buying a house.",
                "Take this quiz to find out if you are ready to buy a house."
            ];
            this.markAsActive(0);
        }
        else if (item == "Technology") {
            this.headingDescription = [
                "Find out if your SaaS business is in a healthy condition.",
                "Find out how much your company can save with a payroll system.",
                "Get an estimate of how much you will need to build the app that you want."
            ];
            this.markAsActive(0);
        }
        else if (item == "Travel") {
            this.headingDescription = [
                "Get an estimate of how much it will cost you to climb Mount Everest.",
                "Find out which summer destination should you be heading out to.",
                "Get an estimate of how much you will save by staying in a hostel instead of a hotel for your next vacation."
            ];
            this.markAsActive(0);
        }
        else if (item == "Publishing") {
            this.headingDescription = [
                "Find out how much you know about global warming.",
                "Find out how likely are you to default on your student debt.",
                "Find out how much Trump tax plan will affect your tax bill."
            ];
            this.markAsActive(0);
        }
        else if (item == "TVandEntertainment") {
            this.headingDescription = [
                "Find out which Friends character are you most like."
            ];
            this.markAsActive(0);
        }
        else if (item == "Trending") {
            this.headingDescription = [
                "The 2018 Winter Olympics has been in the storm of controversies.",
                "Find out which one would you be! Find out the expat destination most suitable for you! There are 9 Best Picture nominations this year.",
                "Find out which of them are you likely to be! The Lunar New Year celebrations involve a lot of floral decorations.",
                "Find out which one suits you the best.",
                "Find out how posh you are compared to one of the wealthiest fictional characters of all time.",
                "Try out this quiz to refresh your knowledge of Women's issues.",
                "St. Patrick performed a whole host of #ThugLife miracles during his lifetime.",
                "Find out which one you'd be most likely to perform.",
                "Pi Day is an annual celebration of the mathematical constant π.",
                "And what better way to celebrate it than baking a pie that suits you the best.",
                "Thursday, March 22nd is the UN World Water Day.",
                "Take this quiz to find out whether your current water consumption is sustainable or not.",
                "Are you the speedy pup, or the narcissus pup, or the eternally stuck pup of the internet?",
                "Good Friday is on March 30th. And Twitter is as usual sprouting out Biblical jokes. Take this quiz to discover some of the finest ecclesiastical jokes ever.",
                "Easter is here, so let the great Easter egg hunt begin!",
                "The 1st of April is just around the corner. So take this quiz, gather your props, and get ready to play the best prank ever!",
                "Spielberg's next game-changing film, Ready Player One, is going to be in theatres this Thursday. Take this quiz to find out if you're as creative as the veteran mastermind.",
                "World Health Day is on the 7th of April. Take this quiz to find out how (un)healthy you are in your day-to-day life.",
                "Find out how long you'd survive if you'd gambled your way onto the Titanic, like Jack from James Cameron's 1997 film does.",
                "Take this quiz to find out if the time is right for your company to raise VC."
            ];
            this.markAsActive(0);
        }
    }; // end of function ShuffleClas;
    ExamplesHomeComponent.prototype.markAsActive = function (i) {
        this.sIndex1 = i;
    };
    ExamplesHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examples-home',
            template: __webpack_require__("./src/app/site/examples/examples-home/examples-home.component.html"),
            styles: [__webpack_require__("./src/app/site/examples/examples-home/examples-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_video_url_service__["a" /* VideoUrlService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]])
    ], ExamplesHomeComponent);
    return ExamplesHomeComponent;
}());



/***/ }),

/***/ "./src/app/site/examples/examples.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_home_examples_home_component__ = __webpack_require__("./src/app/site/examples/examples-home/examples-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_routing__ = __webpack_require__("./src/app/site/examples/examples.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__examples_routing__["a" /* routes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__examples_home_examples_home_component__["a" /* ExamplesHomeComponent */]]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/site/examples/examples.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examples_home_examples_home_component__ = __webpack_require__("./src/app/site/examples/examples-home/examples-home.component.ts");

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__examples_home_examples_home_component__["a" /* ExamplesHomeComponent */] }
];


/***/ })

});
//# sourceMappingURL=examples.module.chunk.js.map