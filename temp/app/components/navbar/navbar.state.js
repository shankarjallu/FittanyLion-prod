(function() {

	var navbarComponentConfig = {
    	templateUrl: 'app/components/navbar/navbar.html',
    	controller: 'NavbarController',
    	controllerAs:'vm'
};

angular.module('fittanyUiApp')
        .component('navbar', navbarComponentConfig);
})();