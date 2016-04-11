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
                return $http.post(baseUrl + 'api/GodAddress', params);
            },
            'editAddress': function (params) {
                return $http.put(baseUrl + 'api/GodAddress', params);
            },
            'deleteAddress': function (id) {
                return $http.delete(baseUrl + 'api/GodAddress', {Id:id});
            },
            'setDefault': function (id) {
                return $http.post(baseUrl + 'api/GodAddress/SetDefault', { Id: id })
            }
        };
    }]);