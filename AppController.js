function AppController ($scope) {
	$scope.sum = 2 + 3; 

	$scope.sayHello = function () {
		alert('Hello ' + $scope.username);
	};

	setTimeout(function() {
		$scope.$apply(function() {
			$scope.username = "Enter your username here";	
		});
		
	}, 2 * 1000);
}