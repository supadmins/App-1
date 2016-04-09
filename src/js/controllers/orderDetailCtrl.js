angular.module('yyzWebApp')
    .controller('orderDetailCtrl', ['$scope', '$http', 'baseUrl', 'order', '$location', '$stateParams', '$state',
        function ($scope, $http, baseUrl, order, $location, $stateParams, $state) {

            $scope.contentView = true;
            $scope.searchView = false;

            $scope.id=$stateParams.id;
            if(!$scope.id){
                alert("参数错误");
                $state.go(-1);
                return;
            }
            getData();
            function getData() {
                order.orderdetail($scope.id).success(function (data) {
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
