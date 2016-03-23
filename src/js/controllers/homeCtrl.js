angular.module('yyzWebApp')
    .controller('homeCtrl', ['$scope', '$http', 'User', function ($scope, $http, User) {

        $scope.categoryInfo = $scope.sortInfo = $scope.filterInfo = false;

        $scope.scrollList = [
            {'src': 'imgs/home/shop.jpg', 'content': 'angular下拉组件测试'},
            {'src': 'imgs/home/shop.jpg', 'content': 'angular下拉组件测试'},
            {'src': 'imgs/home/shop.jpg', 'content': 'angular下拉组件测试'}
        ];

        $scope.show = function (type) {
            ['categoryInfo', 'sortInfo', 'filterInfo'].forEach(function (name) {
                if(type != name) {
                    $scope[name] = false;
                }
            });

            $scope[type] = !$scope[type];
        };

        $scope.$on('onDropload', function () {
        });
    }]);