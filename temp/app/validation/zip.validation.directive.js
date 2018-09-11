(function() {

    var zipCheck = function(ZipService,$q,$timeout) {
        return {
            require: 'ngModel',
            link: function(scope,elem,attrs,ctrl){
                ctrl.$asyncValidators.pazip = function(value){
                    var deferred = $q.defer();
                    console.log("zip value: " + value);
                    //$timeout(function() {
                        var checkZip = ZipService.get({zip:value});
                        checkZip.$promise.then(function(data){
                            if(data.CountiesMessage.payload.counties.stateAbbreviation === "PA"){
                                console.log("PA zip: ");
                                //ctrl.$error.zipCheck = false;
                                deferred.resolve();
                            }else {
                                console.log("not a PA zip");
                                //ctrl.$error.zipCheck = true;
                                 deferred.reject();
                            }
                        },function(err){
                            console.log("not a PA zip");
                            //ctrl.$error.zipCheck = true;
                             deferred.reject();
                        });
                   // },2000);
                    return deferred.promise;
                }; 
            }
        };
    };

    angular
        .module('fittanyUiApp')
        .directive('zipCheck', zipCheck);
}());
