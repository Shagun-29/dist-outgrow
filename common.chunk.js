webpackJsonp(["common"],{

/***/ "./src/app/shared/services/video-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoUrlService; });
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

var VideoUrlService = /** @class */ (function () {
    function VideoUrlService() {
    }
    VideoUrlService.prototype.videoURL = function (type, frame) {
        if (type == "a") {
            // this.video = document.getElementById("frame1");
            console.log(frame.src);
            frame.src = "http://website.outgrow.us/build-a-startup?vHeight=1";
        }
        else if (type == "b") {
            frame.src = "http://website.outgrow.us/Which-engineering-major-is-right-for-you?vHeight=1";
        }
        else if (type == "c") {
            frame.src = "http://website.outgrow.us/Cost-of-a-video-campaign-4?vHeight=1";
        }
        else if (type == "d") {
            frame.src = "http://website.outgrow.us/What-is-your-risk-of-getting-a-heart-disease?vHeight=1";
        }
        else if (type == "e") {
            frame.src = "http://website.outgrow.us/outgrow-roi?vHeight=1";
        }
        else if (type == "f") {
            frame.src = "http://website.outgrow.us/build-an-app?vHeight=1";
        }
    };
    VideoUrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], VideoUrlService);
    return VideoUrlService;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map