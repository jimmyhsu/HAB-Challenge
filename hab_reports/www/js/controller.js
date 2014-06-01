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

.controller('CreateReportCtrl', function($scope){
	$scope.picture = "img/no_pic_available.jpg"
	$scope.hiddenNameOfWaterBody = false;
	$scope.hiddenNameOfDrinkingSource = false;
	$scope.hiddenTypeOfSample = false;
	$scope.hiddenWhereAnalysis = false;

	$scope.takePhoto = function(){
		navigator.camera.getPicture(onSuccess, onFail, { 
			quality: 100,
			saveToPhotoAlbum: true,
			encodingType: Camera.EncodingType.JPEG
		});

		function onSuccess(imageURI) {
		    $scope.picture = imageURI;
		}

		function onFail(message) {
		    alert('Failed because: ' + message);
		}

	}

	$scope.questions = [
		{question: "Any color in water column?", answers:["No","Yes"]},
		{question: "Color of the water?", answers:["Green","Blue","Red","Rust","Brown","Milky White","Purple","Black"]},
		{question: "Near drinking source?", answers:["No","Yes"]},
		{question: "Near public lake?", answers:["No","Yes","Unknown"]},
		{question: "Near public beach?", answers:["No", "Yes", "Unknown"]},
		{question: "Were samples taken?", answers:["No", "Yes"]},
	];

	$scope.inputForms = [
		{prompt: "Estimate size (sq feet) of bloom", displ:true},
		{prompt: "What is the name of the body of water?", displ:$scope.hiddenNameOfDrinkingSource},
		{prompt: "What is the name of the drinking source?", displ:$scope.hiddenNameOfDrinkingSource},
		{prompt: "What type of samples?", displ:$scope.hiddenTypeOfSample},
		{prompt: "Sent where for analysis?", displ:$scope.hiddenWhereAnalysis}
	];

})

.controller('AboutCtrl', function($scope){
	
})

.controller('SettingsCtrl', function($rootScope){

})


