var app = angular.module('app', ['ui.router', 'ngMaterial']);

app.controller('homeController', ['$rootScope', '$scope', '$mdDialog', function ($rootScope, $scope, $mdDialog) {
  "use strict";  
  
//  $scope.showAlert = function(ev) {
//    // Appending dialog to document.body to cover sidenav in docs app
//    // Modal dialogs should fully cover application
//    // to prevent interaction outside of dialog
//    $mdDialog.show(
//      $mdDialog.alert()
//        .parent(angular.element(document.querySelector('#popupContainer')))
//        .clickOutsideToClose(true)
//        .title('This is an alert title')
//        .textContent('You can specify some description text in here.')
//        .ariaLabel('Alert Dialog Demo')
//        .ok('Got it!')
//        .targetEvent(ev)
//    );
//  };

}]);

//app.controller('contactController', ['$rootScope', '$scope', function($rootScope, $scope) {
//  $scope.user = {
//    name: '',
//    email: ''
//  };
//  
//  $scope.submitContact = function() {
//    alert("Hi!");
//  };
//}]);