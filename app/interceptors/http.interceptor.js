(function() {

    function httpInterceptor () {
        var service = {
            request: request,
            response: response
        };

        return service;

        function request (config) {
            console.log("inside request interceptor: " + config);
            config.headers = config.headers || {};
            config.headers['Access-Control-Allow-Origin'] =  "*";
            // config.headers['Access-Control-Allow-Headers:'] = "*";
            // config.headers['Access-Control-Allow-Methods'] = "*";

            return config;
        }
        function response (config) {
            console.log("inside response interceptor: " + config);
           // config.headers['Access-Control-Allow-Origin'] =  "*";
            return config;
        }
    }
    angular
        .module('fittanyUiApp')
        .factory('httpInterceptor', httpInterceptor);
})();
