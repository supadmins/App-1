angular.module('yyzWebApp')
    .controller('deliverAddressCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.view1 = true;
        $scope.view2 = false;
        $scope.view3 = false;

        $scope.selectCity = function () {
            if($scope.view3) {
                $scope.view1 = true;
                $scope.view2 = false;
                $scope.view3 = false;
            }else {
                $scope.view1 = !$scope.view1;
                $scope.view2 = !$scope.view2;
            }
        };

        $scope.selectPos = function () {
            $scope.view1 = $scope.view2 = false;
            $scope.view3 = true;
        }
    }]);