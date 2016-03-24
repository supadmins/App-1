angular.module('yyzWebApp')
    .controller('shopDetailCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.hideSpec = function () {
            $scope.specView = false;
        };

        $scope.ShowSpec = function () {
            $scope.specView = true;
        }
    }]);