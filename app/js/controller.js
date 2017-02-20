angular.module('ShoeCalendarApp', ['ngMaterial'])
  .controller('ShoeFormSubmit', ['$scope', '$filter', function($scope, $filter) {
    $scope.submitShoeData = function() {
      var data = $scope.form;
      //Filtering the date format
      var filterDate = $filter('date')(data.launchDate, 'yyyy, M, d');
      console.log(data);
      console.log(filterDate);
    }
  }]);
