(function() {

function NotifyController (DisclaimerService) {
		console.log("initializing notify controller..");
        var vm = this;
        vm.open = DisclaimerService.open;

};


angular.module('fittanyUiApp')
        .controller('NotifyController', NotifyController);
})();