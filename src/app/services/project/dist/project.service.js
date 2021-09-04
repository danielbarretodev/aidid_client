"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var global_1 = require("../global");
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.create = function (project) {
        debugger;
        var json = JSON.stringify(project);
        var token = localStorage.getItem("token") || '{}';
        var params = json;
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + JSON.parse(token)
        });
        return this.http.post(global_1.GLOBAL.url + '/project', params, { headers: headers });
    };
    ProjectService.prototype.getAll = function () {
        debugger;
        var token = localStorage.getItem("token") || '{}';
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + JSON.parse(token)
        });
        return this.http.get(global_1.GLOBAL.url + '/project', { headers: headers });
    };
    ProjectService.prototype.update = function (project) {
        debugger;
        var json = JSON.stringify(project);
        var token = localStorage.getItem("token") || '{}';
        var params = json;
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + JSON.parse(token)
        });
        return this.http.put(global_1.GLOBAL.url + '/project/' + project.id, params, { headers: headers });
    };
    ProjectService.prototype["delete"] = function (project) {
        debugger;
        var token = localStorage.getItem("token") || '{}';
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + JSON.parse(token)
        });
        return this.http["delete"](global_1.GLOBAL.url + '/project/' + project.id, { headers: headers });
    };
    ProjectService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
