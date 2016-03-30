angular.module('yyzWebApp')
    .controller('shopManagementCtrl', ['$scope', function ($scope) {
        $scope.modifyView = true;
        $scope.left = $scope.max = 255;
        $scope.remark = '';

        $scope.calac = function () {
            $scope.left = ($scope.max - $scope.remark.length) > -1 ? ($scope.max - $scope.remark.length) : 0;
            if($scope.left <= 0) {
                $scope.remark = $scope.remark.substr(0, $scope.max);
            }
        };
    }]);