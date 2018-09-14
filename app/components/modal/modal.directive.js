(function(){
  angular.module('fittanyUiApp')
   .directive("modalPopup",['$http','$uibModal','$compile',
   function($http,$uibModal,$compile){
     return{
        restrict: 'A',
        scope: {
            modalSize: "@",
            modalHtml: "@",
            modalClass: "@"
            
            
        },
        link: function(scope,element,attrs){
           element.on('click',function(){
            var modalClass = scope.modalSize || '';
            var htmlTemplateUrl = scope.modalHtml;
            var modalInstance = "";
            var modalSize = scope.modalSize;
              
    var modalBody =  $http.get(htmlTemplateUrl).then(function (response) {
                var rawTemplate = response.data;
               var divElement = angular.element(document.querySelector('.modal-body'));
               var htmlElement = angular.element(rawTemplate);
               divElement.append(htmlElement);
               $compile(divElement);

            });

           

               var modalHtml = '<div class="modal-repository"><div class="modal-header">' +
                                    '<button type="button" ng-click="$dismiss()" class="close">&times;</button>' +
                                    '<p class="hidden-lg hidden-md modal-back"> <a href="#" ng-click="$dismiss() "> <span class="glyphicon glyphicon-chevron-left iconsize" aria-hidden="true"></span><span class="modal-back-position"> BACK </span></a></p>' +
                                    '</div>' +
                                    '<div class="modal-body"">' +
                                   
                    '</div></div>';
                   
                    modalInstance = $uibModal.open({
                        template: modalHtml,
                        windowClass: modalClass,
                        size: modalSize
                    });
                    return false;
           });
        }

     }
   }]);
}());


