var app = angular.module('myApp',[]);

app.controller('appCtrl',function($scope, $http) {

	var refresh = function() {
		$http.get('/contactList').success(function(response){
			console.log('I gove that data');
			$scope.contactList = response;
			$scope.contact = "";
		})
	}

	refresh();

	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactList', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	}

})

