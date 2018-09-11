(function() {


angular.module('fittanyUiApp')
       .controller('SignupController',
    	['$scope', '$state','SignupService',
    		function ($scope, $state, SignupService) {
        		console.log("This is signup controller");
        	$scope.state = $state;
        	$scope.radioAge = function(){
        	if($scope.user.age == "25below"){
        		$scope.below25 = "inputcheckboxactive";
        		$scope.above25 = "";
        		$scope.above65 = "";
        	}else if($scope.user.age == "2564") {
        		$scope.below25 = "";
        		$scope.above25 = "inputcheckboxactive";
        		$scope.above65 = "";
        	}else if($scope.user.age == "65above"){
        		$scope.below25 = "";
        		$scope.above25 = "";
        		$scope.above65 = "inputcheckboxactive";
        	}
        };

        $scope.pennAlum = function(){
        	if($scope.user.pennalum == "pennAlum"){
        		$scope.palum = "inputcheckboxactive";
        		$scope.alumActive = "radiocircleactive"
        		$scope.npalum = "";
        		$scope.noalumActive = ""
        	}else if($scope.user.pennalum == "noalum") {
        		$scope.palum = "";
        		$scope.npalum = "inputcheckboxactive";
        		$scope.alumActive = ""
        		$scope.noalumActive = "radiocircleactive"
        	}
        };

        var resetClass = function(){
                $scope.below25 = "";
                $scope.above25 = "";
                $scope.above65 = "";
                $scope.palum = "";
                $scope.alumActive = "";
                $scope.npalum = "";
                $scope.noalumActive = "";
        };

        $scope.submitFittanySignup = function(user){
        		var formData = {};
                var reset = {};
                $scope.error = false;
                $scope.success = false;
                // var paZip = "";
                // var checkZip = ZipService.get({zip: user.zip});
                //  console.log("zip res: " + checkZip);   
        		if(user){
                    var newuser = new SignupService();
        			formData = user;
                    newuser.data = formData;
                    var promise = newuser.$save();
                    promise.then(function(res){
                        $scope.error = false;
                        $scope.success = true;
                        $scope.message = res;
                        console.log(res);
                        $state.go("login");
                        
                    },function(err){
                        console.log("error occured while posting");
                        console.log(err);
                        $scope.error = true;
                        $scope.success = false;
                        $scope.message = err;
                    });
                        $scope.fittanySignupForm.$setPristine();
                        $scope.fittanySignupForm.$setUntouched();
                        $scope.user = angular.copy(reset);
                        resetClass();   
        			console.log("signup form value: " + Object.keys(formData));
        			
        		}
        };


    }]);
})();