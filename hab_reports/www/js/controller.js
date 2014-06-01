angular.module('main.controllers', [])


.controller('OverlordCtrl',function($scope){

})

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
	
})

.controller('AboutCtrl', function($scope){
	
})

.controller('SettingsCtrl', function($scope){
	
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


