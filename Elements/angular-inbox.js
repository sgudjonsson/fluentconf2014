angular
	.module("inbox", [])
	.service("emailService", function($http) {
		this.getData = function() {
			return $http.get("email.json");
		};
	})
	.directive("inbox", function() {
		return {
			restrict: "E", 
			templateUrl: "angular-inbox-template.html",
			controller: function($scope, emailService) {
				$scope.emails = [];
				emailService.getData().then(function(results) {
					$scope.emails = results.data;
				});
			}
		}
	});
