(function() {
    angular.module('fittanyUiApp')
        .controller('NotifyController',['$scope','$http','$state',

            function($scope,$http,$state) {
                console.log("this is in notify");



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
