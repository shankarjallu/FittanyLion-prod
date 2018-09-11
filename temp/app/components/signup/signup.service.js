(function() {
    function SignupService ($resource) {
        console.log("initializing signup service..");

        return $resource('http://localhost:8000/posts:id', {id:'@id'},
                    {
                            update: {method:'PUT'},
                            
                    });  
    };


angular.module('fittanyUiApp')
       .factory('SignupService',SignupService);
})();