var angApp = angular.module('angApp', []);

angApp.controller('MainCtrl', function($scope, $http){
	$scope.getDate = function(){
		$http.get('/whoami').then(
			function(res){
				$scope.whoami = res.data;
			}, 
			function(err){
			console.log(err);
		});
	};
	$scope.getDate();
});

