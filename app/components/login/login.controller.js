

(function() {
angular.module('fittanyUiApp')
 
.controller('LoginController',
    ['$scope','AuthService', '$state','$localStorage',
    function ($scope,AuthService,$state,$localStorage) {
        console.log("Inside login controller");
        $scope.state = $state;

        //login form submit action for test
         // $scope.submitFittanyLogin = function(user){
         //        var formData = {};                
         //        if(user){
         //            formData.user = user;
         //            console.log("logged in user: " + user.email + " : " + user.password
         //                );
         //            if(user.rememberme){
         //                $localStorage.rememberUser = formData;
         //            }

         //        }
         //    }

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