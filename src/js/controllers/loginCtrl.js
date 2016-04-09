angular.module('yyzWebApp')
    .controller('loginCtrl',
        ['$scope', '$http', '$location', 'baseUrl',
         'user', 'util', '$state', 'validator', '$rootScope',
            function ($scope, $http, $location, baseUrl, user, util, $state, validator, $rootScope) {
                $scope.view1 = false;
                $scope.disable = true;
                $scope.validator = validator;

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
                                if(res.data.ResultStatus) {
                                    user.hasLogin = true;

                                    if($rootScope.redirectUrl) {
                                        window.location.href = $rootScope.redirectUrl;
                                    }else {
                                        $state.go('index');
                                    }
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
                                if(res.data.ResultStatus) {
                                    user.hasLogin = true;

                                    if($rootScope.redirectUrl) {
                                        window.location.href = $rootScope.redirectUrl;
                                    }else {
                                        $state.go('index');
                                    }
                                }
                            })
                    }
                };
    }]);