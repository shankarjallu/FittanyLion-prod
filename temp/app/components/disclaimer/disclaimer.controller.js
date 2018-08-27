(function() {

function DisclaimerController ($uibModalInstance) {
        console.log("initializing disclaimer controller..");
        var vm = this;
        vm.cancel = cancel;

        function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

};


angular.module('fittanyUiApp')
        .controller('DisclaimerController', DisclaimerController);
})();