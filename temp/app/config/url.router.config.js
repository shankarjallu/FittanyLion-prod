(function() {

angular.module('fittanyUiApp')
	.config(function ($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	});
	
})();