angular.module('yyzWebApp')
    .controller('myAllOrderCtrl',  ['$scope', '$http', 'baseUrl', 'order', '$location', '$stateParams', '$state',
        function ($scope, $http, baseUrl, order, $location, $stateParams, $state) {
            $scope.contentView = true;
            $scope.searchView = false;

            $scope.status = "";//订单搜索状态
            $scope.activisstatus=0;//订单类型1 正常订单，其他为维权订单
            $scope.$on('onselectUniqe', function ($event, res) {
                $scope.status = res;
                getData();
            });
            var params = {
                godId: $scope.goid,
                activistStatus:$scope.activisstatus,
                orderStatus: $scope.status,
                pageIndex: 1,
                pageSize: 5
            };

            function getData() {
                order.shoporderlist(params).success(function (data) {
                    if (data.ResultStatus) {
                        $scope.items = data.ResultObject;
                    } else {
                        alert(data.ResultMessage)
                    }
                });
            }

            $scope.showContent = function () {
                $scope.contentView = true;
                $scope.searchView = false;
            };
        }]);
