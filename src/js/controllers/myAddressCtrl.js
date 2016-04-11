angular.module('yyzWebApp')
    .controller('myAddressCtrl', ['$scope', '$http', 'addressHelper', 'address', function ($scope, $http, addressHelper, address) {

        initShowView();
        $scope.editAddress = function (item) {
            $scope.contentView = false;
            $scope.editView = true;
            $scope.title = '编辑地址';
            $scope.fname = '保存';
            addressHelper.addressItem = $scope.editModel = item;
            addressHelper.showView = "editView";
        };

        $scope.back = function () {
            if (!$scope.contentView) {
                $scope.title = '我的收货地址';
                $scope.fname = '新增地址';
                $scope.contentView = true;
                $scope.editView = $scope.addView = false;
            }
        };

        $scope.fn = function () {
            if ($scope.fname == '新增地址') {
                addressHelper.showView = "addView";
                $scope.contentView = $scope.editView = false;
                $scope.addView = true;
                $scope.fname = '保存';
            }
            else {
                var paramsModel = {};
                if ($scope.editModel) {
                    paramsModel = $scope.editModel;
                }
                else {
                    var params = {
                        Receiver: $scope.Receiver,
                        Sex: 1,
                        LocateAddress: $scope.LocateAddress,
                        Address: $scope.Address,
                        PhoneNumber: $scope.PhoneNumber
                    }
                    paramsModel = params;
                }
                saveAddress(paramsModel);
            }
        };

        function getMyAddressList() {
            address.getAddressList().success(function (data) {
                if (data.ResultStatus) {
                    $scope.items = data.ResultObject;
                } else {
                    //alert(data.ResultMessage)
                }
            });
        }


        function saveAddress(model) {
            if (model.Id) {
                address.editAddress(model).then(function (res) { })
            }
            else {
                address.addAddress(model).then(function (res) {

                })
            }
        }


        $scope.deleteAddress = function (id) {
            address.deleteAddress(id).then(function (res) {

            })
        }

        function initShowView() {
            if (addressHelper.showView == 'addView') {
                $scope.addView = true; $scope.contentView = $scope.edit = false;
                $scope.fname = '保存';
            }
            else if (addressHelper.showView == 'editView') {
                addressHelper.addressItem.LocateAddress = addressHelper.searchViewValue;
                $scope.editModel = addressHelper.addressItem;
                $scope.editView = true; $scope.contentView = $scope.addView = false;
                $scope.title = '编辑地址';
                $scope.fname = '保存';
            }
            else {
                $scope.title = '我的收货地址';
                $scope.fname = '新增地址';
                $scope.contentView = true;
                $scope.addView = false;
                getMyAddressList();
            }

        }
    }]);