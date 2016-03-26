angular.module('yyzWebApp')
    .controller('addGoodsCtrl', ['$scope', '$http', 'productType', 'FileUploader',
        function ($scope, $http, productType, FileUploader) {
            $scope.imgs = [
                'imgs/other/goods1.png'
            ];
            $scope.groupList = [];

            $scope.uploader = new FileUploader();

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
    }]);