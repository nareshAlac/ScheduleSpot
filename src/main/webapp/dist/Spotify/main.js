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
/* harmony import */ var _schedule_spot_instances_schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule-spot-instances/schedule-spot-instances.component */ "./src/app/schedule-spot-instances/schedule-spot-instances.component.ts");
<<<<<<< Updated upstream
/* harmony import */ var _signout_signout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signout/signout.component */ "./src/app/signout/signout.component.ts");
=======
>>>>>>> Stashed changes
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
                redirectTo: 'dashBoardSummary',
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
            },
            {
                path: 'scheduleSpotInstances',
                component: _schedule_spot_instances_schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleSpotInstancesComponent"]
<<<<<<< Updated upstream
            },
            {
                path: 'signout',
                component: _signout_signout_component__WEBPACK_IMPORTED_MODULE_9__["SignoutComponent"]
=======
>>>>>>> Stashed changes
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
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

module.exports = "<app-title-bar></app-title-bar>\n<router-outlet></router-outlet>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-circus\">\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n<mat-divider></mat-divider>\n<div style=\"margin-left: 40%;font-size: small\">\n  <footer>\n    <em>© Copyright 2018 Alacriti, Inc. All Rights Reserved.</em>\n  </footer>\n</div>\n\n"

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
/* harmony import */ var _schedule_spot_instances_schedule_spot_instances_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schedule-spot-instances/schedule-spot-instances.module */ "./src/app/schedule-spot-instances/schedule-spot-instances.module.ts");
<<<<<<< Updated upstream
/* harmony import */ var _signout_signout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signout/signout.module */ "./src/app/signout/signout.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
=======
>>>>>>> Stashed changes
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                _schedule_spot_instances_schedule_spot_instances_module__WEBPACK_IMPORTED_MODULE_15__["ScheduleSpotInstancesModule"],
                _signout_signout_module__WEBPACK_IMPORTED_MODULE_16__["SignoutModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"]
=======
                _schedule_spot_instances_schedule_spot_instances_module__WEBPACK_IMPORTED_MODULE_15__["ScheduleSpotInstancesModule"]
>>>>>>> Stashed changes
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

/***/ "./src/app/common/LookUpRequestService/lookup-request.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/LookUpRequestService/lookup-request.service.ts ***!
  \***********************************************************************/
/*! exports provided: LookupRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupRequestService", function() { return LookupRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
/* harmony import */ var _models_errorcodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/errorcodes */ "./src/app/models/errorcodes.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LookupRequestService = /** @class */ (function () {
    function LookupRequestService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.handlerNameList = [];
        this.lookupEventData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
    }
    LookupRequestService.prototype.getEvents = function (msg) {
        var _this = this;
        var resultData;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + 'a';
        this.http.post(url, msg).subscribe(function (data) {
            resultData = data;
            if (resultData.errorCodes !== undefined) {
                /** this.alertService.handleBackenedErrors(resultData.errorCodes) ;*/
            }
            else if (resultData.eventList.length <= 0) {
                var errorCode = new _models_errorcodes__WEBPACK_IMPORTED_MODULE_4__["Errorcodes"]();
                errorCode.code = 1010;
                errorCode.msg = 'No Record Found for this search criteria';
                /** //this.resultsTableService.displayTable.next(false) ;*/
            }
            else {
                /** //this.resultsTableService.resultsdata.next(resultData.eventList);*/
                /** //this.resultsTableService.displayTable.next(true);*/
                _this.handlerNameList = resultData.handlerList;
            }
        });
    };
    LookupRequestService.prototype.getEventList = function (msg) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + '/rest/spot/getrequestlist';
        return this.http.post(url, msg).toPromise();
    };
    LookupRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
    ], LookupRequestService);
    return LookupRequestService;
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
<<<<<<< Updated upstream
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
=======
>>>>>>> Stashed changes
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
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
<<<<<<< Updated upstream
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"]
=======
>>>>>>> Stashed changes
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

module.exports = ".cta-button-primary.th {\n  font-size: medium;\n  font-weight: bold;\n}\n.mat-table {\n  display: table;\n  width:100%;\n  background: #FFFCF3;\n  padding-bottom: 10px;\n}\n.mat-header-row {\n  display: flex;\n  vertical-align: middle;\n  text-align: center;\n  background: rgba(237, 171, 20, 0.53);\n  line-: 20px;\n}\n.mat-header-cell {\n  font-size: small;\n  font-weight: bold;\n}\nmat-cell, mat-footer-cell, mat-header-cell {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  width: 17px;\n  padding-left: 15px;\n  margin-left: 12px;\n}\n.get-details-btn-primary {\n  background-color: #4bb08b;\n  box-shadow: 0 2px 1px -1px rgba(66,133,244,.2), 0 1px 1px 0 rgba(66,133,244,.14), 0 1px 3px 0 rgba(66,133,244,.12);\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/dashboard-summary/dashboard-summary.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard-summary/dashboard-summary.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"searchResults\">\n  <h2 class=\"mat-h2\">Configured Spot Requests</h2>\n  <div class=\"searchtable mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\">\n      <div *ngFor=\"let col of displayedColumns;let i = index\">\n        <ng-container matColumnDef={{col}}>\n          <mat-header-cell *matHeaderCellDef>\n            <div [innerHtml]=\"col\" class=\"mat-header-cell\">\n            </div>\n          </mat-header-cell>\n          <div *ngIf=\"col==='Actions'\">\n            <mat-cell *matCellDef=\"let element\" (click)=\"redirectToLogDetails(element.eventLogId);\">\n              <button  name=\"getDetails\" mat-raised-button class=\"cta-button-primary\">Details</button>\n            </mat-cell>\n          </div>\n          <div *ngIf=\"col!='Action'\">\n            <mat-cell *matCellDef=\"let element\">\n              <div>\n                {{element[col]}}\n              </div>\n            </mat-cell>\n          </div>\n        </ng-container>\n      </div>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator id=\"paginator\" #paginator [length]=\"20\" [pageSize]=\"5\" [pageSizeOptions]=\"[2, 5, 10]\">\n    </mat-paginator>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/RootService/root.service */ "./src/app/common/RootService/root.service.ts");
/* harmony import */ var _common_LookUpRequestService_lookup_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/LookUpRequestService/lookup-request.service */ "./src/app/common/LookUpRequestService/lookup-request.service.ts");
/* harmony import */ var _models_BaseModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/BaseModel */ "./src/app/models/BaseModel.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
    function DashboardSummaryComponent(log, router, rootService, lookupRequestService, spinner) {
        this.log = log;
        this.router = router;
        this.rootService = rootService;
        this.lookupRequestService = lookupRequestService;
        this.spinner = spinner;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
    }
    DashboardSummaryComponent.prototype.ngOnInit = function () {
        this.log.debug('ngOnInit ****** LookupLogsSearchResultTableComponent');
        this.log.debug(this.eventSearchResultData);
        this.dataSource.paginator = this.paginator;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.getEventLogsList();
    };
    DashboardSummaryComponent.prototype.assignPagination = function () {
        this.dataSource.paginator = this.paginator;
    };
    DashboardSummaryComponent.prototype.initalizeLookUpEventLogsData = function () {
        if (this.eventSearchResultData.length > 0) {
            this.dataSource.data = new Array();
            this.gridDefinitionList = ['S.No', 'AMI ID', 'Instance Type', 'Security Group', 'No .of Instances'];
        }
        this.displayedColumns = new Array();
        for (var _i = 0, _a = this.gridDefinitionList; _i < _a.length; _i++) {
            var grid = _a[_i];
            this.displayedColumns.push(grid);
        }
        // this.dataSource = this.resultsTableService.resultsdata;
        var count = 0;
        for (var _b = 0, _c = this.eventSearchResultData; _b < _c.length; _b++) {
            var result = _c[_b];
            var rowEntry = {
                key: '',
                value: ''
            };
            rowEntry['S.No'] = ++count;
            rowEntry['AMI ID'] = result.amiId;
            rowEntry['Instance Type'] = result.instanceType;
            rowEntry['Security Group'] = result.securityGroup;
            rowEntry['No .of Instances'] = result.numOfInstances;
            this.dataSource.data.push(rowEntry);
        }
    };
    DashboardSummaryComponent.prototype.redirectToLogDetails = function (eventLogId) {
        this.log.debug('redirectToLogDetails : ' + eventLogId);
        this.router.navigate(['/userHome/lookup-event-logs-details', eventLogId]);
    };
    DashboardSummaryComponent.prototype.getEventLogsList = function () {
        var _this = this;
        var msg = new _models_BaseModel__WEBPACK_IMPORTED_MODULE_6__["BaseModel"]();
        msg.userId = this.rootService.userId;
        this.spinner.show();
        this.lookupRequestService.getEventList(msg).then(function (resp) {
            _this.log.debug('Response for getEventLogsList');
            _this.log.debug(resp);
            _this.spinner.hide();
            var data = resp;
            _this.log.debug(data);
            /**if (data.errorCodes != null && data.errorCodes !== undefined) {
              this.alertService.handleBackenedErrors(data.errorCodes);
            } else {*/
            _this.eventSearchResultData = data;
            _this.initalizeLookUpEventLogsData();
            _this.assignPagination();
            /** }*/
        }).catch(function (err) {
            _this.log.debug(err);
            _this.router.navigate(['/userHome/access-denied']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DashboardSummaryComponent.prototype, "paginator", void 0);
    DashboardSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-summary',
            template: __webpack_require__(/*! ./dashboard-summary.component.html */ "./src/app/dashboard-summary/dashboard-summary.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-summary.component.css */ "./src/app/dashboard-summary/dashboard-summary.component.css")]
        }),
        __metadata("design:paramtypes", [_common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"], _common_LookUpRequestService_lookup_request_service__WEBPACK_IMPORTED_MODULE_5__["LookupRequestService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
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
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
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
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"]
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

module.exports = "<div class=\"dashboard\">\n  <mat-drawer-container style=\"overflow: initial\" class=\"sidebar-style\" [hasBackdrop]=\"false\" disableClose>\n    <div>\n  <app-side-bar></app-side-bar>\n    </div>\n  <div class=\"router-outlet-style\">\n    <router-outlet></router-outlet>\n  </div>\n  </mat-drawer-container>\n</div>\n"

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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
    function LoginComponent(loginService, log, router, rootService, spinner) {
        this.loginService = loginService;
        this.log = log;
        this.router = router;
        this.rootService = rootService;
        this.spinner = spinner;
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
        this.spinner.show();
        this.loginService.loginUser(msg)
            .then(function (resp) {
            _this.log.debug('Success Response from Login Request');
            _this.log.debug(resp);
            var data = resp;
            _this.log.debug(data.isValidUser);
            _this.log.debug(data);
            setTimeout(function () {
                /** spinner ends after 5 seconds */
                _this.spinner.hide();
            }, 1000);
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
            _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
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

<<<<<<< Updated upstream
/***/ "./src/app/models/BaseModel.ts":
/*!*************************************!*\
  !*** ./src/app/models/BaseModel.ts ***!
  \*************************************/
/*! exports provided: BaseModel */
=======
/***/ "./src/app/models/DaysOfWeek.ts":
/*!**************************************!*\
  !*** ./src/app/models/DaysOfWeek.ts ***!
  \**************************************/
/*! exports provided: DaysOfWeek */
>>>>>>> Stashed changes
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< Updated upstream
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return BaseModel; });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());

=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysOfWeek", function() { return DaysOfWeek; });
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
>>>>>>> Stashed changes


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
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/app/models/BaseModel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LoginModel = /** @class */ (function (_super) {
    __extends(LoginModel, _super);
    function LoginModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoginModel;
}(_BaseModel__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/app/models/SchedularModel.ts":
/*!******************************************!*\
  !*** ./src/app/models/SchedularModel.ts ***!
  \******************************************/
/*! exports provided: SchedularModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedularModel", function() { return SchedularModel; });
/* harmony import */ var _BaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel */ "./src/app/models/BaseModel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SchedularModel = /** @class */ (function (_super) {
    __extends(SchedularModel, _super);
    function SchedularModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SchedularModel;
}(_BaseModel__WEBPACK_IMPORTED_MODULE_0__["BaseModel"]));



/***/ }),

/***/ "./src/app/models/errorcodes.ts":
/*!**************************************!*\
  !*** ./src/app/models/errorcodes.ts ***!
  \**************************************/
/*! exports provided: Errorcodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errorcodes", function() { return Errorcodes; });
var Errorcodes = /** @class */ (function () {
    function Errorcodes() {
    }
    return Errorcodes;
}());



/***/ }),

/***/ "./src/app/schedule-spot-instances/SchedularService.ts":
/*!*************************************************************!*\
  !*** ./src/app/schedule-spot-instances/SchedularService.ts ***!
  \*************************************************************/
/*! exports provided: SchedularService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedularService", function() { return SchedularService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedularService = /** @class */ (function () {
    function SchedularService(http) {
        this.http = http;
    }
    SchedularService.prototype.scheduleSpotInstances = function (schedular) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/rest/spot/schedule';
        console.log(JSON.stringify(schedular));
        return this.http.post(url, schedular).toPromise();
    };
    SchedularService.prototype.createSpotSchedule = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/rest/spot/createschedule';
        // console.log(JSON.stringify(schedular));
        return this.http.get(url).toPromise();
        // return this.http.post(url, '').toPromise();
    };
    SchedularService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SchedularService);
    return SchedularService;
}());



/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"schedular-card\">\n  <mat-card-header>\n    <mat-card-title>ScheduleSpotInstance</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n<form class=\"example-form\" [formGroup]=\"schedularForm\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Region\" [formControl]=\"region\" required>\n\n    </mat-select>\n    <input matInput placeholder=\"\" formControlName=\"bidPrice\" name=\"bidPrice\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Instance Type\" [formControl]=\"instanceType\" required>\n\n    </mat-select>\n    <!--textarea matInput placeholder=\"Instance Type\" formControlName=\"instanceType\" name=\"instanceType\"></textarea-->\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Number of Instances\" formControlName=\"numOfInstances\" name=\"numOfInstances\"></textarea>\n  </mat-form-field>\n\n\n  <mat-form-field class=\"example-full-width\">\n      <!--mat-select placeholder=\"AMI ID\" [formControl]=\"animalControl\" required-->\n    <mat-select placeholder=\"AMI ID\" [formControl]=\"amiId\" required>\n        <!--mat-option>--</mat-option>\n        <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n          {{animal.name}}\n        </mat-option-->\n    </mat-select>\n      <!--mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n      <mat-hint>{{animalControl.value?.sound}}</mat-hint-->\n  </mat-form-field>\n  <!--textarea-- matInput placeholder=\"AMI ID\" formControlName=\"amiId\" name=\"amiId\"></textarea-->\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Security Group\" [formControl]=\"securityGroup\" required>\n\n    </mat-select>\n    <!--textarea matInput placeholder=\"Security Group\" formControlName=\"securityGroup\" name=\"securityGroup\"></textarea-->\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"SSH KeyPair\" formControlName=\"sshKeyPair\" name=\"sshKeyPair\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Bid Price\" formControlName=\"bidPrice\" name=\"bidPrice\">\n  </mat-form-field>\n\n\n</form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"schedule()\" color=\"primary\">Schedule</button>\n  </mat-card-actions>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.component.ts ***!
  \******************************************************************************/
/*! exports provided: ScheduleSpotInstancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleSpotInstancesComponent", function() { return ScheduleSpotInstancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
/* harmony import */ var _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/RootService/root.service */ "./src/app/common/RootService/root.service.ts");
/* harmony import */ var _models_SchedularModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/SchedularModel */ "./src/app/models/SchedularModel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _SchedularService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SchedularService */ "./src/app/schedule-spot-instances/SchedularService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScheduleSpotInstancesComponent = /** @class */ (function () {
    function ScheduleSpotInstancesComponent(schedularService, log, router, rootService) {
        this.schedularService = schedularService;
        this.log = log;
        this.router = router;
        this.rootService = rootService;
        this.region = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.bidPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.numOfInstances = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.sshKeyPair = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.instanceType = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.amiId = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.securityGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.schedularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            region: this.region,
            bidPrice: this.bidPrice,
            numOfInstances: this.numOfInstances,
            sshKeyPair: this.sshKeyPair,
            instanceType: this.instanceType,
            amiId: this.amiId,
            securityGroup: this.securityGroup
        });
    }
    ScheduleSpotInstancesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schedularService.createSpotSchedule()
            .then(function (resp) {
            _this.log.debug('Success Response from create schedule Request');
            _this.log.debug(resp);
        })
            .catch(function (err) {
            _this.log.debug('Error Response from create schedule Request');
            _this.log.debug(err);
        });
    };
    ScheduleSpotInstancesComponent.prototype.schedule = function () {
        var _this = this;
        this.log.debug('schedule button clicked');
        this.log.debug('bidPrice : ' + this.bidPrice.value);
        this.log.debug('instanceType : ' + this.instanceType.value);
        var schedular = new _models_SchedularModel__WEBPACK_IMPORTED_MODULE_3__["SchedularModel"]();
        schedular.bidPrice = this.bidPrice.value;
        schedular.numOfInstances = this.numOfInstances.value;
        schedular.instanceType = this.instanceType.value;
        schedular.amiId = this.amiId.value;
        schedular.securityGroup = this.securityGroup.value;
        schedular.sshKeyPair = this.sshKeyPair.value;
        this.schedularService.scheduleSpotInstances(schedular)
            .then(function (resp) {
            _this.log.debug('Success Response from Schedule Spot Request');
            _this.log.debug(resp);
            var data = resp;
            _this.log.debug(data.responseMessage);
            _this.rootService.loginSuccessfull = true;
            _this.log.debug('Redirecting to Dashboard');
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            _this.log.debug('Error Response from Schedule Spot Request');
            _this.log.debug(err);
        });
    };
    ScheduleSpotInstancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-spot-instances',
            template: __webpack_require__(/*! ./schedule-spot-instances.component.html */ "./src/app/schedule-spot-instances/schedule-spot-instances.component.html"),
            styles: [__webpack_require__(/*! ./schedule-spot-instances.component.css */ "./src/app/schedule-spot-instances/schedule-spot-instances.component.css")]
        }),
        __metadata("design:paramtypes", [_SchedularService__WEBPACK_IMPORTED_MODULE_5__["SchedularService"],
            _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
    ], ScheduleSpotInstancesComponent);
    return ScheduleSpotInstancesComponent;
}());



/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.module.ts ***!
  \***************************************************************************/
/*! exports provided: ScheduleSpotInstancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleSpotInstancesModule", function() { return ScheduleSpotInstancesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-spot-instances.component */ "./src/app/schedule-spot-instances/schedule-spot-instances.component.ts");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _SchedularService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SchedularService */ "./src/app/schedule-spot-instances/SchedularService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ScheduleSpotInstancesModule = /** @class */ (function () {
    function ScheduleSpotInstancesModule() {
    }
    ScheduleSpotInstancesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
            ],
            declarations: [_schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleSpotInstancesComponent"]],
            exports: [
                _schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleSpotInstancesComponent"]
            ],
            providers: [
                _SchedularService__WEBPACK_IMPORTED_MODULE_7__["SchedularService"]
            ]
        })
    ], ScheduleSpotInstancesModule);
    return ScheduleSpotInstancesModule;
}());



/***/ }),

/***/ "./src/app/models/SchedularModel.ts":
/*!******************************************!*\
  !*** ./src/app/models/SchedularModel.ts ***!
  \******************************************/
/*! exports provided: SchedularModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedularModel", function() { return SchedularModel; });
var SchedularModel = /** @class */ (function () {
    function SchedularModel() {
    }
    return SchedularModel;
}());



/***/ }),

/***/ "./src/app/schedule-spot-instances/SchedularService.ts":
/*!*************************************************************!*\
  !*** ./src/app/schedule-spot-instances/SchedularService.ts ***!
  \*************************************************************/
/*! exports provided: SchedularService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedularService", function() { return SchedularService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedularService = /** @class */ (function () {
    function SchedularService(http) {
        this.http = http;
    }
    SchedularService.prototype.scheduleSpotInstances = function (schedular) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/rest/spot/schedule';
        console.log(JSON.stringify(schedular));
        return this.http.post(url, schedular).toPromise();
    };
    SchedularService.prototype.createSpotSchedule = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + '/rest/spot/createschedule';
        // console.log(JSON.stringify(schedular));
        return this.http.get(url).toPromise();
        // return this.http.post(url, '').toPromise();
    };
    SchedularService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SchedularService);
    return SchedularService;
}());



/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n\n<mat-card class=\"schedular-card\">\n  <mat-card-header>\n    <mat-card-title>ScheduleSpotInstance</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n<form class=\"example-form\" [formGroup]=\"schedularForm\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Region\" formControlName=\"region\" required>\n      <mat-option *ngFor=\"let region of regions\" [value]=\"region\">\n        {{region}}\n      </mat-option>\n    </mat-select>\n    <!--input matInput placeholder=\"\" formControlName=\"bidPrice\" name=\"bidPrice\"-->\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Instance Type\" formControlName=\"instanceType\" required>\n      <mat-option *ngFor=\"let instanceType of instanceTypes\" [value]=\"instanceType\">\n        {{instanceType}}\n      </mat-option>\n    </mat-select>\n    <!--textarea matInput placeholder=\"Instance Type\" formControlName=\"instanceType\" name=\"instanceType\"></textarea-->\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Number of Instances\" formControlName=\"numOfInstances\" name=\"numOfInstances\"></textarea>\n  </mat-form-field>\n\n\n  <mat-form-field class=\"example-full-width\">\n      <!--mat-select placeholder=\"AMI ID\" [formControl]=\"animalControl\" required-->\n    <mat-select placeholder=\"AMI ID\" formControlName=\"amiId\" required>\n        <!--mat-option>--</mat-option -->\n        <mat-option *ngFor=\"let amiId of amiIds\" [value]=\"amiId\">\n          {{amiId}}\n        </mat-option>\n    </mat-select>\n      <!--mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n      <mat-hint>{{animalControl.value?.sound}}</mat-hint-->\n  </mat-form-field>\n  <!--textarea-- matInput placeholder=\"AMI ID\" formControlName=\"amiId\" name=\"amiId\"></textarea-->\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Security Group\" formControlName=\"securityGroup\" required>\n      <mat-option *ngFor=\"let securityGroup of securityGroups\" [value]=\"securityGroup\">\n        {{securityGroup}}\n      </mat-option>\n    </mat-select>\n    <!--textarea matInput placeholder=\"Security Group\" formControlName=\"securityGroup\" name=\"securityGroup\"></textarea-->\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <!--textarea matInput placeholder=\"SSH KeyPair\" [formControlName]=\"sshKeyPairs\" name=\"sshKeyPair\"></textarea-->\n    <mat-select placeholder=\"SSH Key Pair\" formControlName=\"sshKeyPair\" required>\n      <mat-option *ngFor=\"let sshKeyPair of sshKeyPairs\" [value]=\"sshKeyPair\">\n        {{sshKeyPair}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Bid Price\" formControlName=\"bidPrice\" name=\"bidPrice\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <!--label>Schedule Start Date/Time</label-->\n    <input matInput mdc-datetime-picker=\"\" date=\"true\" time=\"true\" type=\"text\" placeholder=\"Schedule Start Date/Time\" max-date=\"dateTimeEnd\" ng-model=\"dateTimeStart\" readonly=\"readonly\" id=\"input_0\" formControlName=\"scheduleStartDate\">\n    <!--div class=\"md-errors-spacer\"></div-->\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput mdc-datetime-picker=\"\" date=\"true\" time=\"true\" type=\"text\" placeholder=\"Schedule End Date/Time\" max-date=\"dateTimeEnd\" ng-model=\"dateTimeStart\" readonly=\"readonly\" id=\"input_1\" formControlName=\"scheduleEndDate\">\n    <!--input time=\"false\" date=\"true\" mdc-datetime-picker=\"\" type=\"text\" id=\"date\" placeholder=\"Schedule End Date\" ng-model=\"date\" min-date=\"minDate\" max-date=\"maxDate\" class=\" md-input\" readonly=\"readonly\" formControlName=\"scheduleEndDate\"-->\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Days of Week\" formControlName=\"scheduleDays\" multiple>\n      <mat-option *ngFor=\"let day of keys(daysOfWeek)\" [value]=\"day\">{{daysOfWeek[day]}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n\n</form>\n\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"schedule()\" color=\"primary\">Schedule</button>\n  </mat-card-actions>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.component.ts ***!
  \******************************************************************************/
/*! exports provided: ScheduleSpotInstancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleSpotInstancesComponent", function() { return ScheduleSpotInstancesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/LoggerService/logger.service */ "./src/app/common/LoggerService/logger.service.ts");
/* harmony import */ var _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/RootService/root.service */ "./src/app/common/RootService/root.service.ts");
/* harmony import */ var _models_SchedularModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/SchedularModel */ "./src/app/models/SchedularModel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _SchedularService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SchedularService */ "./src/app/schedule-spot-instances/SchedularService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_DaysOfWeek__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/DaysOfWeek */ "./src/app/models/DaysOfWeek.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScheduleSpotInstancesComponent = /** @class */ (function () {
    function ScheduleSpotInstancesComponent(schedularService, log, router, rootService) {
        this.schedularService = schedularService;
        this.log = log;
        this.router = router;
        this.rootService = rootService;
        this.bidPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.region = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.instanceType = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.amiId = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.securityGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.sshKeyPair = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.scheduleStartDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.scheduleEndDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.scheduleDays = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.numOfInstances = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.keys = Object.keys;
        this.daysOfWeek = _models_DaysOfWeek__WEBPACK_IMPORTED_MODULE_7__["DaysOfWeek"];
        this.schedularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            bidPrice: this.bidPrice,
            region: this.region,
            instanceType: this.instanceType,
            amiId: this.amiId,
            numOfInstances: this.numOfInstances,
            securityGroup: this.securityGroup,
            sshKeyPair: this.sshKeyPair,
            scheduleStartDate: this.scheduleStartDate,
            scheduleEndDate: this.scheduleEndDate,
            scheduleDays: this.scheduleDays,
        });
    }
    ScheduleSpotInstancesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schedularService.createSpotSchedule()
            .then(function (resp) {
            _this.log.debug('Success Response from create schedule Request');
            _this.log.debug(resp);
        })
            .catch(function (err) {
            _this.log.debug('Error Response from create schedule Request');
            _this.log.debug(err);
        });
    };
    ScheduleSpotInstancesComponent.prototype.schedule = function () {
        var _this = this;
        this.log.debug('schedule button clicked');
        this.log.debug('bidPrice : ' + this.bidPrice.value);
        this.log.debug('instanceType : ' + this.instanceType.value);
        this.log.debug('daysOfWeek : ' + this.scheduleDays.value);
        var schedular = new _models_SchedularModel__WEBPACK_IMPORTED_MODULE_3__["SchedularModel"]();
        schedular.region = this.region.value;
        schedular.bidPrice = this.bidPrice.value;
        schedular.instanceType = this.instanceType.value;
        schedular.amiId = this.amiId.value;
        schedular.numOfInstances = this.numOfInstances.value;
        schedular.securityGroup = this.securityGroup.value;
        schedular.sshKeyPair = this.sshKeyPair.value;
        schedular.scheduleDays = this.scheduleDays.value;
        this.schedularService.scheduleSpotInstances(schedular)
            .then(function (resp) {
            _this.log.debug('Success Response from Schedule Spot Request');
            _this.log.debug(resp);
            var data = resp;
            _this.log.debug(data.responseMessage);
            _this.rootService.loginSuccessfull = true;
            _this.log.debug('Redirecting to Dashboard');
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            _this.log.debug('Error Response from Schedule Spot Request');
            _this.log.debug(err);
        });
    };
    ScheduleSpotInstancesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-spot-instances',
            template: __webpack_require__(/*! ./schedule-spot-instances.component.html */ "./src/app/schedule-spot-instances/schedule-spot-instances.component.html"),
            styles: [__webpack_require__(/*! ./schedule-spot-instances.component.css */ "./src/app/schedule-spot-instances/schedule-spot-instances.component.css")]
        }),
        __metadata("design:paramtypes", [_SchedularService__WEBPACK_IMPORTED_MODULE_5__["SchedularService"],
            _common_LoggerService_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _common_RootService_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
    ], ScheduleSpotInstancesComponent);
    return ScheduleSpotInstancesComponent;
}());



/***/ }),

/***/ "./src/app/schedule-spot-instances/schedule-spot-instances.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/schedule-spot-instances/schedule-spot-instances.module.ts ***!
  \***************************************************************************/
/*! exports provided: ScheduleSpotInstancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleSpotInstancesModule", function() { return ScheduleSpotInstancesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-spot-instances.component */ "./src/app/schedule-spot-instances/schedule-spot-instances.component.ts");
/* harmony import */ var _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-material/custom-material.module */ "./src/app/custom-material/custom-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _SchedularService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SchedularService */ "./src/app/schedule-spot-instances/SchedularService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ScheduleSpotInstancesModule = /** @class */ (function () {
    function ScheduleSpotInstancesModule() {
    }
    ScheduleSpotInstancesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_material_custom_material_module__WEBPACK_IMPORTED_MODULE_3__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
            ],
            declarations: [_schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleSpotInstancesComponent"]],
            exports: [
                _schedule_spot_instances_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleSpotInstancesComponent"]
            ],
            providers: [
                _SchedularService__WEBPACK_IMPORTED_MODULE_7__["SchedularService"]
            ]
        })
    ], ScheduleSpotInstancesModule);
    return ScheduleSpotInstancesModule;
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

<<<<<<< Updated upstream
module.exports = "\n  <mat-drawer #drawer opened=\"\">\n    <mat-list>\n      <mat-list-item (click)=\"toggleTimeline(1)\">\n        <mat-icon matListIcon>dashboard</mat-icon>\n        <h3 matLine>DashBoard</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(2)\">\n        <mat-icon matListIcon>filter_list</mat-icon>\n        <h3 matLine>Manage Spot Instances</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(3)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Spot Request Predictor</h3>\n      </mat-list-item>\n      <!--mat-list-item (click)=\"toggleTimeline(4)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Schedule Spot Requests</h3>\n      </mat-list-item-->\n      <mat-list-item (click)=\"toggleTimeline(4)\">\n        <mat-icon matListIcon>add_circle_outline</mat-icon>\n        <h3 matLine>Schedule Spot Instances</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(5)\">\n        <mat-icon matListIcon>exit_to_app</mat-icon>\n        <h3 matLine>SignOut</h3>\n      </mat-list-item>\n    </mat-list>\n  </mat-drawer>\n  <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n\n"
=======
module.exports = "\n  <mat-drawer #drawer opened=\"\">\n    <mat-list>\n      <mat-list-item (click)=\"toggleTimeline(1)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>DashBoard</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(2)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Manage Spot Instances</h3>\n      </mat-list-item>\n      <mat-list-item (click)=\"toggleTimeline(3)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Spot Request Predictor</h3>\n      </mat-list-item>\n      <!--mat-list-item (click)=\"toggleTimeline(4)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Schedule Spot Requests</h3>\n      </mat-list-item-->\n      <mat-list-item (click)=\"toggleTimeline(4)\">\n        <mat-icon matListIcon>opacity</mat-icon>\n        <h3 matLine>Schedule Spot Instances</h3>\n      </mat-list-item>\n    </mat-list>\n  </mat-drawer>\n  <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n\n"
>>>>>>> Stashed changes

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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
    function SideBarComponent(log, router, spinner) {
        this.log = log;
        this.router = router;
        this.spinner = spinner;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.toggleTimeline = function (id) {
        this.log.debug('ID Pressed :' + id);
        switch (id) {
            case 1:
                this.spinner.show();
                this.router.navigate(['/dashboard/dashBoardSummary']);
                this.spinner.hide();
                break;
            case 2:
                this.spinner.show();
                this.router.navigate(['/dashboard/manageSpotInstances']);
                this.spinner.hide();
                break;
            case 3:
                this.spinner.show();
                this.router.navigate(['/dashboard/spotInstancePredictor']);
                this.spinner.hide();
                break;
            case 4:
<<<<<<< Updated upstream
                this.spinner.show();
                this.router.navigate(['/dashboard/scheduleSpotInstances']);
                this.spinner.hide();
                break;
            case 5:
                this.spinner.show();
                this.router.navigate(['/login']);
                this.spinner.hide();
=======
                this.router.navigate(['/dashboard/scheduleSpotInstances']);
>>>>>>> Stashed changes
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
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

/***/ "./src/app/signout/signout.component.css":
/*!***********************************************!*\
  !*** ./src/app/signout/signout.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signout/signout.component.html":
/*!************************************************!*\
  !*** ./src/app/signout/signout.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/signout/signout.component.ts":
/*!**********************************************!*\
  !*** ./src/app/signout/signout.component.ts ***!
  \**********************************************/
/*! exports provided: SignoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutComponent", function() { return SignoutComponent; });
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

var SignoutComponent = /** @class */ (function () {
    function SignoutComponent() {
    }
    SignoutComponent.prototype.ngOnInit = function () {
    };
    SignoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signout',
            template: __webpack_require__(/*! ./signout.component.html */ "./src/app/signout/signout.component.html"),
            styles: [__webpack_require__(/*! ./signout.component.css */ "./src/app/signout/signout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignoutComponent);
    return SignoutComponent;
}());



/***/ }),

/***/ "./src/app/signout/signout.module.ts":
/*!*******************************************!*\
  !*** ./src/app/signout/signout.module.ts ***!
  \*******************************************/
/*! exports provided: SignoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutModule", function() { return SignoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signout.component */ "./src/app/signout/signout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignoutModule = /** @class */ (function () {
    function SignoutModule() {
    }
    SignoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_signout_component__WEBPACK_IMPORTED_MODULE_2__["SignoutComponent"]]
        })
    ], SignoutModule);
    return SignoutModule;
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

module.exports = "<mat-card  id=\"stage\"><h1>SPINUT</h1></mat-card>\n<!--<img src=\"dist/Spotify/assets/images/spotInstances.png\">-->\n<mat-divider></mat-divider>\n"

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

module.exports = __webpack_require__(/*! /home/harishab/Code/ScheduleSpot/Spotify/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map