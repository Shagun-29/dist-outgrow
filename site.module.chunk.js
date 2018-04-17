webpackJsonp(["site.module"],{

/***/ "./src/app/site/site.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteModule", function() { return SiteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_video_url_service__ = __webpack_require__("./src/app/shared/services/video-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_routing__ = __webpack_require__("./src/app/site/site.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SiteModule = /** @class */ (function () {
    function SiteModule() {
    }
    SiteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__site_routing__["a" /* routes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__shared_services_video_url_service__["a" /* VideoUrlService */]
            ],
            declarations: []
        })
    ], SiteModule);
    return SiteModule;
}());



/***/ }),

/***/ "./src/app/site/site.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [
    { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' },
    { path: 'why-interactive', loadChildren: './why-interactive/why-interactive.module#WhyInteractiveModule' }
];
// export const routing: ModuleWithProviders = RouterModule.forChild(routes);


/***/ })

});
//# sourceMappingURL=site.module.chunk.js.map