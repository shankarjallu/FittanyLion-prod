

(function() {
angular.module('fittanyUiApp')
 
.controller('LoginController',
    ['$scope','AuthService', '$state',
    function ($scope,AuthService,$state) {
        console.log("Inside login controller");
        $scope.state = $state;

         console.log($scope.state.current.name);
        $scope.login = function () {          
            //code for spinner comes here

            AuthService.Login($scope.email,$scope.password,function(response){
                if(response.success){
                     alert("correct details");
                }else{
                     alert("in correct details");
                }
            });
           
        };
        
    }]);



})();