/**
 * Created by devebiz on 11/6/15.
 */
var app = angular
    .module("app", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "view/start.html"
            })
            .when("/projekte", {
                controller: "ChapterController",
                /* template: "<div> ..." */
                templateUrl: "view/Chapters.html"
            })
    });