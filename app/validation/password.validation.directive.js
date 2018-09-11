(function() {
    angular
        .module('fittanyUiApp')
        .directive('passwordCheck', passwordCheck);

    function passwordCheck () {

        return {
            require: 'ngModel',
            link: function(scope,elem,attrs,ctrl){
               var firstPassword = '#' +attrs.passwordCheck;
               elem.append(firstPassword).on('keyup',function(){
                scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
               });
                
            }
        };
    };
})();
