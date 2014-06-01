angular.module('main.controllers', [])

.controller('LoginCtrl', function($scope,$state){
	$scope.login = function(){
		$state.go("disclaimer")
	}
})

.controller('DisclaimerCtrl', function($scope,$state){
	$scope.acceptDisclaimer = function(){
		$state.go("tab.home")
	}
})

.controller('HomeCtrl', function($scope){
	$scope.createReport = function(){
		$state.go("createreport")
	}
})

.controller('CreateReportCtrl', function($scope){
	
})

.controller('AboutCtrl', function($scope){
	
})

.controller('SettingsCtrl', function($rootScope, $scope){
	$rootScope.saveInf = function() {
		console.log("asdas");
		$rootScope.login.fname = $scope.login.fname;
		$rootScope.login.lname = $scope.login.lname;
		$rootScope.login.org = $scope.login.org;
		$rootScope.login.tel = $scope.login.tel;
		$rootScope.login.email = $scope.login.email;
	}

})

.controller('CameraCtrl', function($scope){
	$scope.takenPicture = "img/no_pic_available.jpg"
	
	$scope.picture = function Picture(){
		navigator.camera.getPicture(onSuccess, onFail, {
	  				quality: 75,
	  				destinationType: Camera.Destination.DATA_URL,
	  			});

	  	function onSuccess(imageData) {
	  		alert("success");

	  	}

	  	function onFail(message){
	  		alert("fail");
	  	}
	}
});


