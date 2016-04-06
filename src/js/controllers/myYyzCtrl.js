angular.module('yyzWebApp')
    .controller('myYyzCtrl', ['$scope', function ($scope) {
        $scope.customer = true;
        $scope.seller = false;

        $scope.switch = function () {
            $scope.customer = !$scope.customer;
            $scope.seller = !$scope.seller;
        }
    }]);