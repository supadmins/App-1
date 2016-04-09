angular.module('yyzWebApp')
    .controller('myAddressCtrl', ['$scope', '$http', 'addressHelper', 'address', '$rootScope', function ($scope, $http, addressHelper, address, $rootScope) {
        $scope.title = '我的收货地址';
        $scope.fname = '新增地址';
        $scope.contentView = true;
        $scope.addView = $scope.addressView = false;
        $scope.addressArray = ['广东省'];
        addressHelper.originState = 'myAddress';

        $scope.editAddress = function (item) {
            $scope.contentView = false;
            $scope.editView = true;
            $scope.title = '编辑地址';
            $scope.fname = '保存';
            $scope.editModel = item;
        };

        $scope.back = function () {
            if (!$scope.contentView) {
                $scope.title = '我的收货地址';
                $scope.fname = '新增地址';
                $scope.contentView = true;
                $scope.editView = $scope.addView = $scope.addressView = false;
            }
        };

        $scope.fn = function () {
            if ($scope.fname == '新增地址') {
                $scope.contentView = $scope.editView = false;
                $scope.addView = true;
                $scope.fname = '保存';
            }
            if ($scope.fname == '保存') {
                saveAddress();
            }
        };
        getMyAddressList();
        function getMyAddressList() {
            address.getAddressList().success(function (data) {
                if (data.ResultStatus) {
                    $scope.items = data.ResultObject;
                } else {
                    alert(data.ResultMessage)
                }
            });
        }


        function saveAddress()
        {

        }
    }]);