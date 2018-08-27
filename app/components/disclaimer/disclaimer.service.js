(function() {

function DisclaimerService ($uibModal) {
        console.log("initializing disclaimer service..");
        var service = {
            open: open
        };

        var modalInstance = null;
        var resetModal = function () {
            modalInstance = null;
        };

        return service;   

        function open () {
            if (modalInstance !== null) return;
            modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/components/disclaimer/disclaimer.html',
                controller: 'DisclaimerController',
                controllerAs: 'vm'
            });
            modalInstance.result.then(
                resetModal,
                resetModal
            );
        }  

};


angular.module('fittanyUiApp')
        .factory('DisclaimerService', DisclaimerService);
})();