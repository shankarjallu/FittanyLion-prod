(function(){

angular.module('fittanyUiApp')
    .config(function($stateProvider) {
      //  console.log("initializing login component ...");
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/components/login/login.html',
                    controller: 'LoginController'
                    

                });

    });
})();
