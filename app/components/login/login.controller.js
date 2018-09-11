

(function() {
angular.module('fittanyUiApp')
 
.controller('LoginController',
    ['$scope','$state','$localStorage',
    function ($scope,$state,$localStorage) {
        console.log("Inside login controller");
        $scope.state = $state;
         $scope.submitFittanyLogin = function(user){
                var formData = {};                
                if(user){
                    formData.user = user;
                    console.log("logged in user: " + user.email + " : " + user.password
                        );
                    if(user.rememberme){
                        $localStorage.rememberUser = formData;
                    }

                }
            }
        
    }]);



})();