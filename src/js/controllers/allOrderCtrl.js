angular.module('yyzWebApp')
    .controller('allOrderCtrl', ['$scope', function ($scope) {
        $scope.contentView = true;
        $scope.searchView = false;

        $scope.showContent = function () {
            $scope.contentView = true;
            $scope.searchView = false;
        };
    }]);