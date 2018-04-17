webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples/examples.module": [
		"./src/app/site/examples/examples.module.ts",
		"examples.module",
		"common"
	],
	"./features/features.module": [
		"./src/app/site/features/features.module.ts",
		"features.module"
	],
	"./home/home.module": [
		"./src/app/site/home/home.module.ts",
		"home.module",
		"common"
	],
	"./pricing/pricing.module": [
		"./src/app/site/pricing/pricing.module.ts",
		"pricing.module"
	],
	"./site/site.module": [
		"./src/app/site/site.module.ts",
		"site.module",
		"common"
	],
	"./why-interactive/why-interactive.module": [
		"./src/app/site/why-interactive/why-interactive.module.ts",
		"why-interactive.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_header_header_component__ = __webpack_require__("./src/app/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_privacy_privacy_component__ = __webpack_require__("./src/app/shared/components/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_terms_terms_component__ = __webpack_require__("./src/app/shared/components/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_footer_footer_component__ = __webpack_require__("./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_module__ = __webpack_require__("./src/app/core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_components_terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routes */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_components_privacy_privacy_component__ = __webpack_require__("./src/app/shared/components/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_terms_terms_component__ = __webpack_require__("./src/app/shared/components/terms/terms.component.ts");


var routes = [
    { path: '', loadChildren: './site/site.module#SiteModule' },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_0__shared_components_privacy_privacy_component__["a" /* PrivacyComponent */] },
    { path: 'tos', component: __WEBPACK_IMPORTED_MODULE_1__shared_components_terms_terms_component__["a" /* TermsComponent */] },
];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 


/***/ }),

/***/ "./src/app/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_script_service__["a" /* Script */]]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"assets/css/allPage_minified.css\">\n    <section class=\"section section-14\" id=\"footer\">\n        <div class=\"container\">\n            <div class=\"col-xs-12 col-sm-12 np\">\n                <div class=\"col-xs-12 col-sm-2 footer-link mk-animate-element fade-in\">\n                    <h4>Overview</h4>\n                    <ul>\n                        <li id=\"none\"><a href=\"/why-interactive\" class=\"params\">Why Interactive Content?</a></li>\n                        <li id=\"none\"><a href=\"/features\"  class=\"params\">Features </a></li>\n                        <li id=\"none\"><a href=\"/examples\"  class=\"params\">Examples</a></li>\n                        <li id=\"none\"><a href=\"/idea-generation\"  class=\"params\" target=\"_blank\">Idea Generator</a></li>\n                        <li id=\"none\"><a href=\"/pricing\"  class=\"params\">Pricing</a></li>\n                        <!-- <li><a href=\"http://affiliates.outgrow.co/\">Affiliates</a></li> -->\n                        <li id=\"none\"><a href=\"http://resources.outgrow.co/\"  class=\"params\">Resources</a></li>\n                        <li id=\"none\"><a href=\"http://resources.outgrow.co/about\"  class=\"params\">About</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-12 col-sm-5 footer-link mk-animate-element fade-in hide\">\n                    <h4>Our Live Calculators</h4>\n                    <div class=\"scrollimg footer-img col-xs-6 col-sm-6\"><img data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/footer1.jpg\" src=\"\" alt=\"Our Live Calculators footer image\" /></div>\n                    <div class=\"scrollimg footer-img col-xs-6 col-sm-6\"><img data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/footer2.jpg\" src=\"\" alt=\"Our Live Calculators footer image\" /></div>\n                    <div class=\"scrollimg footer-img col-xs-6 col-sm-6\"><img data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/footer4.jpg\" src=\"\" alt=\"Our Live Calculators footer image\" /></div>\n                    <div class=\"scrollimg footer-img col-xs-6 col-sm-6\"><img data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/footer3.jpg\" src=\"\" alt=\"Our Live Calculators footer image\" /></div>\n                </div>\n                <div class=\"col-xs-12 col-sm-10 footer-link mk-animate-element fade-in\">\n                    <h4 class=\"footer-img2text col-xs-12\">Resources</h4>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/res1.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/res1.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/content-marketing-strategy-checklist\">Is Your Content Marketing Worth All The Effort? Consult Our 10 Point Checklist.</a>\n                        </div>\n                    </div>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/footer5.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/footer5.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/interactive-calculators-content-make-digital-marketing-agency-stand-out/\">Make Your Digital Marketing Agency Stand Out</a>\n                        </div>\n                    </div>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/res3.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/res3.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/university-college-calculators/\">7 Interactive Calculators Every University Needs on Its Website</a>\n                        </div>\n                    </div>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/res4.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/res4.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/lead-retention-activate-cold-leads\">Lead Retention Made Easy! Activate Cold Leads with Calculators</a>\n                        </div>\n                    </div>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/footer7.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/footer7.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/interactive-calculators-saas-companies\">9 Calculators Every SaaS Company Should Consider</a>\n                        </div>\n                    </div>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"/http:/dzvexx2x036l1.cloudfront.net/res7.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/res7.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/courses/best-interactive-lead-generation-techniques/\">Value Added Marketing With Digital Experiences</a>\n                        </div>\n                    </div>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/res8.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/res8.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/courses/lead-generation-with-calculators/\">Lead Generation With Interactive Calculators</a>\n                        </div>\n                    </div>\n                    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n                        <div class=\"col-xs-12 np\"><img class=\"scrollimg\" data-scroll-img=\"http://dzvexx2x036l1.cloudfront.net/res9.jpg\" src=\"http://dzvexx2x036l1.cloudfront.net/res9.jpg\" alt=\"Resources\" /></div>\n                        <div class=\"col-xs-12 np footer-img-text\" id=\"none\">\n                            <a href=\"http://resources.outgrow.co/how-an-interactive-calculator-generated-11592-qualified-leads/\">How an Interactive Calculator Generated 11,592 Qualified Leads</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 np footer-social\">\n                <ul><b>\n                    <li><a href=\"https://www.facebook.com/OutgrowCo/\">Facebook</a></li>\n                    <li><a href=\"https://www.linkedin.com/company/outgrow.co\">Linkedin</a></li>\n                    <li><a href=\"https://twitter.com/outgrowco\">Twitter</a></li>                \n                    <li class=\"border-left\"><a href=\"/privacy-policy\"  class=\"params\">Privacy Policy</a></li>\n                    <li><a href=\"/tos\"  class=\"params\">Terms of Services</a></li>\n                    <li><a href=\"javascript:void(0)\" target=\"_top\" id=\"intercom_trigger\">Contact Us</a></li>\n                    <li><a href=\"https://angel.co/venturepact/jobs\">Careers</a></li>\n                </b></ul>\n                <div class=\"footer-copyright\">\n                        <i class=\"material-icons\">copyright</i>\n                    <i class=\"material-icons\"></i>\n                    <span>Copyright 2018</span>\n                    <img class=\"scrollimg\" data-scroll-img src=\"https://dzvexx2x036l1.cloudfront.net/outgrow_logo_grey.svg\"  alt=\"Footer logo\" />\n                    <a style=\"display:none;\" href=\"https://trustlogo.com/install/index5.html?certificatename=Comodo-SSL-Wildcard\" target=\"_blank\"><img class=\"scrollimg footer-img-2 rs-hide-mb\" data-scroll-img=\"//dzvexx2x036l1.cloudfront.net/comodo_secure.png\" src=\"\" alt=\"comodo_secure image\" /></a>\n                </div>\n            </div>\n        </div>\n    </section>\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"assets/css/animations.css\">\n<link rel=\"stylesheet\" href=\"assets/css/custom-sa.css\">\n<link rel=\"stylesheet\" href=\"assets/css/sahil-hover.css\">\n<link rel=\"stylesheet\" href=\"assets/css/home-responsive.css\">\n<link rel=\"stylesheet\" href=\"assets/css/useCase.css\">\n<link rel=\"stylesheet\" href=\"assets/css/animated-masonry-gallery.css\" type=\"text/css\" />\n<link rel=\"stylesheet\" href=\"assets/css/useCase-responsive.css\">\n\n    <nav class=\"navbar custom-navbar navbar-default navbar-fixed-top\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                    aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"params navbar-brand\" routerLink=\"\" (click)=\"setTitle0()\">\n                    <img src=\"https://dzvexx2x036l1.cloudfront.net/logo.png\" alt=\"logo\" />\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\" id=\"navlist\">\n                    <li>\n                        <a routerLink=\"why-interactive\"  (click)=\"setTitle1()\" class=\"params\">Why Interactive Content ?</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"features\"  (click)=\"setTitle2()\"  class=\"params\">Features</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"pricing\"  (click)=\"setTitle3()\" class=\"params\">Pricing</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"examples\"  (click)=\"setTitle4()\" class=\"params\">Examples</a>\n                    </li>\n                    <li class=\"login\">\n                        <a href=\"//app.outgrow.co/login\" class=\"link-login params\" >Login</a>\n                    </li>\n                    <li class=\"signUp signUp-style res-nav-hide\">\n                        <a href=\"//app.outgrow.co/signup\" class=\"link-login params\">Sign up</a>\n                    </li>\n                    <li class=\"signUp res-nav-show\">\n                        <a href=\"//app.outgrow.co/signup\" class=\"link-login params\">Sign up</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(titleService) {
        this.titleService = titleService;
        this.collapse = true;
    }
    HeaderComponent.prototype.setTitle0 = function (newTitle) {
        this.titleService.setTitle("Interactive Calculators and Quizzes | Outgrow");
    };
    HeaderComponent.prototype.setTitle1 = function (newTitle) {
        this.titleService.setTitle("Why Interactive Content ? | Outgrow");
    };
    HeaderComponent.prototype.setTitle2 = function (newTitle) {
        this.titleService.setTitle("Product Features | Outgrow");
    };
    HeaderComponent.prototype.setTitle3 = function (newTitle) {
        this.titleService.setTitle("Pricing | Outgrow");
    };
    HeaderComponent.prototype.setTitle4 = function (newTitle) {
        this.titleService.setTitle("Examples | Outgrow");
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/privacy/privacy.component.css":
/***/ (function(module, exports) {

module.exports = "li{\r\n    list-style-type: disc;\r\n    height: 40px;\r\n    color:#62696d;\r\n}\r\n.p_lists{\r\ncolor:#62696d;\r\nfont-size:13px;\r\n}\r\np{\r\n    color: #FB757B\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/components/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n      <div class=\"col-lg-12\" style=\"text-align:center ; font-size:42px\">\n          <p>Privacy Policy</p>\n      </div>\n     \n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">Your Outgrow Account</p>\n      </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"color:#62696d;;font-size:13px\">If you create or take a calculator or interactive experience on the Outgrow site, you are fully responsible for all activities that occur under the account and any other actions taken in connection with your account. You must not use your account in a misleading or unlawful manner, including in a manner intended to trade on the name or reputation of others, and Outgrow may change content that it considers inappropriate or unlawful, or otherwise likely to cause Outgrow liability. You must immediately notify Outgrow of any unauthorized uses of your content, your account or any other breaches of security. Outgrow will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.</p>\n      </div>\n  </div>\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:14px\">If you create calculators or interactive experiences - i.e are a buyer of Outgrow services and use Outgrow to build calculators or interactive experiences that your customers, employees, users or other stakeholders take.</p>\n      </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <ul>\n              <li ><p class=\"p_lists\">Your calculator or interactive experience responses are owned by you. While Outgrow may use aggregate statistics and data to gain insight into the use of our product, we do not sell or provide the responses to anyone without your permission</p></li><br>\n              <li><p class=\"p_lists\">Your scores, leads, and offer data are owned by you. We do not use any of this data for ourselves or provide it to third parties. It is your responsibility to use this data according to the governing law and best practices of the Children’s Online Privacy Protection Act (COPPA) and Controlling the Assault of Non-Solicited Pornography and Marketing Acto of 2003 (CAN-SPAM). Outgrow is not responsible for your misuse of this information.</p></li><br>\n              <li><p class=\"p_lists\">We highly recommend that you clearly state that the calculator or interactive experience is providing an estimate.</p></li>\n          </ul>\n          \n      </div>\n  </div>\n\n\n  \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:14px\">If you create calculators or interactive experiences - i.e are a buyer of Outgrow services and use Outgrow to build calculators or interactive experiences that your customers, employees, users or other stakeholders take.</p>\n      </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <ul>\n              <li ><p class=\"p_lists\">Your responses are owned by the calculator or interactive experience creator. It is up to the calculator or interactive experience creator how they use these responses. All responses are anonymous unless you have provided your user data.</p></li><br>\n              <li><p class=\"p_lists\">You may be asked for your email address and/or other personally-identifying information in connection with tracking scores, capturing leads, or presenting offers. Outgrow does not use this information other than to display or provide it to the calculator or interactive experience creator.</p></li><br>\n\n          </ul>\n          \n      </div>\n  </div>\n\n\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">Your Content</p>\n      </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"color:#62696d;;font-size:13px\">You own the rights to the content you post on Outgrow. We do not claim ownership over it. However, by posting content to Outgrow, you give us permission to use your content, free of charge, to do the things we need to do to provide Outgrow Services which may include storing, displaying, reproducing, and distributing your content. By publishing on Outgrow, you agree to allow others to view your content. You are free to delete your content at any time. If you delete your account or content, it may be unrecoverable.</p>\n      <br>\n      <p style=\"color:#62696d;;font-size:13px\">Here are some things we forbid. By using Outgrow, you promise not to do any of the following things:</p>\n          <ul>\n              <li><p class=\"p_lists\">post any comments, material, links, text, images, audio, or video (any such material, “Content”) containing any viruses, worms, malware, Trojan horses or other harmful or destructive content;</p></li>\n              <li><p class=\"p_lists\">post Content without permission from the owner;</p></li>\n              <li><p class=\"p_lists\">post Content that is pornographic, contains threats, incites violence, or violates the rights of any third party.</p></li>\n              <li><p class=\"p_lists\">probe, scan, or test our systems or networks</p></li>\n              <li><p class=\"p_lists\">break or circumvent any technologies we have put in place for security or authentication;</p></li>\n              <li><p class=\"p_lists\">attempt to access Outgrow Services by means other than currently available;</p></li>\n              <li><p class=\"p_lists\">scrape Outgrow Services or Content;</p></li>\n              <li><p class=\"p_lists\">violate the intellectual property or personal privacy rights of others, causing harm to others, or violating any criminal laws where Outgrow has a physical location</p></li>\n\n          </ul>\n  </div>\n  </div>  \n\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">FEES, PAYMENTS & CANCELLATION POLICY</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">You agree to pay for the Services you use on the Outgrow Site in accordance the pricing and payment terms presented to you for that service. Fees paid by you are non-refundable.</p>\n          <p class=\"p_lists\">For subscriptions, you will be billed in advance on a recurring cycle for the period you have selected (monthly or annually or quarterly) at the beginning of that period. Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date.</p>\n          <p class=\"p_lists\">Outgrow may change the fees charged for Services at any time, provided that, for subscription Services, the change will become effective only upon the next renewal date.</p>\n      </div>\n  </div>\n\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">CANCELLATION POLICY</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date. If you decide to cancel, no refund will be provided for fees paid or past bills and your service will remain active through the end of the existing license period.</p>\n          <p class=\"p_lists\">At the end of the license period, you will no longer be charged. If you cancel within 48 hours of your next renewal date, the next renewal will go through but that will be your last renewal and the cancellation will take effect on the following renewal as it is required that you cancel at least 48 hours prior to the renewal date. Note: The length of your license can be longer than your billing period for example an annual license, billed semi-annually would mean that a cancellation on month 4 will take effect at the end of the annual license and the second semiannual bill on month 6 will continue as well as the remaining 8 months of the subscription.</p>\n\n      </div>\n  </div>\n\n  \n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">UPGRADES</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">A downgrade is when a paying customer chooses to change their plan from a more expensive to a less expensive (but still paid) plan.</p>\n          <p class=\"p_lists\">When downgrading in the middle of a billing period, your account downgrade will apply at the end of the period and to the following period but will not impact the existing billing period.</p>\n\n      </div>\n  </div>\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">DOWNGRADES</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">An upgrade is when a paying customer decides to change their current plan to a more expensive paid plan.</p>\n          <p class=\"p_lists\">When upgrading in the middle of a billing period, you will be given a pro-rated credit (not a refund) for the current plan which will be applied to the pro-rated charges for the upgraded plan. At the end of the billing period, the upgraded plan will auto-renew.</p>\n\n      </div>\n  </div>\n\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">THINGS THAT WE FORBID</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Here are some things we forbid. By using Outgrow, you promise not to do any of the following things; posting any comments, material, links, text, images, audio, or video (any such material, “Content”) containing any viruses, worms, malware, Trojan horses or other harmful or destructive content; posting Content without permission from the owner; posting Content that is pornographic, contains threats, incites violence, or violates the rights of any third party; probe, scan, or test our systems or networks; break or circumvent any technologies we have put in place for security or authentication; attempt to access Outgrow Services by means other than currently available; scrape Outgrow Services or Content; violating the intellectual property or personal privacy rights of others, causing harm to others, or violating any criminal laws where Outgrow has a physical location.</p>\n      </div>\n  </div>\n\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">RESPONSIBILITY OF VISITORS</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Outgrow has not reviewed, and cannot review, all of the material posted to the Site or any third party site that the Site links to, and cannot therefore be responsible for that material’s content, use or effects. By operating the Site, Outgrow does not represent or imply that it endorses the material there posted, or that it believes such material to be accurate, useful or non-harmful. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. The Site may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. The Site may also contain material that violates the privacy or publicity rights, or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. Outgrow disclaims any responsibility for any harm resulting from the use by visitors of the Site, or from any downloading by those visitors of content there posted.</p> \n      </div>\n  </div>\n\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:18px\">PRIVACY</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">If you’re outside the United States, you consent to the transfer, storage, and processing of your information – including but not limited to the content you posted or transferred to the site and any personal information – to and within the United States and other countries.</p> \n      </div>\n  </div>\n  <div class=\"row\"><p></p></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:13px\">Gathering of Personally-Identifying Information</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Certain visitors to Outgrow’s websites choose to interact with Outgrow in ways that require Outgrow to gather personally-identifying information. The amount and type of information that Outgrow gathers depends on the nature of the interaction. In each case, Outgrow collects such information only as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Outgrow. Outgrow does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.</p> \n      </div>\n  </div>\n\n  <div class=\"row\"><p></p></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:13px\">Aggregated Statistics</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Outgrow may collect statistics about the behavior of visitors to its websites. Outgrow may display this information publicly or provide it to others. However, Outgrow does not disclose personally-identifying information other than as described below.</p> \n      </div>\n  </div>\n\n  <div class=\"row\"><p></p></div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p style=\"font-size:13px\">Protection of Certain Personally-Identifying Information</p>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Outgrow discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Outgrow’s behalf or to provide services available at Outgrow’s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Outgrow’s websites, you consent to the transfer of such information to them. Outgrow will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above. Outgrow discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Outgrow believes in good faith that disclosure is reasonably necessary to protect the property or rights of Outgrow, third parties or the public at large. If you are a registered user of a Outgrow website and have supplied your email address, Outgrow may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with Outgrow and our products. We primarily use our various blogs to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Outgrow takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p> \n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(router, title) {
        title.setTitle("Privacy Policy | Outgrow");
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy',
            template: __webpack_require__("./src/app/shared/components/privacy/privacy.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/terms/terms.component.css":
/***/ (function(module, exports) {

module.exports = ".tos_head{\r\n    color: #FB757B;\r\n    font-size: 24px;\r\n}\r\n.tos_answers{\r\n    font-size: 13px;\r\n    color: #62696d;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"text-align:center ; font-size:42px\">\n      <p style=\"font-size:42px;color:#FB757B;\">Terms Of Services</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\"> TERMINATION OF SERVICES</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">Outgrow has the right to limit, suspend, or stop providing the Services to you if you fail to comply with these Terms.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\"> COPYRIGHT INFRINGEMENT AND DMCA POLICY</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">As Outgrow asks others to respect its intellectual property rights, it respects the intellectual property rights of\n        others. Outgrow deals with copyright infringement in accordance to the Digital Millennium Copyright Act. If you believe\n        that material located on or linked to by Outgrow.co violates your copyright, you are encouraged to notify Outgrow.\n        Outgrow will respond to all such notices, including as required or appropriate by removing the infringing material\n        or disabling all links to the infringing material. Outgrow will terminate a visitor’s access to and use of the Site\n        if, under appropriate circumstances, the visitor is determined to be a repeat infringer of the copyrights or other\n        intellectual property rights of Outgrow or others. In the case of such termination, Outgrow will have no obligation\n        to provide a refund of any amounts previously paid to Outgrow.</p>\n\n      <p class=\"tos_answers\">The contact information for Outgrow’s designated agent for receipt of notices of claimed infringement is - questions@outgrow.co.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">INTELLECTUAL PROPERTY</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">You retain ownership of all copyrights and any other intellectual property rights in your Content. Outgrow (and/or\n        other third parties) retains ownership of intellectual property rights in all content and material other than user\n        Content.</p>\n\n      <p class=\"tos_answers\">By submitting your Content to Outgrow, you give Outgrow a non-exclusive worldwide, royalty-free, sublicensable, transferable\n        license to utilize all copyright rights now in existence or that may arise in the future with respect to your Content,\n        in any medium that now exists or may arise in the future, as well as to do anything else that is reasonably appropriate\n        to our Services and its use of your Content (including, but not limited to, use of your name in association with\n        your Content to identify you as the contributor). The license has no restriction as to the medium, dissemination\n        method, type of Service we may offer, or the type of systems or products that may be used in conjunction with your\n        Content.</p>\n      <p class=\"tos_answers\">This license shall remain in effect for so long as your Content is available on Outgrow. You are free to remove or\n        delete your Content at any time, in which case this license shall terminate after a commercially reasonable period\n        of time, except for comments, the license to which is perpetual and irrevocable. You understand and agree, however,\n        that even if you delete Content, Outgrow may retain, but not display or distribute, server copies of your Content.</p>\n      <p class=\"tos_answers\">You represent that you have all of the necessary rights to grant this license to Outgrow for all Content you submit.</p>\n      <p class=\"tos_answers\">Outgrow grants you a worldwide, non-exclusive, non-sublicensable, and non-transferable license to download, store,\n        view, display, perform, redistribute, and create derivative works of Content solely in connection with your use of,\n        and in accordance with the Terms of, Outgrow Services.</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">DISCLAIMER OF WARRANTIES.</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">The Site is provided “as is”. Outgrow and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither Outgrow nor its suppliers and licensors, makes any warranty that the Site will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, the Site at your own discretion and risk.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">LIMITATION OF LIABILITY</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">In no event will Outgrow, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you to Outgrow under this agreement during the twelve (12) month period prior to the cause of action. Outgrow shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">GENERAL REPRESENTATION AND WARRANTY</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">You represent and warrant that (i) your use of the Site will be in strict accordance with the privacy section, with this Agreement and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside) and (ii) your use of the Site will not infringe or misappropriate the intellectual property rights of any third party.</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">INDEMNIFICATION</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">You agree to indemnify and hold harmless Outgrow, its contractors, and its licensors, and their respective directors, officers, employees and agents from and against any and all claims and expenses, including attorneys’ fees, arising out of your use of the Site, including but not limited to your violation of this Agreement.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">THIS IS A BINDING AGREEMENT</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">By accessing or using any part of the web site, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access the Site or use any services. If these terms and conditions are considered an offer by Outgrow, acceptance is expressly limited to these terms.</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <br>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">WE CAN CHANGE OUR SERVICES</p>\n    </div>\n  </div>\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">We may change any aspect of the service we want, or even stop it, at any time without giving you notice. We can also terminate or restrict access to it at any time, in our sole discretion. Termination of your access and use of Outgrow Services shall not relieve you of any obligations arising or accruing before the termination.</p>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n      <br>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_head\">FEES, PAYMENTS & CANCELLATION POLICY</p>\n      </div>\n    </div>\n    <div class=\"row\"></div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_answers\">You agree to pay for the Services you use on the Outgrow Site in accordance the pricing and payment terms presented to you for that service. Fees paid by you are non-refundable.</p>\n        <p class=\"tos_answers\">For subscriptions, you will be billed in advance on a recurring cycle for the period you have selected (monthly or annually or quarterly) at the beginning of that period. Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date.</p>\n        <p class=\"tos_answers\">Outgrow may change the fees charged for Services at any time, provided that, for subscription Services, the change will become effective only upon the next renewal date.</p>\n\n      </div>\n    </div>\n\n    <div class=\"row\">\n        <br>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p class=\"tos_head\">CANCELLATION POLICY</p>\n        </div>\n      </div>\n      <div class=\"row\"></div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p class=\"tos_answers\">Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date. If you decide to cancel, no refund will be provided for fees paid or past bills and your service will remain active through the end of the existing license period.</p>\n          <p class=\"tos_answers\">At the end of the license period, you will no longer be charged. If you cancel within 48 hours of your next renewal date, the next renewal will go through but that will be your last renewal and the cancellation will take effect on the following renewal as it is required that you cancel at least 48 hours prior to the renewal date. Note: The length of your license can be longer than your billing period for example an annual license, billed semi-annually would mean that a cancellation on month 4 will take effect at the end of the annual license and the second semiannual bill on month 6 will continue as well as the remaining 8 months of the subscription.</p>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n          <br>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <p class=\"tos_head\">UPGRADES</p>\n          </div>\n        </div>\n        <div class=\"row\"></div>\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <p class=\"tos_answers\">An upgrade is when a paying customer decides to change their current plan to a more expensive paid plan.</p>\n            <p class=\"tos_answers\">When upgrading in the middle of a billing period, you will be given a pro-rated credit (not a refund) for the current plan which will be applied to the pro-rated charges for the upgraded plan. At the end of the billing period, the upgraded plan will auto-renew.</p>\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n            <br>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <p class=\"tos_head\">DOWNGRADES</p>\n            </div>\n          </div>\n          <div class=\"row\"></div>\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <p class=\"tos_answers\">A downgrade is when a paying customer chooses to change their plan from a more expensive to a less expensive (but still paid) plan.</p>\n              <p class=\"tos_answers\">When downgrading in the middle of a billing period, your account downgrade will apply at the end of the period and to the following period but will not impact the existing billing period.</p>      \n            </div>\n          </div>\n  \n\n\n\n\n\n\n  <div class=\"row\">\n      <br>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_head\">MISCELLANEOUS</p>\n      </div>\n    </div>\n    <div class=\"row\"></div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_answers\">This Agreement constitutes the entire agreement between Outgrow and you concerning the subject matter hereof, and they may only be modified by a written amendment signed by an authorized executive of Outgrow, or by the posting by Outgrow of a revised version. Except to the extent applicable law, if any, provides otherwise, this Agreement, any access to or use of the Site will be governed by the laws of the state of Delaware, U.S.A. Except for claims for injunctive or equitable relief or claims regarding intellectual property rights (which may be brought in any competent court without the posting of a bond), any dispute arising under this Agreement shall be finally settled in accordance with the Comprehensive Arbitration Rules of the Judicial Arbitration and Mediation Service, Inc. (“JAMS”) by three arbitrators appointed in accordance with such Rules. The arbitration shall take place in Delaware, in the English language and the arbitral decision may be enforced in any court. The prevailing party in any action or proceeding to enforce this Agreement shall be entitled to costs and attorneys’ fees. If any part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the parties’ original intent, and the remaining portions will remain in full force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. You may assign your rights under this Agreement to any party that consents to, and agrees to be bound by, its terms and conditions; Outgrow may assign its rights under this Agreement without condition. This Agreement will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.</p>\n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/components/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsComponent = /** @class */ (function () {
    function TermsComponent(router, title) {
        title.setTitle("Terms Of Services | Outgrow");
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-terms',
            template: __webpack_require__("./src/app/shared/components/terms/terms.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Title */]])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/script.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Script; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_store__ = __webpack_require__("./src/app/shared/services/script.store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Script = /** @class */ (function () {
    function Script() {
        var _this = this;
        this.scripts = {};
        __WEBPACK_IMPORTED_MODULE_1__script_store__["a" /* ScriptStore */].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    Script.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    Script.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    Script.prototype.runScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            jQuery.getScript(_this.scripts[name].src)
                .then(function (data) {
                resolve([{ script: name, loaded: true, status: 'Loaded' }]);
            });
        });
    };
    Script.prototype.loadScriptFromSrc = function (src) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = src;
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState === "loaded" || script.readyState === "complete") {
                        script.onreadystatechange = null;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    }
                };
            }
            else {
                script.onload = function () {
                    resolve({ script: name, loaded: true, status: 'Loaded' });
                };
            }
            script.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    };
    Script = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Script);
    return Script;
}());



/***/ }),

/***/ "./src/app/shared/services/script.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptStore; });
var ScriptStore = [
    { name: 'animated', src: '../../assets/js/animated-masonry-gallery.js' },
    { name: 'countid', src: '../../assets/js/countid.js' },
    { name: 'countidMin', src: '../../assets/js/countid.min.js' },
    { name: 'css3Animate', src: '../../assets/js/css3-animate-it.js' },
    { name: 'footer', src: '../../assets/js/footer.js' },
    { name: 'iloaderBackup', src: '../../assets/js/iloader_backup.js' },
    { name: 'iloaderBackup1', src: '../../assets/js/iloader_backup1.js' },
    { name: 'iloader', src: '../../assets/js/iloader.js' },
    { name: 'iloader1', src: '../../assets/js/iloader1.js' },
    { name: 'iloadertest', src: '../../assets/js/iloadertest.js' },
    { name: 'jquery_2', src: '../../assets/js/jquery-2.2.4.min.js' },
    { name: 'jquerycad0', src: '../../assets/js/jquerycad0.js' },
    { name: 'jssor', src: '../../assets/js/jssor.min.js' },
    { name: 'jssor_slider', src: '../../assets/js/jssor.slider-26.7.0.min.js' },
    { name: 'loader_backup', src: '../../assets/js/loader_backup.js' },
    { name: 'loader', src: '../../assets/js/loader.js' },
    { name: 'loader1', src: '../../assets/js/loader1.js' },
    { name: 'marketing', src: '../../assets/js/marketing.js' },
    { name: 'n0loader', src: '../../assets/js/nloader.js' },
    { name: 'plans', src: '../../assets/js/plans.js' },
    { name: 'ploader', src: '../../assets/js/ploader.js' },
    { name: 'radial-progress-bar', src: '../../assets/js/radial-progress-bar.js' },
    { name: 'scripts', src: '../../assets/js/scripts.js' },
    { name: 'site', src: '../../assets/js/site.min.js' },
    { name: 'slick', src: '../../assets/js/slick.js' },
    { name: 'swiper', src: '../../assets/js/swiper.min.js' },
    { name: 'example', src: '../../assets/js/pageScripts/example.js' },
    { name: 'features', src: '../../assets/js/pageScripts/features.js' },
    { name: 'footer1', src: '../../assets/js/pageScripts/footer.js' },
    { name: 'idea-gen', src: '../../assets/js/pageScripts/idea-gen.js' },
    { name: 'index', src: '../../assets/js/pageScripts/index.js' },
    { name: 'pricing_ltd', src: '../../assets/js/pageScripts/pricing-ltd.js' },
    { name: 'pricing', src: '../../assets/js/pageScripts/pricing.js' },
    { name: 'iloader2', src: '../../assets/js/loader/iloader.js' },
    { name: 'iloader3', src: '../../assets/js/loader/iloader1.js' },
    { name: 'n1loader', src: '../../assets/js/loader/nloader.js' },
    { name: 'resizer', src: '../../assets/js/loader/resizer.js' },
    { name: 'sloader', src: '../../assets/js/loader/sloader.js' },
    { name: 'build', src: '../../assets/js/ideagen/build.js' },
    { name: 'database_sheet', src: '../../assets/js/ideagen/database.sheetjs' },
    { name: 'mouse_parallax', src: '../../assets/js/ideagen/mouse.parallax.js' },
    { name: 'owl_carousel', src: '../../assets/js/ideagen/owl.carousel.js' },
    { name: 'request_sheet', src: '../../assets/js/ideagen/request.sheet.js' },
    { name: 'selectize', src: '../../assets/js/ideagen/selectize.min.js' },
    { name: 'validation', src: '../../assets/js/ideagen/validation.js' },
    { name: 'iloader4', src: '../../assets/js/fullscreen/iloader.js' },
    { name: 'n2loader', src: '../../assets/js/fullscreen/nloader.js' },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map