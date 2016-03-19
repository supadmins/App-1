angular.module('yyzWebApp')
    .controller('myYyzCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.customer = true;
        $scope.seller = false;

        $scope.switch = function () {
            $scope.customer = !$scope.customer;
            $scope.seller = !$scope.seller;
        }
    }]);