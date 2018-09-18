(function() {
    angular.module('fittanyUiApp')
        .controller('NotifyController',['$scope','$http','$state','DisclaimerService',

            function($scope,$http,$state,DisclaimerService) {
                console.log("this is in notify");

                $scope.open = function(){
                    DisclaimerService.open();
                }

                $scope.loginNotify = function() {


                    console.log("The email" + $scope.emailnotify);


                    var url = "/api/user";
                    $http.post(url)
                        .then(function(response) {
                           
                        
                        }, function(response) {
                          
                     //just for dev testing  
                       $state.go('login')
                        });
                }

            }

        ]);
})();
