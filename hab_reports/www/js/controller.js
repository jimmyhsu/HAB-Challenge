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

.controller('HomeCtrl', function($scope,$state){
	$scope.createReport = function(){
		$state.go("createreport")
	}
})

.controller('CreateReportCtrl', function($scope, $window){
	$scope.picture = "img/no_pic_available.jpg"
	$scope.hiddenNameOfWaterBody = true;
	$scope.hiddenNameOfDrinkingSource = true;
	$scope.hiddenTypeOfSample = true;
	$scope.hiddenWhereAnalysis = true;

	$scope.takePhoto = function(){
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 50,
			saveToPhotoAlbum: true,
      destinationType: Camera.DestinationType.FILE_URI
		});

		function onSuccess(imageURI) {
      var elem = $window.document.getElementById("report-photo");
      elem.src = imageURI;
		}

    function onFail(message) {
      setTimeout(function(){
        alert('Failed because: ' + message);
      }, 0.5);
    }

	}

	$scope.questions = [
		{question: "Any color in water column?", answers:["Yes","No"]},
		{question: "Color of the water?", answers:["Green","Blue","Red","Rust","Brown","Milky White","Purple","Black"]},
		{question: "Near drinking source?", answers:["Yes","No"]},
		{question: "Near public lake?", answers:["Yes","No","Unknown"]},
		{question: "Near public beach?", answers:["Yes", "No", "Unknown"]},
		{question: "Were samples taken?", answers:["Yes", "No"]},
	];

	$scope.inputForms = ["Estimate size (sq feet) of bloom","What is the name of the body of water?","What is the name of the drinking source?","What type of samples?","Sent where for analysis?"];



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


