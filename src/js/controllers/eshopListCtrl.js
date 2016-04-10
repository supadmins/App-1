angular.module('yyzWebApp')
    .controller('eshopListCtrl', ['$scope', function ($scope) {
        $scope.scrollList = [1, 2, 3, 4, 5, 6, 7, 8];

        $scope.show = function (type) {
            ['categoryInfo', 'sortInfo', 'filterInfo'].forEach(function (name) {
                if(type != name) {
                    $scope[name] = false;
                }
            });
            $scope[type] = !$scope[type];
        };

        //获取当前地址经纬度
        $scope.$on('onpos', function ($event, pos) {
        });

        $scope.$on('onDropload', function (me) {
            $scope.scrollList.push(1);
            $scope.$apply();
        });
    }]);
