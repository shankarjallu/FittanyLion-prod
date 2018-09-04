(function() {

function NavbarController (VERSION) {
		console.log("initializing navbar controller..");
        var vm = this;
        vm.version = VERSION;

        vm.isNavbarCollapsed = true;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
       // vm.horrizontalCollapse = true;

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
           // vm.horrizontalCollapse = !vm.horrizontalCollapse;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
           // vm.horrizontalCollapse = true;
        }
};

NavbarController.$inject = ['VERSION'];

angular.module('fittanyUiApp')
        .controller('NavbarController', NavbarController);
})();