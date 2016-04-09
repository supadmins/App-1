angular.module('yyzWebApp')
    .controller('myYyzCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.customer = true;
        $scope.seller = false;

        $scope.switch = function () {
            $scope.customer = !$scope.customer;
            $scope.seller = !$scope.seller;
        }
    }]);