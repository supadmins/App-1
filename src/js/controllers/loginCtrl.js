angular.module('yyzWebApp')
    .controller('loginCtrl',
        ['$scope', '$http', '$location',
         'baseUrl', 'user', 'util', function ($scope, $http, $location, baseUrl, user, util) {
            $scope.view1 = false;
            var url = $location.url();

            if(url.toString().indexOf('register') > -1) {
                $scope.view1 = true;
            }
            
            $scope.getCode = function () {
                util.getCode({
                    phoneNumber: $scope.phoneNumber,
                    imgCode: $scope.imgCode
                }).then(function (res) {

                });
            };

            $scope.bind = function () {
                if($scope.view1) {
                    var regParams = {
                        phoneNumber: $scope.phoneNumber,
                        imgCode: $scope.imgCode,
                        code: $scope.code,
                        recommendCode: ''
                    };

                    user.register(regParams)
                        .then(function (res) {
                            if(res.status == 200) {
                                alert('注册成功');
                            }
                        });
                }else {
                    var loginParams = {
                        phoneNumber: $scope.phoneNumber,
                        code: $scope.code,
                        redirectUrl: ''
                    };

                    user.login(loginParams)
                        .then(function (res) {
                            if(res.status == 200) {
                                alert('登陆成功');
                            }
                        })
                }
            };
    }]);