(function() {

function NavbarController (VERSION) {
		console.log("initializing navbar controller..");
        var vm = this;
        vm.version = VERSION;

        vm.isNavbarCollapsed = true;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }
};

NavbarController.$inject = ['VERSION'];

angular.module('fittanyUiApp')
        .controller('NavbarController', NavbarController);
})();