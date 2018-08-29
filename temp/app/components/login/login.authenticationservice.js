(function() {
angular.module('fittanyUiApp')
 
 .factory('AuthService',['$http', '$timeout', 'Base64',
  function($http, $timeout, Base64){
      var service = {};

      service.Login = function(email,password,callback){
        alert("This is Login Service");

        //mock simulate the API for 1 second
        // $timeout(function(){
        //     var response = { success: email === 'test@email.com' && password === 'test' };
        //     if(!response.success) {
        //         response.message = 'Email or password is incorrect';
        //     }
        //     callback(response);
        // }, 1000);


        var authdata = Base64.encode(email + ':' + password);
        console.log(authdata);
        
        var mockUrl = 'app/components/login/login.json';
      
        $http({
            method: 'GET',
            url: mockUrl,
          }).then(function successCallback(response) {
              // this callback will be called asynchronously
                console.log("Login sucesss message");

              // when the response is available
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
                
                console.log("Login unsuccess message");
              // or server returns response with an error status.
            });

      }
       
   
    return service;

  }]);
})();