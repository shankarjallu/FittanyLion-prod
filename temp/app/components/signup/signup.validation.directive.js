(function() {
    angular
        .module('fittanyUiApp')
        .directive('signupValidation', signupValidation);

    function signupValidation () {
        var directive = {
            restrict: 'A',
            require: '^form',
            link: linkFunc
        };

        return directive;

        function linkFunc (scope, element, attrs, formCtrl) {
            element.find('form').each(function() {
                var $formGroup = angular.element(this);
                var $inputs = $formGroup.find('input[ng-model],textarea[ng-model],select[ng-model]');
                var $agree = $formGroup.find('.custom-checkbox');
                var $agreeEle = angular.element($agree);
                var $radios = $formGroup.find('input[type=radio]');
                    $radios.each(function() {
                        var $radio = angular.element(this);
                        $radio.checkboxradio({
                            icon:false
                        });

                    });
                $agreeEle.click(function(event) {
                    event.preventDefault();
                    if(($agreeEle).hasClass("custom-checkmark")){
                        $($agreeEle).removeClass("custom-checkmark");
                    }else {
                        $agreeEle.addClass("custom-checkmark");
                    }

                });
                

                if ($inputs.length > 0) {
                    $inputs.each(function() {
                        var $input = angular.element(this);
                        var inputName = $input.attr('name');
                        scope.$watch(function() {
                            return formCtrl[inputName].$invalid && formCtrl[inputName].$dirty;
                        }, function(isInvalid) {
                            $input.toggleClass('has-error', isInvalid);
                        });
                    });
                }
            });
        }
    }
})();
