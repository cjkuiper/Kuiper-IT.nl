webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_projects_list_projects_list_component__ = __webpack_require__("../../../../../src/app/components/projects-list/projects-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_skills_skills_component__ = __webpack_require__("../../../../../src/app/components/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_banner_banner_component__ = __webpack_require__("../../../../../src/app/components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_banner_banner_component__["a" /* BannerComponent */] },
    { path: 'project-detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_project_detail_project_detail_component__["a" /* ProjectDetailComponent */] },
    { path: 'Projects', component: __WEBPACK_IMPORTED_MODULE_2__components_projects_list_projects_list_component__["a" /* ProjectsListComponent */] },
    { path: 'About', component: __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'Services', component: __WEBPACK_IMPORTED_MODULE_4__components_services_services_component__["a" /* ServicesComponent */] },
    { path: 'Skills', component: __WEBPACK_IMPORTED_MODULE_5__components_skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'Contact', component: __WEBPACK_IMPORTED_MODULE_6__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_8__components_banner_banner_component__["a" /* BannerComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '*', redirectTo: 'BannerComponent' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n<!-- Navigation-JavaScript -->\r\n<!-- stats -->\r\n\r\n<script src=\"js/jquery.waypoints.min.js\"></script>\r\n<script src=\"js/jquery.countup.js\"></script>\r\n<script>\r\n  $('.counter').countUp();\r\n</script>\r\n<!-- //stats -->\r\n<!-- js for portfolio lightbox -->\r\n<!--light-box-files -->\r\n<script type=\"text/javascript \">\r\n  $(function () {\r\n    $('.portfolio-grids a').Chocolat();\r\n  });\r\n</script>\r\n<!-- /js for portfolio lightbox -->\r\n<!-- jarallax-js -->\r\n<script src=\"js/SmoothScroll.min.js\"></script>\r\n<!-- start-smoth-scrolling -->\r\n<script type=\"text/javascript\" src=\"js/move-top.js\"></script>\r\n<script type=\"text/javascript\" src=\"js/easing.js\"></script>\r\n<script type=\"text/javascript\">\r\n  jQuery(document).ready(function ($) {\r\n    $(\".scroll\").click(function (event) {\r\n      event.preventDefault();\r\n      $('html,body').animate({\r\n        scrollTop: $(this.hash).offset().top\r\n      }, 1000);\r\n    });\r\n  });\r\n</script>\r\n<!-- start-smoth-scrolling -->\r\n<!-- smooth scrolling -->\r\n<script type=\"text/javascript\">\r\n  $(document).ready(function () {\r\n    /*\r\n      var defaults = {\r\n      containerID: 'toTop', // fading element id\r\n      containerHoverID: 'toTopHover', // fading element hover id\r\n      scrollSpeed: 1200,\r\n      easingType: 'linear'\r\n      };\r\n    */\r\n    $().UItoTop({\r\n      easingType: 'easeOutQuart'\r\n    });\r\n  });\r\n</script>\r\n\r\n<div class=\"arr-kit\">\r\n  <a href=\"#home\" id=\"toTop\" style=\"display: block;\"> <span id=\"toTopHover\" style=\"opacity: 1;\"> </span></a>\r\n</div>\r\n<!-- //smooth scrolling -->\r\n<script type=\"text/javascript\" src=\"js/bootstrap-3.1.1.min.js\"></script>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Kuiper IT';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_projects_list_projects_list_component__ = __webpack_require__("../../../../../src/app/components/projects-list/projects-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/components/shared/services/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_shared_services_contact_service_service__ = __webpack_require__("../../../../../src/app/components/shared/services/contact-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_map_map_component__ = __webpack_require__("../../../../../src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_skills_skills_component__ = __webpack_require__("../../../../../src/app/components/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_services_services_component__ = __webpack_require__("../../../../../src/app/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_stats_stats_component__ = __webpack_require__("../../../../../src/app/components/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_banner_banner_component__ = __webpack_require__("../../../../../src/app/components/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_projects_list_projects_list_component__["a" /* ProjectsListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* AlertModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__components_shared_services_data_service_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_14__components_shared_services_contact_service_service__["a" /* ContactService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- /banner_bottom -->\r\n<div class=\"banner_bottom\" id=\"about\">\r\n  <div class=\"container\">\r\n    <div class=\"inner_sec_top_aglieits\">\r\n      <div class=\"banner_bottom_info\">\r\n        <h4><img src=\"../../../assets/images/JeroenKuiper_small.jpg\" alt=\"Jeroen Kuiper\" class=\"img-responsive\"> .NET - C# - Azure - SQL/NoSql - Continuous Delivery </h4>\r\n        <h6>Freelance full-stack Software Engineer</h6>\r\n        <p>\r\n          Als Software Engineer heb ik meer dan 10 jaar ervaring op het gebied van Microsoft gebaseerde oplossingen. Ik ben een echte all-round engineer, maar mijn expertise ligt voornamelijk op het gebied van .NET, web ontwikkeling, Azure en data-gedreven processen en applicaties.\r\n        </p>\r\n        <br />\r\n        <p>\r\n          Na het behalen van mijn Bachelor Informatica aan de Hogeschool van Arnhem en Nijmegen in 2006, heb ik altijd op project basis gewerkt voor klanten in veschillende branches. Ik ben een teamspeler en als gecertificeerd Scrum Master werk graag op een iteratieve manier om tot het eindresultaat te komen. Ook een prettige samenwerking is voor mij erg belangrijk.\r\n        </p>\r\n      </div>\r\n      <ul class=\"address\">\r\n        <li><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Barneveld</li>\r\n        <li><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><a href=\"mailto:jeroen@kuiper-it.nl\">jeroen@kuiper-it.nl</a></li>\r\n        <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>+31 6 413 73 044</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- //banner_bottom -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"banner\" id=\"home\">\r\n  <div class=\"container\">\r\n    <div class=\"banner_info_kit_agile\">\r\n      <h3>Jeroen Kuiper</h3>\r\n      <h6>Freelance full-stack software ontwikkelaar</h6>\r\n      <p>Neem contact met me op als je op zoek bent naar een gedreven full-stack Microsoft ontwikkelaar.</p>\r\n      <ul class=\"slide-up\">\r\n        <li><a routerLink=\"/About\" class=\"kit_more scroll\">Lees meer</a></li>\r\n        <li><a routerLink=\"/Contact\" class=\"scroll contact\"><i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i> Contact</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"banner-image-kuiper-it\">\r\n      <img src=\"images/men.png\" alt=\" \" class=\"img-responsive\" />\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</div>\r\n<!-- //banner -->\r\n<!-- /banner_bottom -->\r\n<div class=\"banner_bottom\" id=\"about\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"kuiper-image\">\r\n          <img alt=\"Jeroen Kuiper\" class=\"img-responsive\" src=\"../../../assets/images/JeroenKuiper_small.jpg\">\r\n        </div>\r\n        <div class=\"kuiper-info-content\">\r\n          <span class=\"kuiper-info-name\">Jeroen Kuiper</span>\r\n          <span class=\"kuiper-info-title\">Software ontwikkelaar</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">      \r\n        <div class=\"kuiper-info-content\">\r\n          <p><span class=\"text\">Neem contact met me op als je op zoek bent naar een gedreven full-stack Microsoft ontwikkelaar. Ik heb meer dan 10 jaar ervaring met zowel backend als frontend software ontwikkeling in verschillende branches.</span></p>\r\n        </div>\r\n        <div class=\"kuiper-info-content\">\r\n          <a target=\"_blank\" href=\"https://www.linkedin.com/in/jeroen-kuiper-974bbb6/\" class=\"btn linkedin-button\"><i class=\"fa fa-linkedin-square\"></i> Linkedin</a>\r\n        </div>\r\n      \r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"kuiper-info-content\">\r\n          <p><span class=\"text\">Leibeek 64</span><br><span style=\"font-size: 12pt;\">3772SZ Barneveld</span></p>\r\n          <p><span class=\"text\"><a href=\"mailto:jeroen@kuiper-it.nl\">jeroen@kuiper-it.nl<br></a><a href=\"http://www.kuiper-it.nl\">http://www.kuiper-it.nl</a><a href=\"http://www.kuiper-it.nl\"><br></a><a href=\"tel:+31641373044\">+31 (0)6 41 373 044</a></span></p>\r\n          <p><span class=\"text\">KvK:&nbsp;69943435</span><span style=\"font-size: 12pt;\"><br></span></p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"kuiper-info-content\">\r\n          <div class=\"certification-logos\" >\r\n            <img class=\"img-responsive\" src=\"../../../assets/images/microsoftpro_logo.png\" alt=\"Microsoft Certified Profiessional\">\r\n            <img class=\"img-responsive\" src=\"../../../assets/images/PSMI-small.jpg\" alt=\"Professional Scrum Master 1\">\r\n          </div>          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banner',
            template: __webpack_require__("../../../../../src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- /contact -->\r\n<div class=\"contact_sec\" id=\"contact\">\r\n  <div class=\"container\">\r\n    <h3 class=\"tittle_kuiper-it two con\">Contact</h3>\r\n    <p class=\"sub_para two\">Neem contact op voor meer informatie</p>\r\n    <div class=\"contact-info skill_info\">\r\n      <form class=\"contact-form\" action=\"#\" method=\"post\">\r\n        <input type=\"text\" name=\"Naam\" placeholder=\"Naam\" required=\"\">\r\n        <input type=\"text\" name=\"Telefoonnummer\" placeholder=\"Telefoonnummer\" required=\"\">\r\n        <input type=\"text\" name=\"Onderwerp\" placeholder=\"Onderwerp\" required=\"\">\r\n        <input type=\"email\" name=\"Email\" placeholder=\"Email\" required=\"\">\r\n        <textarea name=\"Bericht\" placeholder=\"Bericht\" required=\"\"></textarea>\r\n        <div class=\"clearfix\"> </div>\r\n        <input type=\"submit\" value=\"Verstuur\">\r\n      </form>\r\n\r\n    </div>\r\n    <ul class=\"address two\">\r\n      <li><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Barneveld</li>\r\n      <li><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><a href=\"mailto:jeroen@kuiper-it.nl\">jeroen@kuiper-it.nl</a></li>\r\n      <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>0641373044</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<app-map></app-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_contact_service_service__ = __webpack_require__("../../../../../src/app/components/shared/services/contact-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_classes_contact_request__ = __webpack_require__("../../../../../src/app/components/shared/classes/contact-request.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendContactRequest = function () {
        this.contactService.sendContactRequest(new __WEBPACK_IMPORTED_MODULE_2__shared_classes_contact_request__["a" /* ContactRequest */]()).then();
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_contact_service_service__["a" /* ContactService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- /footer -->\r\n<div class=\"footer\">\r\n  <div class=\"container\">\r\n    <p>© 2018 Kuiper IT . All rights reserved</p>    \r\n  </div>\r\n</div>\r\n<!-- //footer -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"banner_nav_kuiper-it\">\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"navbar-header navbar-left\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <h1><a class=\"navbar-brand\" href=\"index.html\">Kuiper IT</a></h1>\r\n    </div>\r\n    <app-menu></app-menu>\r\n  </nav>\r\n  <div class=\"clearfix\"> </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\r\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39176.12161883377!2d5.558149203676253!3d52.14327791450461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64c08520de653%3A0xc9f82c31f3509867!2sBarneveld!5e0!3m2!1snl!2snl!4v1516019267751\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/components/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse navbar-collapse navbar-right\" id=\"bs-example-navbar-collapse-1\">\r\n  <nav>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li [routerLinkActive]=\"['active']\"><a routerLink=\"Home\" class=\"hvr-underline-from-center\">Home</a></li>\r\n      <li [routerLinkActive]=\"['active']\"><a routerLink=\"/About\" class=\"hvr-underline-from-center scroll\">Over mij</a></li>\r\n      <li [routerLinkActive]=\"['active']\"><a routerLink=\"/Services\" class=\"hvr-underline-from-center scroll\">Expertise</a></li>\r\n      <li [routerLinkActive]=\"['active']\"><a routerLink=\"/Skills\" class=\"hvr-underline-from-center scroll\">Skills</a></li>\r\n      <li [routerLinkActive]=\"['active']\"><a routerLink='/Projects' class=\"hvr-underline-from-center scroll\">Werkervaring</a></li>\r\n      <li [routerLinkActive]=\"['active']\"><a routerLink=\"/Contact\" class=\"hvr-underline-from-center scroll\">Contact</a></li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Deze pagina kan niet gevonden worden.\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project-detail/project-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\">\r\n  <h2>Project details</h2>\r\n  <div><label>ID: </label>{{project.id}}</div>\r\n  <div>\r\n    <label>Name: </label>\r\n    <input [(ngModel)]=\"project.name\" placeholder=\"name\" />\r\n  </div>\r\n  <div>\r\n    <label>Klantnaam: </label>\r\n    <input [(ngModel)]=\"project.customerName\" placeholder=\"customerName\" />\r\n  </div>\r\n  <button (click)=\"goBack()\">Back</button>\r\n</div> \r\n"

/***/ }),

/***/ "../../../../../src/app/components/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/components/shared/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.dataService.getProject(+params['id']); })
            .subscribe(function (project) { return _this.project = project; });
    };
    ProjectDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-detail',
            template: __webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_data_service_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects-list/projects-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects-list/projects-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"experience\" class=\"experience\">\r\n  <div class=\"container\">\r\n    <h3 class=\"tittle_kuiper-it two\">Werkervaring</h3>\r\n    <p class=\"sub_para two\">Projecten</p>\r\n    <div class=\"skill_info_wthree_agile\">\r\n\r\n      <div class=\"work-info\" *ngFor=\"let project of projects; let i = index\"\r\n           [attr.data-index]=\"i\"\r\n           [class.selected]=\"project === selectedProject\">\r\n\r\n        <div [ngClass]=\"(i % 2) == 0 ? 'col-md-6 work-right work-right2' : 'col-md-6 work-left'\">\r\n          <h4>{{ project.startDate | date:'MMM-yyyy' }} - {{ (project.endDate | date:'MMM-yyyy') || 'Heden' }} </h4>\r\n        </div>\r\n\r\n        <div [ngClass]=\"(i % 2) == 0 ? 'col-md-6 work-left work-left2' : 'col-md-6 work-right'\">\r\n          <h5>\r\n            <span *ngIf=\"(i % 2) == 1\" class=\"fa fa-dot-circle-o\"> </span>\r\n            <!--<a [routerLink]=\"['/project-detail', project.id]\" (click)=\"onSelect(contact)\">{{project.name}}</a>-->\r\n            <span>{{project.name}}</span>\r\n            <span *ngIf=\"(i % 2) == 0\" class=\"fa fa-dot-circle-o\"> </span>\r\n          </h5>\r\n          <p>{{ project.customerName }} </p>\r\n        </div>\r\n        <div class=\"clearfix\"> </div>        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/projects-list/projects-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service_service__ = __webpack_require__("../../../../../src/app/components/shared/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsListComponent = (function () {
    function ProjectsListComponent(dataService, router, location) {
        this.dataService = dataService;
        this.router = router;
        this.location = location;
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsListComponent.prototype.getProjects = function () {
        var _this = this;
        this.dataService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ProjectsListComponent.prototype.onSelect = function (project) {
        this.selectedProject = project;
    };
    ProjectsListComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects-list',
            template: __webpack_require__("../../../../../src/app/components/projects-list/projects-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects-list/projects-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_data_service_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"servies\" id=\"services\">\r\n  <div class=\"container\">\r\n    <h3 class=\"tittle_kuiper-it two\">Expertise</h3>\r\n    <p class=\"sub_para two yellow\">Mijn expertise ligt voornamelijk op het gebied van .NET, web ontwikkeling, Azure en data-gedreven processen en applicaties.</p>\r\n    <div class=\"skill_info_wthree_agile\">\r\n      <div class=\"col-md-3 banner_bottom_left\">\r\n        <div class=\"banner_bottom_pos_kit\">\r\n          <div class=\"banner_bottom_pos_grid\">\r\n            <div class=\"col-xs-3 banner_bottom_grid_left\">\r\n              <div class=\"bottom_grid_left_grid\">\r\n                <i class=\"fa fa-cloud\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-9 banner_bottom_grid_right\">\r\n              <h4>Azure Development</h4>\r\n            </div>\r\n            <div class=\"clearfix\"> </div>\r\n            <p>Bij MSI-ACI heb ik een volledig op Microsoft Azure gebaseerde high-traffic oplossing ontwikkeld. Hierbij heb ik gebruik gemaakt van Microservices, web –en –worker roles. Datastromen werden ontsloten middels Azure Queues, Tables, SQL en NoSQL storage oplossingen.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 banner_bottom_left\">\r\n        <div class=\"banner_bottom_pos_kit\">\r\n          <div class=\"banner_bottom_pos_grid\">\r\n            <div class=\"col-xs-3 banner_bottom_grid_left\">\r\n              <div class=\"bottom_grid_left_grid\">\r\n                <i class=\"fa fa-server\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-9 banner_bottom_grid_right\">\r\n              <h4>Service Development</h4>\r\n            </div>\r\n            <div class=\"clearfix\"> </div>\r\n            <p>Bij KPN, MSI-ACI en Asito heb ik verschillende WCF services, Windows services, koppelingen en API’s ontwikkeld, welke op een hoog-beschikbare en fout-tolerante manier werken d.m.v. failover en load balanced clusters.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 banner_bottom_left\">\r\n        <div class=\"banner_bottom_pos_kit\">\r\n          <div class=\"banner_bottom_pos_grid\">\r\n            <div class=\"col-xs-3 banner_bottom_grid_left\">\r\n              <div class=\"bottom_grid_left_grid\">\r\n                <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-9 banner_bottom_grid_right\">\r\n              <h4>Web Development</h4>\r\n            </div>\r\n            <div class=\"clearfix\"> </div>\r\n            <p>Bij verschillende opdrachtgeves heb ik verschillende webapplicaties en single page applications ontwikkeld met behulp van Angular, MVC, ReactJs, Sencha en jQuery oplossingen.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 banner_bottom_left\">\r\n        <div class=\"banner_bottom_pos_kit\">\r\n          <div class=\"banner_bottom_pos_grid\">\r\n            <div class=\"col-xs-3 banner_bottom_grid_left\">\r\n              <div class=\"bottom_grid_left_grid\">\r\n                <i class=\"fa fa-recycle\" aria-hidden=\"true\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-9 banner_bottom_grid_right\">\r\n              <h4>Continuous Delivery, DevOps</h4>\r\n            </div>\r\n            <div class=\"clearfix\"> </div>\r\n            <p>Bij verschillende opdrachtgeves heb ik gewerkt aan het continuous delivery –en –monitoring proces. Hierbij heb ik voornamelijk gebruik gemaakt van Visual Studio Online en TFS.</p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"clearfix\"> </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/components/services/services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/classes/contact-request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRequest; });
var ContactRequest = (function () {
    function ContactRequest() {
    }
    return ContactRequest;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/services/contact-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.sendContactRequest = function (contactRequest) {
        return this.http.post('api/Data/SendContactRequest', contactRequest)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/services/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.getProjects = function () {
        return this.http.get('api/Data/Projects')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.getProject = function (id) {
        var url = 'api/Data/Project/' + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/components/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- /skill -->\r\n<div class=\"skill_section\" id=\"skills\">\r\n  <div class=\"container\">\r\n    <div class=\"inner_sec_top_aglieits\">\r\n      <h3 class=\"tittle_kuiper-it\">Skills Samenvatting</h3>\r\n      <p class=\"sub_para\">Onderstaande indicators geven een samenvatting van mijn ervaring met verschillende technieken.</p>\r\n      <div class=\"skills-bar\">\r\n        <section class=\"bar\">\r\n          <section class=\"wrap\">\r\n            <div class=\"wrap_right\">\r\n              <div class=\"bar_group group_ident-1\">\r\n                <p class=\"b_label\">Backend Development (Windows, WCF, Azure, Micro Services)</p><div class=\"bar_group__bar thin\" label=\"Backend development\" show_values=\"true\" tooltip=\"true\" value=\"5\" style=\"margin-bottom: 40px; width: 100%;\"><div class=\"b_tooltip\"><span>5</span><div class=\"b_tooltip--tri\"></div></div><p class=\"bar_label_min\">0</p><p class=\"bar_label_max\">5</p></div>\r\n                <p class=\"b_label\">Frontend Development (Angular, React, Sencha, RazorMVC)</p><div class=\"bar_group__bar thin\" label=\"Frontend development\" show_values=\"true\" tooltip=\"true\" value=\"5\" style=\"margin-bottom: 40px; width: 60%;\"><div class=\"b_tooltip\"><span>3</span><div class=\"b_tooltip--tri\"></div></div><p class=\"bar_label_min\">0</p><p class=\"bar_label_max\">5</p></div>\r\n                <p class=\"b_label\">Database/Storage Development (SQL, Redis, DocumentDB, Azure Tables/Blob/Queues) </p><div class=\"bar_group__bar thin\" label=\"Database/Storage Development\" show_values=\"true\" tooltip=\"true\" value=\"4\" style=\"margin-bottom: 40px; width: 80%;\"><div class=\"b_tooltip\"><span>4</span><div class=\"b_tooltip--tri\"></div></div><p class=\"bar_label_min\">0</p><p class=\"bar_label_max\">5</p></div>\r\n                <p class=\"b_label\">Continuous Delivery / DevOps (VS Online, TFS, Application Insights)</p><div class=\"bar_group__bar thin\" label=\"Continuous Delivery\" show_values=\"true\" tooltip=\"true\" value=\"4\" style=\"margin-bottom: 40px; width: 60%;\"><div class=\"b_tooltip\"><span>3</span><div class=\"b_tooltip--tri\"></div></div><p class=\"bar_label_min\">0</p><p class=\"bar_label_max\">5</p></div>\r\n                <p class=\"b_label\">Scrum / Agile</p><div class=\"bar_group__bar thin\" label=\"Scrum/Agile\" show_values=\"true\" tooltip=\"true\" value=\"4\" style=\"margin-bottom: 40px; width: 80%;\"><div class=\"b_tooltip\"><span>4</span><div class=\"b_tooltip--tri\"></div></div><p class=\"bar_label_min\">0</p><p class=\"bar_label_max\">5</p></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n          </section>\r\n        </section>       \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"stats\" id=\"stats\">\r\n  <div class=\"container\">\r\n    <h3 class=\"tittle_kuiper-it two\">Satisfied Clients</h3>\r\n    <p class=\"sub_para two \">What I Love to Do</p>\r\n    <div class=\"skill_info_wthree_agile\">\r\n      <div class=\"col-md-4 stats_left counter_grid\">\r\n        <div class=\"icon\">\r\n          <i class=\"fa fa-laptop\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"icon_info_agileits\">\r\n          <p class=\"counter\">65</p>\r\n          <h3>Digital Market Place</h3>\r\n        </div>\r\n        <div class=\"clearfix\"> </div>\r\n      </div>\r\n      <div class=\"col-md-4 stats_left counter_grid1\">\r\n        <div class=\"icon\">\r\n          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"icon_info_agileits\">\r\n          <p class=\"counter\">563</p>\r\n          <h3>Made for Elite Clients</h3>\r\n        </div>\r\n        <div class=\"clearfix\"> </div>\r\n      </div>\r\n      <div class=\"col-md-4 stats_left counter_grid2\">\r\n        <div class=\"icon\">\r\n          <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\r\n\r\n        </div>\r\n        <div class=\"icon_info_agileits\">\r\n          <p class=\"counter\">245</p>\r\n          <h3>Won On Contests</h3>\r\n        </div>\r\n        <div class=\"clearfix\"> </div>\r\n      </div>\r\n      <div class=\"clearfix\"> </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stats',
            template: __webpack_require__("../../../../../src/app/components/stats/stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map