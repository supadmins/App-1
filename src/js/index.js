angular.module('indexApp', ['yyzBannerMod', 'userMod', 'yyzDroploadMod'])
    .config(['UserProvider' , function (UserProvider) {
        UserProvider._apiUrl = 'http://www.xxx.com';
    }])
    .controller('indexCtrl', ['$scope', '$http', 'User', function ($scope, $http, User) {
        $scope.shopList = [
            {'src': 'imgs/index/7b633bf4-f94a-43ff-86a2-15f0d83f5c80.jpg', 'content': 'angular组件测试'},
            {'src': 'imgs/index/7b633bf4-f94a-43ff-86a2-15f0d83f5c80.jpg', 'content': 'angular组件测试'},
            {'src': 'imgs/index/7b633bf4-f94a-43ff-86a2-15f0d83f5c80.jpg', 'content': 'angular组件测试'}
        ];
    }]);

