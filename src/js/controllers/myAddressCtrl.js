angular.module('yyzWebApp')
    .controller('myAddressCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.title = '我的收货地址';
        $scope.fname = '新增地址';
        $scope.contentView = true;
        $scope.addView = $scope.addressView = false;
        $scope.addressArray = ['广东省'];

        $scope.editAddress = function () {
            $scope.contentView = false;
            $scope.editView = true;
            $scope.title = '编辑地址';
            $scope.fname = '保存';
        };

        $scope.back = function () {
            if(!$scope.contentView) {
                $scope.title = '我的收货地址';
                $scope.fname = '新增地址';
                $scope.contentView = true;
                $scope.editView = $scope.addView = $scope.addressView = false;
            }
        };

        $scope.fn = function () {
            if($scope.fname == '新增地址') {
                $scope.contentView = $scope.editView = false;
                $scope.addView = true;
            }
        };
    }]);