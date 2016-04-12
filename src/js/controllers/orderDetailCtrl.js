angular.module('yyzWebApp')
    .controller('orderDetailCtrl', ['$scope', '$http', 'order', '$location', '$stateParams', '$state',
        function ($scope, $http, order, $location, $stateParams, $state) {

            $scope.contentView = true;
            $scope.searchView = false;

            $scope.id=$stateParams.id;
            if(!$scope.id){
                alert("参数错误");
                history.go(-1);
                return;
            }
            initData();
            function initData() {
                order.orderdetail($scope.id).success(function (data) {
                    if (data.ResultStatus) {
                        $scope.items = data.ResultObject;
                    } else {
                        $state.go("orderList");
                        alert(data.ResultMessage);
                    }
                });
            }
            $scope.cancelOrder=function(){
                var params={id:$scope.id};
                order.cancelOrder(params).success(function (data) {
                    if (data.ResultStatus) {
                        alert("操作成功");
                    } else {
                        alert(data.ResultMessage)
                    }
                });
            };
            $scope.payOrder=function(){

            };
            $scope.showContent = function () {
                $scope.contentView = true;
                $scope.searchView = false;
            };
        }]);
