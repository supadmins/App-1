angular.module('yyzWebApp')
    .controller('vouchSettingsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.title = '代金券';
        $scope.btn = '新增';
        $scope.listView = true;
        $scope.addView = false;

        $scope.add = function () {
            $scope.title = '代金券设置';
            $scope.btn = '完成';
            $scope.listView = false;
            $scope.addView = true;
        };

        //开始时间 结束时间 初始值
        $scope.month = $scope.day = $scope.hour = $scope.month1 = $scope.day1 = $scope.hour1 = '00';

        $scope.back = function () {
            $scope.title = '代金券';
            $scope.btn = '新增';
            $scope.listView = true;
            $scope.addView = false;
        }
    }]);