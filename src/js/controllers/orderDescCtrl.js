angular.module('yyzWebApp')
    .controller('orderDescCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.logistics = $scope.logisticsView = false;

        $scope.$on('onselectUniqe', function () {
            $scope.logistics = !$scope.logistics;
            $scope.$apply();
        });

        $scope.cancel = function () {
            $scope.logisticsView = false;
        };
    }]);