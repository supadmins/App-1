angular.module('yyzWebApp')
    .controller('eshopCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.cartView = false;
        $scope.vouchersView = false;
        $scope.specView = true;

        $scope.showCartInfo = function () {
            $scope.cartView = !$scope.cartView;
        };

        $scope.$on('maskerClick', function () {
            $scope.cartView = false;
            $scope.$apply();
        });

        $scope.showVouchers = function () {
            $scope.cartView = false;
            $scope.vouchersView = true;
        };

        $scope.hideVouchers = function () {
            $scope.vouchersView = false;
        };

        $scope.receive = function () {

        };
    }]);