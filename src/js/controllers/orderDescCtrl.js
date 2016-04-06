angular.module('yyzWebApp')
    .controller('orderDescCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
        console.log($stateParams);
        console.log($stateParams.id);
        $scope.logistics = $scope.logisticsView = false;

        $scope.$on('onselectUniqe', function () {
            $scope.logistics = !$scope.logistics;
            $scope.$apply();
        });

        $scope.cancel = function () {
            $scope.logisticsView = false;
        };
    }]);