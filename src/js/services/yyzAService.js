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
            'shopgodinfobygodid': function (id) {
                return $http.get(baseUrl + 'api/GodGroup/ShopGodInfoByGodId?godId='+id);
            },
            'ConfirmationDelivery': function (params) {
            return $http.post(baseUrl + 'api/Order/BusinessConfirmDelivery', params);
            },
            'shoporderlistbygodid': function (params) {
                return $http.get(baseUrl + 'api/Order/ShopOrderListByGodId', {params: params});
            },
            'orderdetail': function (id) {
            return $http.get(baseUrl + 'api/Order?id='+id);

        }
        };
    }]);















