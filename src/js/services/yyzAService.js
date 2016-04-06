angular.module('yyzAServiceMod', [])
    .factory('order', ['$http', 'baseUrl', function ($http, baseUrl) {
        return {
            'godorderlist': function (params) {
                params = params || {};
                return $http.get(baseUrl + 'api/Order/GodOrderList', {params: params});
            },
            'shoporderlist': function (params) {
                return $http.get(baseUrl + 'api/Order/ShopOrderList', {params: params});
            },
            'shopgodinfo': function (params) {
                return $http.get(baseUrl + 'api/Order/ShopOrderList', {params: params});
            }
        };
    }]);















