angular.module('yyzBServiceMod', [])
    .factory('address', ['$http', 'baseUrl', function ($http, baseUrl) {
        return {
            'getAddressList': function () {
                return $http.get(baseUrl + 'api/GodAddress');
            },
            'getAddressItem': function (id) {
                return $http.get(baseUrl + 'api/GodAddress?Id=' + id);
            },
            'addAddress': function (params) {
                return $http.post(baseUrl + 'api/GodAddress/ShopOrderListByGodId', params);
            }
        };
    }]);