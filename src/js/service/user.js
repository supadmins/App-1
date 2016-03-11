angular.module('userMod', [])
    .provider('User', {
        _apiUrl: '',
        setApiUrl: function (apiUrl) {
            this._apiUrl = apiUrl;
        },
        $get: ['$http', function ($http) {
            var me = this;
            return {
                login: function (params) {
                    var url = me._apiUrl + '/login';
                    $http.post(url, params)
                        .success(function (res) {
                            console.log(res);
                        })
                }
            }
        }]
    });
