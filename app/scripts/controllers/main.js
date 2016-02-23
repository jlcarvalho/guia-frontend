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

        $http.get('scripts/data.json')
          .success(function(sections) {
            $scope.sections = _.map(sections, function(section){
              section.links = _.map(section.links, function(resource){
                if(_.includes($localStorage.done, resource.url)) {
                  resource.checked = true;
                }
                return resource;
              })
              return section;
            });
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
      var index = $localStorage.done.indexOf(r.url);
      if(!r.checked && index === -1){
        $localStorage.done.push(r.url);
      } else {
        $localStorage.done.splice(index, 1);
      }
    }
  }]);
