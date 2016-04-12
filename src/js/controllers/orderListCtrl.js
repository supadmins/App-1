angular.module('yyzWebApp')
    .controller('orderListCtrl',   ['$scope', '$http', 'baseUrl', 'order', '$location', '$stateParams', '$state',
        function ($scope, $http, baseUrl, order, $location, $stateParams, $state) {

            $scope.contentView = true;
            $scope.searchView = false;

            initData();
            var params = {
                searchKey:"",
                pageIndex: 1,
                pageSize: 5
            };

            function initData() {
                order.godorderlist(params).success(function (data) {
                    if (data.ResultStatus) {
                        $scope.items = data.ResultObject;
                    } else {
                        alert(data.ResultMessage)
                    }
                });
            }
            $scope.cancelOrder=function(id){
                var params={id:id};
                order.cancelOrder(params).success(function (data) {
                    if (data.ResultStatus) {
                        alert("操作成功");
                    } else {
                        alert(data.ResultMessage)
                    }
                });
            };
            $scope.showContent = function () {
                $scope.contentView = true;
                $scope.searchView = false;
            };
        }]);
