angular.module('yyzWebApp')
    .controller('eshopCtrl', ['$scope', '$http', '$location', '$anchorScroll', 'eshop', '$stateParams',
        function ($scope, $http, $location, $anchorScroll, eshop, $stateParams) {
            $scope.cartView = $scope.vouchersView = $scope.specView = $scope.shopMessageView =false;
            var params = {
                shopId: $stateParams.id || 1
            };

            eshop.getShopData(params).success(function (data) {
                if(data.ResultStatus) {
                    $scope.shopData = data.ResultObject;
                    $scope.category = data.ResultObject[0].ShopProductTypeName;
                }
            });

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

            $scope.showGoods = function (item) {
                $location.hash(item.ShopProductTypeName);
                $anchorScroll();
            };
    }]);

















