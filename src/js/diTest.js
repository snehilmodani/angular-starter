var DIApp = angular.module('DIApp',['cars', 'engines']); //[] is for all the dependencies of the App

var cars = angular.module('cars', []);
var engines = angular.module('engines',[]);

var BrandName = function(){
    return{
        name:'Hyundai'
    };
};

DIApp.value('brandName', new BrandName());

DIApp.service('carNameService', function(brandName){
    this.name = brandName;
});

DIApp.factory('carNameFactory', ['MAX_LENGHT', function(MAX_LENGHT){
    var MAX_LENGHT2 = MAX_LENGHT;

    return function getMaxLength(){
        return MAX_LENGHT2;
    };
}]);

DIApp.constant('MAX_LENGHT', 20);

DIApp.config(['carNameProProvider',function(carNameProProvider) {
    carNameProProvider.setMaxLength(22);
}])

DIApp.provider('carNamePro', function(){
    var config = {
        maxLen:10
    };
    return {
        setMaxLength : function(maxLen){
            config.maxLen = maxLen || config.maxLen;
        },
        $get: function(){
            return {
                getMaxLength: function(){
                    return config.maxLen;
                },
            };
        },
    }
});

DIApp.run( function($rootScope){
    $rootScope.appStarted = new Date();
});

DIApp.controller('UIController', ['$scope', 'brandName', 'carNameService', 'carNameFactory', 'MAX_LENGHT', 'carNamePro', function($scope,brandName, carNameService, carNameFactory, MAX_LENGHT, carNamePro){
    console.log(carNameFactory);
    $scope.x = brandName.name;
    if($scope.x=='Hyudai2')
    {
        carNameService($scope.x);
    }
    $scope.y = carNameFactory();
    $scope.z = MAX_LENGHT; 
    $scope.a = carNamePro.getMaxLength();
}]);

// DIApp.controller('UIController', function($scope,brandName){
//     $scope.x = brandName.name;
// });
