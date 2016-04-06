angular.module('yyzServiceMod', [])
    .factory('util', ['$http', '$location', 'baseUrl', function ($http, $location, baseUrl) {
        return {
            'getCode': function (params) {
                params = params || {};
                var url = baseUrl;

                if ($location.url().toString().indexOf('register') > -1) {
                    url = baseUrl + 'api/Comm/RegisterSmsCode?phoneNumber=' + params.phoneNumber + '&imgCode=' + params.imgCode;
                } else {
                    url = baseUrl + 'api/Comm/LoginSmsCode?phoneNumber=' + params.phoneNumber + '&imgCode=' + params.imgCode;
                }

                return $http.get(url);
            }
        };
    }])
    .factory('user', ['$http', 'baseUrl', function ($http, baseUrl) {
        return {
            'register': function (params) {
                params = params || {};
                return $http.post(baseUrl + 'api/God/Register', params);
            },
            'login': function (params) {
                params = params || {};
                return $http.post(baseUrl + 'api/God/Login', params);
            },
            'logout': function () {
                return $http.post(baseUrl + 'api/God/Logout');
            }
        };
    }])
    .factory('interceptor', ['$q', function ($q) {
        return {
            response: function (res) {
                var deferred = $q.defer(),
                    httpCode = res.status;

                if(httpCode == 401) {
                    window.location.href = '#/login';
                }
                deferred.resolve(res);

                return deferred.promise;
            }
        };
    }])
    .factory('productType', ['$http', 'baseUrl', function ($http, baseUrl) {
        return {
            'getTypeList': function () {
                return $http.get(baseUrl + 'api/ShopProductType');
            },
            'addType': function (params) {
                return $http.post(baseUrl + 'api/ShopProductType', params);
            }
        };
    }]);














