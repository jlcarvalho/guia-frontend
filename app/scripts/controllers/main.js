'use strict';

/**
 * @ngdoc function
 * @name trackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackApp
 */
angular.module('trackApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.resources = [];

    $scope.getTime = getTime;

    (function(){
        $http.get('/scripts/data.json').
            success(function(data) {
                console.dir(data);
                $scope.resources = _.sortByAll(data.resources, ['section', '_id']);
            })
    }())
    
    function getTime(duration){
        var output = '';

        var momentObject = moment.duration(duration, 'minutes');
        var hours = momentObject.hours();
        var minutes = momentObject.minutes();

        if(hours == 1) {
            output += hours + ' hora';
        }
        if(hours > 1) {
            output += hours + ' horas';
        }
        if(hours > 0 && minutes > 0) {
            output += ' e ';
        }
        if(minutes > 0) {
            output += minutes + ' minutos';
        }
        return output;
    }
  }]);
