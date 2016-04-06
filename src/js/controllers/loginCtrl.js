angular.module('yyzWebApp')
    .controller('loginCtrl',
        ['$scope', '$http', '$location',
         'baseUrl', 'user', 'util', '$state', function ($scope, $http, $location, baseUrl, user, util, $state) {
            $scope.view1 = false;
            $scope.disable = true;

            var url = $location.url();

            if(url.toString().indexOf('register') > -1) {
                $scope.view1 = true;
            }
            
            $scope.getCode = function () {
                util.getCode({
                    phoneNumber: $scope.phoneNumber,
                    imgCode: $scope.imgCode
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
                            if(res.status == 200 && res.data.ResultStatus) {
                                $state.go('index');
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
                            if(res.status == 200 && res.data.ResultStatus) {
                                $state.go('index');
                            }
                        })
                }
            };

            $scope.$on('onvalidator', function () {
                //console.log($scope.form.$error);
            });
    }]);