/// <reference path='../refs.ts'/>

module auction.controllers {
    'use strict';

    export class MainController {
        static $inject = ['$scope'];


        constructor($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma',
                'IntelliJ IDEA'
            ];

            $scope.a = function (){
                window.open("search.html","blank");
            }
        }
    }


    angular.module('auction').controller('MainCtrl', MainController);

    angular.module('auction')
        .controller('ClickController', function ($scope) {
            alert("hellooo");
        });
}
