(function(){

angular.module('fittanyUiApp')
    .config(function($stateProvider) {
        console.log("initializing signup component ...");
            $stateProvider
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'app/components/signup/signup.html',
                    controller: 'SignupController'

                });

    });
})();
