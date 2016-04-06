angular.module('yyzWebApp')
    .controller('allOrderCtrl', ['$scope', '$http', 'baseUrl', 'order', '$location',
        function ($scope, $http, baseUrl, order, $location) {
            $scope.contentView = true;
            $scope.searchView = false;
//alert($location.search().id);
            $scope.userinfotrue = true;
            $scope.status = 0;
            $scope.$on('onselectUniqe', function ($event, data) {
                $scope.status = data;
                getData();
                $scope.$apply();
            })
            var parm = "status:";

            function getData() {
                order.shoporderlist().success(function (data) {
                    if (data.ResultStatus) {
                        $scope.items = data.ResultObject;
                        ;
                    } else {
                        alert(data.ResultMessage)
                    }
                });
                if ($scope.userinfotruie) {

                    $scope.userinfotrue = false;
                }
            }

            $scope.showContent = function () {
                $scope.contentView = true;
                $scope.searchView = false;
            };
        }]);