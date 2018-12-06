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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _common_AuthGaurdService_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/AuthGaurdService/auth-gaurd.service */ "./src/app/common/AuthGaurdService/auth-gaurd.service.ts");
/* harmony import */ var _manage_spot_instances_manage_spot_instances_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-spot-instances/manage-spot-instances.component */ "./src/app/manage-spot-instances/manage-spot-instances.component.ts");
/* harmony import */ var _spot_request_predictor_spot_request_predictor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spot-request-predictor/spot-request-predictor.component */ "./src/app/spot-request-predictor/spot-request-predictor.component.ts");
/* harmony import */ var _dashboard_summary_dashboard_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-summary/dashboard-summary.component */ "./src/app/dashboard-summary/dashboard-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: '',
                redirectTo: 'manageSpotInstances',
                pathMatch: 'full'
            },
            {
                path: 'manageSpotInstances',
                component: _manage_spot_instances_manage_spot_instances_component__WEBPACK_IMPORTED_MODULE_5__["ManageSpotInstancesComponent"]
            },
            {
                path: 'spotInstancePredictor',
                component: _spot_request_predictor_spot_request_predictor_component__WEBPACK_IMPORTED_MODULE_6__["SpotRequestPredictorComponent"]
            },
            {
                path: 'dashBoardSummary',
                component: _dashboard_summary_dashboard_summary_component__WEBPACK_IMPORTED_MODULE_7__["DashboardSummaryComponent"]
            }
        ],
        canActivate: [_common_AuthGaurdService_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_4__["AuthGaurdService"]]
    },
    {
        path: '**',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-title-bar></app-title-bar>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Spotify';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _title_bar_title_bar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./title-bar/title-bar.module */ "./src/app/title-bar/title-bar.module.ts");
/* harmony import */ var _side_bar_side_bar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-bar/side-bar.module */ "./src/app/side-bar/side-bar.module.ts");
/* harmony import */ var _manage_spot_instances_manage_spot_instances_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage-spot-instances/manage-spot-instances.module */ "./src/app/manage-spot-instances/manage-spot-instances.module.ts");
/* harmony import */ var _spot_request_predictor_spot_request_predictor_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spot-request-predictor/spot-request-predictor.module */ "./src/app/spot-request-predictor/spot-request-predictor.module.ts");
/* harmony import */ var _dashboard_summary_dashboard_summary_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard-summary/dashboard-summary.module */ "./src/app/dashboard-summary/dashboard-summary.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_3__["LoginModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"],
                _title_bar_title_bar_module__WEBPACK_IMPORTED_MODULE_10__["TitleBarModule"],
                _side_bar_side_bar_module__WEBPACK_IMPORTED_MODULE_11__["SideBarModule"],
                _spot_request_predictor_spot_request_predictor_module__WEBPACK_IMPORTED_MODULE_13__["SpotRequestPredictorModule"],
                _manage_spot_instances_manage_spot_instances_module__WEBPACK_IMPORTED_MODULE_12__["ManageSpotInstancesModule"],
                _dashboard_summary_dashboard_summary_module__WEBPACK_IMPORTED_MODULE_14__["DashboardSummaryModule"],
            ],
            providers: [
                _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/AuthGaurdService/auth-gaurd.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/AuthGaurdService/auth-gaurd.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _RootService_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RootService/root.service */ "./src/app/common/RootService/root.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(rootService, router) {
        this.rootService = rootService;
        this.router = router;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        if (this.rootService.loginSuccessfull) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_RootService_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/app/common/LoggerService/logger.service.ts":
/*!********************************************************!*\
  !*** ./src/app/common/LoggerService/logger.service.ts ***!
  \********************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.info = function (message) {
        console.info(message);
    };
    LoggerService.prototype.debug = function (message) {
        console.debug(message);
    };
    LoggerService.prototype.warn = function (message) {
        console.warn(message);
    };
    LoggerService.prototype.error = function (message) {
        console.error(message);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/common/RootService/root.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/RootService/root.service.ts ***!
  \****************************************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootService = /** @class */ (function () {
    function RootService() {
    }
    RootService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RootService);
    return RootService;
}());



/***/ }),

/***/ "./src/app/custom-material/custom-material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/custom-material/custom-material.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]
            ],
            declarations: [],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/dashboard-summary/dashboard-summary.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-summary/dashboard-summary.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-summary/dashboard-summary.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard-summary/dashboard-summary.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard-summary works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard-summary/dashboard-summary.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-summary/dashboard-summary.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSummaryComponent", function() { return DashboardSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardSummaryComponent = /** @class */ (function () {
    function DashboardSummaryComponent() {
    }
    DashboardSummaryComponent.prototype.ngOnInit = function () {
    };
    DashboardSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-summary',
            template: __webpack_require__(/*! ./dashboard-summary.component.html */ "./src/app/dashboard-summary/dashboard-summary.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-summary.component.css */ "./src/app/dashboard-summary/dashboard-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardSummaryComponent);
    return DashboardSummaryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-summary/dashboard-summary.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-summary/dashboard-summary.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardSummaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSummaryModule", function() { return DashboardSummaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-summary.component */ "./src/app/dashboard-summary/dashboard-summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardSummaryModule = /** @class */ (function () {
    function DashboardSummaryModule() {
    }
    DashboardSummaryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_dashboard_summary_component__WEBPACK_IMPORTED_MODULE_2__["DashboardSummaryComponent"]]
        })
    ], DashboardSummaryModule);
    return DashboardSummaryModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\n  <mat-drawer-container class=\"sidebar-style\" [hasBackdrop]=\"false\" disableClose>\n    <div>\n  <app-side-bar></app-side-bar>\n    </div>\n  <div class=\"router-outlet-style\">\n    <router-outlet></router-outlet>\n  </div>\n  </mat-drawer-container>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(log) {
        this.log = log;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.log.debug('Dashboard Loaded!!!');
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _side_bar_side_bar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../side-bar/side-bar.module */ "./src/app/side-bar/side-bar.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
                _side_bar_side_bar_module__WEBPACK_IMPORTED_MODULE_4__["SideBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
            ],
            exports: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n\n<mat-card class=\"login-card\">\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\" [formGroup]=\"loginForm\">\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Username\" formControlName=\"username\" name=\"username\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" name=\"password\"\n                     required>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n    </form>\n    <!--<mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>-->\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"loginUser()\" color=\"primary\">Login</button>\n  </mat-card-actions>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_LoginModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/LoginModel */ "./src/app/models/LoginModel.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/RootService/root.service */ "./src/app/common/RootService/root.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, log, router, rootService) {
        this.loginService = loginService;
        this.log = log;
        this.router = router;
        this.rootService = rootService;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: this.username,
            password: this.password
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.log.debug('Login button clicked');
        this.log.debug('Username : ' + this.username.value);
        this.log.debug('Password : ' + this.password.value);
        var msg = new _models_LoginModel__WEBPACK_IMPORTED_MODULE_2__["LoginModel"]();
        msg.userName = this.username.value;
        msg.password = this.password.value;
        this.loginService.loginUser(msg)
            .then(function (resp) {
            _this.log.debug('Success Response from Login Request');
            _this.log.debug(resp);
            var data = resp;
            _this.log.debug(data.isValidUser);
            _this.log.debug(data);
            if (data.isValidUser) {
                _this.rootService.loginSuccessfull = true;
                _this.log.debug('Redirecting to Dashboard');
                _this.router.navigate(['/dashboard']);
            }
        })
            .catch(function (err) {
            _this.log.debug('Error Response from Login Request');
            _this.log.debug(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
            exports: [
                _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            ],
            providers: [
                _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.loginUser = function (msg) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/rest/user/login';
        console.log(JSON.stringify(msg));
        return this.http.post(url, msg).toPromise();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/manage-spot-instances/manage-spot-instances.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/manage-spot-instances/manage-spot-instances.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manage-spot-instances/manage-spot-instances.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/manage-spot-instances/manage-spot-instances.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  manage-spot-instances works!\n</p>\n"

/***/ }),

/***/ "./src/app/manage-spot-instances/manage-spot-instances.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/manage-spot-instances/manage-spot-instances.component.ts ***!
  \**************************************************************************/
/*! exports provided: ManageSpotInstancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSpotInstancesComponent", function() { return ManageSpotInstancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageSpotInstancesComponent = /** @class */ (function () {
    function ManageSpotInstancesComponent() {
    }
    ManageSpotInstancesComponent.prototype.ngOnInit = function () {
    };
    ManageSpotInstancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-spot-instances',
            template: __webpack_require__(/*! ./manage-spot-instances.component.html */ "./src/app/manage-spot-instances/manage-spot-instances.component.html"),
            styles: [__webpack_require__(/*! ./manage-spot-instances.component.css */ "./src/app/manage-spot-instances/manage-spot-instances.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageSpotInstancesComponent);
    return ManageSpotInstancesComponent;
}());



/***/ }),

/***/ "./src/app/manage-spot-instances/manage-spot-instances.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/manage-spot-instances/manage-spot-instances.module.ts ***!
  \***********************************************************************/
/*! exports provided: ManageSpotInstancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSpotInstancesModule", function() { return ManageSpotInstancesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-spot-instances.component */ "./src/app/manage-spot-instances/manage-spot-instances.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManageSpotInstancesModule = /** @class */ (function () {
    function ManageSpotInstancesModule() {
    }
    ManageSpotInstancesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_manage_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__["ManageSpotInstancesComponent"]]
        })
    ], ManageSpotInstancesModule);
    return ManageSpotInstancesModule;
}());



/***/ }),

/***/ "./src/app/models/LoginModel.ts":
/*!**************************************!*\
  !*** ./src/app/models/LoginModel.ts ***!
  \**************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <mat-drawer #drawer opened=\"\">\n    <mat-list>\n      <mat-list-item (click)=\"toggleTimeline(1)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>DashBoard</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(2)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Manage Spot Instances</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(3)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Spot Request Predictor</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(4)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Schedule Spot Requests</h3>\n      </mat-list-item>\n    </mat-list>\n  </mat-drawer>\n  <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n\n"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(log, router) {
        this.log = log;
        this.router = router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.toggleTimeline = function (id) {
        this.log.debug('ID Pressed :' + id);
        switch (id) {
            case 1:
                this.router.navigate(['/dashboard/dashBoardSummary']);
                break;
            case 2:
                this.router.navigate(['/dashboard/manageSpotInstances']);
                break;
            case 3:
                this.router.navigate(['/dashboard/spotInstancePredictor']);
                break;
            case 4:
                this.router.navigate(['/dashboard/scheduleSpotRequests']);
                break;
            default:
                return;
        }
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/side-bar/side-bar.module.ts ***!
  \*********************************************/
/*! exports provided: SideBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarModule", function() { return SideBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SideBarModule = /** @class */ (function () {
    function SideBarModule() {
    }
    SideBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_2__["CustomMaterialModule"]
            ],
            declarations: [
                _side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"]
            ],
            exports: [
                _side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"]
            ]
        })
    ], SideBarModule);
    return SideBarModule;
}());



/***/ }),

/***/ "./src/app/spot-request-predictor/spot-request-predictor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/spot-request-predictor/spot-request-predictor.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spot-request-predictor/spot-request-predictor.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/spot-request-predictor/spot-request-predictor.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  spot-request-predictor works!\n</p>\n"

/***/ }),

/***/ "./src/app/spot-request-predictor/spot-request-predictor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/spot-request-predictor/spot-request-predictor.component.ts ***!
  \****************************************************************************/
/*! exports provided: SpotRequestPredictorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotRequestPredictorComponent", function() { return SpotRequestPredictorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpotRequestPredictorComponent = /** @class */ (function () {
    function SpotRequestPredictorComponent() {
    }
    SpotRequestPredictorComponent.prototype.ngOnInit = function () {
    };
    SpotRequestPredictorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spot-request-predictor',
            template: __webpack_require__(/*! ./spot-request-predictor.component.html */ "./src/app/spot-request-predictor/spot-request-predictor.component.html"),
            styles: [__webpack_require__(/*! ./spot-request-predictor.component.css */ "./src/app/spot-request-predictor/spot-request-predictor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpotRequestPredictorComponent);
    return SpotRequestPredictorComponent;
}());



/***/ }),

/***/ "./src/app/spot-request-predictor/spot-request-predictor.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/spot-request-predictor/spot-request-predictor.module.ts ***!
  \*************************************************************************/
/*! exports provided: SpotRequestPredictorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotRequestPredictorModule", function() { return SpotRequestPredictorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _spot_request_predictor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-request-predictor.component */ "./src/app/spot-request-predictor/spot-request-predictor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpotRequestPredictorModule = /** @class */ (function () {
    function SpotRequestPredictorModule() {
    }
    SpotRequestPredictorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_spot_request_predictor_component__WEBPACK_IMPORTED_MODULE_2__["SpotRequestPredictorComponent"]]
        })
    ], SpotRequestPredictorModule);
    return SpotRequestPredictorModule;
}());



/***/ }),

/***/ "./src/app/title-bar/title-bar.component.css":
/*!***************************************************!*\
  !*** ./src/app/title-bar/title-bar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/title-bar/title-bar.component.html":
/*!****************************************************!*\
  !*** ./src/app/title-bar/title-bar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>Schedule Spot Instances</mat-card>\n<mat-divider></mat-divider>\n"

/***/ }),

/***/ "./src/app/title-bar/title-bar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/title-bar/title-bar.component.ts ***!
  \**************************************************/
/*! exports provided: TitleBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBarComponent", function() { return TitleBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleBarComponent = /** @class */ (function () {
    function TitleBarComponent() {
    }
    TitleBarComponent.prototype.ngOnInit = function () {
    };
    TitleBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-bar',
            template: __webpack_require__(/*! ./title-bar.component.html */ "./src/app/title-bar/title-bar.component.html"),
            styles: [__webpack_require__(/*! ./title-bar.component.css */ "./src/app/title-bar/title-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleBarComponent);
    return TitleBarComponent;
}());



/***/ }),

/***/ "./src/app/title-bar/title-bar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/title-bar/title-bar.module.ts ***!
  \***********************************************/
/*! exports provided: TitleBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBarModule", function() { return TitleBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _title_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title-bar.component */ "./src/app/title-bar/title-bar.component.ts");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TitleBarModule = /** @class */ (function () {
    function TitleBarModule() {
    }
    TitleBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"]
            ],
            declarations: [
                _title_bar_component__WEBPACK_IMPORTED_MODULE_2__["TitleBarComponent"]
            ],
            exports: [
                _title_bar_component__WEBPACK_IMPORTED_MODULE_2__["TitleBarComponent"]
            ]
        })
    ], TitleBarModule);
    return TitleBarModule;
}());



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
    production: false, baseUrl: '/spot'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /home/premb/Hackriti/SPINUT_MASTER/ScheduleSpot/Spotify/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map