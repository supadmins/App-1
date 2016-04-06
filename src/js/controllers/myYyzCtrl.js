angular.module('yyzWebApp')
    .controller('myYyzCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
        console.log($stateParams);
        $scope.customer = true;
        $scope.seller = false;

        $scope.switch = function () {
            $scope.customer = !$scope.customer;
            $scope.seller = !$scope.seller;
        }
    }]);