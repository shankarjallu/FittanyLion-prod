

(function() {
angular.module('fittanyUiApp')
 
.controller('LoginController',
    ['$scope', 'AuthService',
    function ($scope, AuthService) {
        console.log("This is login controller");
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