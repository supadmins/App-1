angular.module('yyzWebApp')
    .controller('allOrderCtrl', ['$scope', '$http', 'baseUrl', 'order', '$location', '$stateParams', '$state',
        function ($scope, $http, baseUrl, order, $location, $stateParams, $state) {
            $scope.contentView = true;
            $scope.searchView = false;
            $scope.goid = $stateParams.id;

            if (!$scope.goid) {
                alert("参数错误");
                $state.go(-1);
                return;
            }
            $scope.isAjax = true;
            $scope.status = "";//订单搜索状态
            $scope.$on('onselectUniqe', function ($event, data) {
                $scope.status = data;
                getData();
            })
            var params = {
                godId: $scope.goid,
                orderStatus: $scope.status,
                pageIndex: 1,
                pageSize: 5
            };

            function getData() {
                if ($scope.isAjax) {
                    order.shopgodinfobygodid($scope.goid).success(function (data) {
                        if (data.ResultStatus) {
                            $scope.user = data.ResultObject;
                        } else {
                            alert(data.ResultMessage);
                            return;
                        }
                    });
                    $scope.userinfotrue = false;
                }
                order.shoporderlistbygodid(params).success(function (data) {
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