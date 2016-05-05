

 angular.module('app', ['ui.router'])
     .config(function($stateProvider, $urlRouterProvider) {
         //
         // For any unmatched url, redirect to /state1
         $urlRouterProvider.otherwise("/newPatient");
         //
         // Now set up the states
         $stateProvider
             .state('dashboard', {
                 url: "/dashboard",
                 templateUrl: "views/dashboard.html"
             })
             .state('newPatient', {
                 url: "/newPatient",
                 templateUrl: "views/newPatient.html"

             })
             .state('newVisit', {
                 url: "/newVisit",
                 templateUrl: "views/newVisit.html"
             })
             .state('patientFiles', {
                 url: "/patientFiles",
                 templateUrl: "views/patientFiles.html"

             })
             .state('calendar', {
                 url: "/calendar",
                 templateUrl: "views/calendar.html"

             })
             .state('payments', {
                 url: "/payments",
                 templateUrl: "views/payments.html"

             })
             .state('settings', {
                 url: "/settings",
                 templateUrl: "views/settings.html"

             });
     });
