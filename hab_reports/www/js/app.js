angular.module('main', ['ionic']);

function OverlordCtrl($scope){
	$scope.isUserAccepted = false;

	$scope.toggleUserAccepted = function(){
		$scope.isUserAccepted = !$scope.isUserAccepted;
	}
}

function DisclaimerCtrl(){
}

function CameraCtrl($scope){
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
}

function LoginCtrl($scope){
}
