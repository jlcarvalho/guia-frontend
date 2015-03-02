'use strict';

/**
 * @ngdoc function
 * @name trackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackApp
 */
angular.module('trackApp')
  .controller('MainCtrl', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    $scope.resources = [];

    $scope.getTime = getTime;
    $scope.changeResource = changeResource;

    (function(){
        if(!angular.isDefined($localStorage.done)) {
            $localStorage.done = [];
        }
        
        $http.get('scripts/data.json').
            success(function(data) {
                var dones = _.map(data.resources, function(resource){
                    if(_.includes($localStorage.done, resource._id)) {
                        resource.checked = true;
                    }
                    return resource;
                });

                data.sections = _.map(data.sections, function(section){
                    section.resources = _.where(data.resources, {'section': section._id});
                    return section;
                });

                $scope.sections = data.sections;
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

    function changeResource(r){
        var index = $localStorage.done.indexOf(r._id);
        if(!r.checked && index === -1){
            $localStorage.done.push(r._id);
        } else {
            $localStorage.done.splice(index, 1);
        }
    }
  }]);
