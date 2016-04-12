angular.module('yyzWebApp')
    .controller('addGoodsCtrl', ['$scope', '$http', 'productType',
        function ($scope, $http, productType) {
            var params = {
                name: $scope.name,
                productTypeId: $scope.typeId,
                remark: $scope.remark,
                productPictureBindingModelList: $scope.imgs,
                shipment: $scope.shipment,
                shopProductTypeIdList: $scope.types,
                productSpecificationGroupBindingModelList: $scope.grouplist,
                productSkuBindingModelList: $scope.skuList
            };

            var sku = {
                price: '',
                salesPrice: '',
                stock: '',
                productSpecificationBindingModelList: []
            };

            $scope.groupList = [];
            $scope.skuList = [];
            $scope.imgs = [
                {
                    picture: 'imgs/other/goods1.png'
                },
                {
                    picture: 'imgs/other/goods1.png'
                }
            ];

            $scope.doGroup = function () {
                $scope.view2 = true;
                $scope.view1 = false;
                productType.getTypeList().then(function (res) {
                    $scope.groupList = res.data.ResultObject;
                });
            };

            $scope.add = function () {
                productType.addType({ 'name': $scope.groupName })
                    .then(function () {
                        $scope.groupList.push({
                            Name: $scope.groupName
                        });
                    })
            };

            $scope.addSpec = function () {
                $scope.skuList.push(sku);
            };

            $scope.remove = function ($index) {
                $scope.skuList.splice($index, 1);
            };
    }]);