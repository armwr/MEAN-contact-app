var app = angular.module('myApp',[]);

app.controller('appCtrl',function($scope, $http) {

	$http.get('/contactList').success(function(response){
		console.log('I gove that data');
		$scope.contactList = response;
	})

})

