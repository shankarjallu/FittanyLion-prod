(function(){
    angular.module('fittanyUiApp')
     .directive("emailExacttarget",['$http',
     function($http){
       return{
        restrict: 'E',
        templateUrl: 'temp/app/components/landingpage-email/landingpageemail.html'
  
       }
     }]);
  }());
  
  
  