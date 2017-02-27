var ShoeCalendarApp = angular.module('ShoeCalendarApp', ['ngMaterial']);

//Directives
ShoeCalendarApp.directive('appHeader', function () {
    return {
        restrict: 'EA',
        replace: false,
        templateUrl: "app-header.html"
    }
});

ShoeCalendarApp.directive('appFooter', function () {
    return {
        restrict: 'EA',
        replace: false,
        templateUrl: "app-footer.html"
    }
});

//Form submit
ShoeCalendarApp.controller('ShoeFormSubmitCtrl', ['$scope', '$filter', function($scope, $filter) {
  $scope.submitShoeData = function() {
    var data = $scope.form;
    //Filtering the date format
    var filterDate = $filter('date')(data.launchDate, 'yyyy, M, d');
    console.log(data);
    console.log(filterDate);
  }
}]);

//Theming
ShoeCalendarApp.config(function ($mdThemingProvider) {
  var customPrimary = {
      '50': '#31e2c1',
      '100': '#1edcb8',
      '200': '#1bc5a5',
      '300': '#18af93',
      '400': '#159880',
      '500': '#12826d',
      '600': '#0f6c5a',
      '700': '#0c5547',
      '800': '#093f35',
      '900': '#062822',
      'A100': '#47e6c8',
      'A200': '#5ee9cf',
      'A400': '#74ecd5',
      'A700': '#02120f'
  };
  $mdThemingProvider
      .definePalette('customPrimary',
                      customPrimary);

  var customAccent = {
      '50': '#000000',
      '100': '#02120f',
      '200': '#062822',
      '300': '#093f35',
      '400': '#0c5547',
      '500': '#0f6c5a',
      '600': '#159880',
      '700': '#18af93',
      '800': '#1bc5a5',
      '900': '#1edcb8',
      'A100': '#159880',
      'A200': '#12826d',
      'A400': '#0f6c5a',
      'A700': '#31e2c1'
  };
  $mdThemingProvider
      .definePalette('customAccent',
                      customAccent);

  var customWarn = {
      '50': '#ffb280',
      '100': '#ffa266',
      '200': '#ff934d',
      '300': '#ff8333',
      '400': '#ff741a',
      '500': '#ff6400',
      '600': '#e65a00',
      '700': '#cc5000',
      '800': '#b34600',
      '900': '#993c00',
      'A100': '#ffc199',
      'A200': '#ffd1b3',
      'A400': '#ffe0cc',
      'A700': '#803200'
  };
  $mdThemingProvider
      .definePalette('customWarn',
                      customWarn);

  var customBackground = {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': '#fff',
      '600': '#f2f2f2',
      '700': '#e6e6e6',
      '800': '#d9d9d9',
      '900': '#cccccc',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#ffffff',
      'A700': '#bfbfbf'
  };
  $mdThemingProvider
      .definePalette('customBackground',
                      customBackground);

 $mdThemingProvider.theme('default')
     .primaryPalette('customPrimary')
     .accentPalette('customAccent')
     .warnPalette('customWarn')
     .backgroundPalette('customBackground')
});
