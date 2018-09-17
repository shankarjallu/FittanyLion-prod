(function(){

    angular.module('fittanyUiApp')
        .config(function($stateProvider) {
          //  console.log("initializing login component ...");
                $stateProvider
                    .state('prizelist', {
                        url: '/prizelist',
                        templateUrl: 'app/components/prizelist/prizelist.html',
                        controller: 'PrizelistController'
                        
    
                    });
    
        });
    })();
    