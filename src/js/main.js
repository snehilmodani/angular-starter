var starterApp = angular.module('StarterApp',[]); //[] is for all the dependencies of the StarterApp


starterApp.controller('NotesController', function($scope, $timeout){
    $scope.test = {message:"Hello World"};
    //$scope.test = {message:"Hello T"};

    $timeout(function(){

      $scope.test.message = "Hello Universe";

    }, 2000);
});
var clear = function(){
        alert($scope.message);
        $scope.message="";
    };
starterApp.controller('TextLimitController', function($scope){
    $scope.MAX_LENGHT=100;
    $scope.message="Hello World";
    
    $scope.remaining = function(){
        //console.log($scope.MAX_LENGHT);
        //console.log($scope.message.length);
        return $scope.MAX_LENGHT - $scope.message.length;
    };
    $scope.hasValidLength = function(){
        console.log($scope.remaining);
        if(this.remaining > 0)
        {
            console.log(true);
            return true;
        }
        else
        {
            console.log(false);
            return false;
        }
    };
    
    
    

    // $scope.test.remaining = function(){
    //     alert(MAX_LENGHT);
    //     alert($scope.test.message.length);
    // 	return $scope.MAX_LENGHT - $scope.test.message.length;
    // };

    // $scope.test.hasValidLength = function(){
    // 	if($scope.remaining() > 0)
    // 	{
    // 		return true;
    // 	}
    // 	else
    // 	{
    // 		return false;
    // 	}
    // };
});