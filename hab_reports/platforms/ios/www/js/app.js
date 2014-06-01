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
	$scope.picture = function Picture(){
		alert("navigator: "+navigator.camera);
		navigator.camera.getPicture(onSuccess, onFail, {
	  				quality: 75,
	  				destinationType: Camera.Destination.DATA_URL,
	  				saveToPhotoAlbum: true
	  			});
		alert("something");
	  	function onSuccess(imageData) {
	  		alert("success");

	  	}

	  	function onFail(message){
	  		alert("fail");
	  	}
	}
}