(function(){

angular.module('fittanyUiApp')
    .config(function($stateProvider) {
        console.log("initializing notify component ...");
            $stateProvider
                .state('notify', {
                    url: '/',
                    templateUrl: 'app/components/landing-page/notify.html',
                    controller: 'NotifyController',
                    controllerAs:'vm'

                });

    });
})();
