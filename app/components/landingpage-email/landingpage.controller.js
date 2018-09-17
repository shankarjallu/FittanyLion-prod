(function() {
    angular.module('fittanyUiApp')
        .controller('EmailETController',['$scope','$http','$state',

            function($scope,$http,$state) {
                console.log("this is in Landing Page email exact target");

               



                $scope.loginNotify = function() {


                    console.log("The email" + $scope.emailnotify);


                    var url = "/api/user";
                    $http.post(url)
                        .then(function(response) {
                            $state.go('notify')
                            console.log("this is success");
                        }, function(response) {
                          
                            console.log("this is error");
                     //just for dev testing  
                      // $state.go('notify')
                        });
                }

               

            }

        ]);
})();
