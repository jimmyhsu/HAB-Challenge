angular.module('main.controllers', [])

.controller('LoginCtrl', function($rootScope, $scope,$state){
	$rootScope.user = {title:'', fname: '', lname: '', org: '', tel: '', email: ''};
	$scope.login = function(){
		$state.go("disclaimer")
	}

})

.controller('DisclaimerCtrl', function($scope,$state){
	$scope.acceptDisclaimer = function(){
		//$state.go("tab.home")
		$state.go("tab.settings")
	}
})

.controller('HomeCtrl', function($scope,$state){
	$scope.createReport = function(){
		$state.go("createreport")
	}
	$scope.logout = function(){
		$state.go("login")
	}
})

.controller('CreateReportCtrl', function($scope, $window){
	$scope.picture = "img/no_pic_available.jpg"
	$scope.hiddenNameOfWaterBody = false;
	$scope.hiddenNameOfDrinkingSource = false;
	$scope.hiddenTypeOfSample = false;
	$scope.hiddenWhereAnalysis = false;

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

.controller('SettingsCtrl', function($rootScope, $scope, $window){
	//console.log($window.document.getElementById('user-title').value);
	
	$window.document.getElementById('user-title').value = $rootScope.user.title;
	$window.document.getElementById('user-fname').value = $rootScope.user.fname;
	$window.document.getElementById('user-lname').value = $rootScope.user.lname;
	$window.document.getElementById('user-org').value = $rootScope.user.org;
	$window.document.getElementById('user-tel').value = $rootScope.user.tel;
	$window.document.getElementById('user-email').value = $rootScope.user.email;

	$scope.saveInf = function() {
		$rootScope.user.title = $window.document.getElementById('user-title').value;
		$rootScope.user.fname = $window.document.getElementById('user-fname').value;
		$rootScope.user.lname = $window.document.getElementById('user-lname').value;
		$rootScope.user.org = $window.document.getElementById('user-org').value;
		$rootScope.user.tel = $window.document.getElementById('user-tel').value;
		$rootScope.user.email = $window.document.getElementById('user-email').value;
		console.log($rootScope.user);
		// console.log($window.document.getElementByaId('user-fname').value);
		// $rootScope.user.fname = $scope.user.fname;
		// $rootScope.user.lname = $scope.user.lname;
		// $rootScope.user.org = $scope.user.org;
		// $rootScope.user.tel = $scope.user.tel;
		// $rootScope.user.email = $scope.user.email;
		
	}

})


