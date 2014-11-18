var tablePrintApp = angular.module('tablePrintApp',[]); //[] is for all the dependencies of the StarterApp


tablePrintApp.controller('tablePrintController', function($scope){
    $scope.users = [
       {name:'France', email: 6301, description:"sdfdasd"},
       {name:'UK', email: 62.6,description:"ffffff"},
       {name:'UK1', email: 62.6,description:"ffffff"},
       {name:'UK2', email: 62.6,description:"ffffff"},
       {name:'UK3', email: 62.6,description:"ffffff"},
     ];
    //$scope.test = {message:"Hello T"};
    // $scope.selectUser = function (user) {
    //     $scope.selectedUser = user;
    //  };
    //  $scope.isSelected = function (user) {
    //     return $scope.selectedUser === user;
    //  };
     $scope.toggleSelected = function (user) {
        user.selected = !user.selected;
    };
    $scope.isSelected = function (user) {
        return user.selected;
    };

});