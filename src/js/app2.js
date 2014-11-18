var starterApp = angular.module('StarterApp',[]); //[] is for all the dependencies of the StarterApp

starterApp.controller('WrldCtrl', function($scope){
   //$scope.test = {message:"Hello World"};
   //var WrldCtrl = function($scope){
     $scope.population = 7000;
     $scope.countries = [
       {name:'France', population: 6301},
       {name:'UK', population: 62.6},
     ];

    $scope.wPercent = function(cPopulation){
      return(cPopulation / $scope.population)*100;
    };
});
