var starterApp = angular.module('StarterApp',[]);


starterApp.controller('NotesController', function($scope, $timeout){
    $scope.test = {message:"Hello World"};
    //$scope.test = {message:"Hello T"};

    $timeout(function(){

      $scope.test.message = "Hello Universe";

    }, 2000);
});
