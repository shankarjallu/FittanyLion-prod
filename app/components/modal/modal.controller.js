(function(){
    angular.module('fittanyUiApp').
    controller("ModalController",
    ['$scope','$http',
    function($scope,$http){
       console.log("This is in Modal Cntrl");
       var modalController = this;
    }]);
}());