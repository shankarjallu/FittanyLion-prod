 (function() {

	angular.module('fittanyUiApp')
	.config(function ($httpProvider) {
		$httpProvider.interceptors.push('httpInterceptor');
	});
	
})();