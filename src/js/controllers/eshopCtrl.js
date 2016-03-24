angular.module('yyzWebApp')
    .controller('eshopCtrl', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
        $scope.cartView = false;
        $scope.vouchersView = false;
        $scope.specView = false;
        $scope.shopMessageView = false;
        $scope.goods = [
            1, 2, 3, 4, 5, 1, 2, 3, 4, 5,1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
            1, 2, 3, 4, 5, 1, 2, 3, 4, 5,1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
            1, 2, 3, 4, 5, 1, 2, 3, 4, 5,1, 2, 3, 4, 5, 1, 2, 3, 4, 5
        ];

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

        $scope.showSpec = function () {
            $scope.specView = true;
        };

        $scope.hideSpec = function () {
            $scope.specView = false;
        };

        $scope.closeMessageView = function () {
            $scope.shopMessageView = false;
        };

        $scope.showMessageView = function () {
            $scope.shopMessageView = true;
        };

        $scope.$on('onScroll', function (e, index) {
        })
    }]);

















