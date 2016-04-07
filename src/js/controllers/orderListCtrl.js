angular.module('yyzWebApp')
    .controller('orderListCtrl',   ['$scope', '$http', 'baseUrl', 'order', '$location', '$stateParams', '$state',
        function ($scope, $http, baseUrl, order, $location, $stateParams, $state) {

            $scope.contentView = true;
            $scope.searchView = false;

            getData();
            var params = {
                searchKey:"",
                pageIndex: 1,
                pageSize: 5
            };

            function getData() {
                order.godorderlist(params).success(function (data) {
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
