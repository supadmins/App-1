angular.module('yyzWebApp')
    .controller('homeCtrl', ['$scope', '$http', '$rootScope', 'home', function ($scope, $http, $rootScope, home) {
        $scope.address = '正在定位当前位置';
        $scope.categoryInfo = $scope.sortInfo = $scope.filterInfo = false;
        var params = {
            longitude: '',
            latitude: '',
            shopProductTypeId: '',
            orderBy: '',
            screenBy: '',
            pageIndex: '1',
            pageSize: ''
        };

        $scope.show = function (type) {
            ['categoryInfo', 'sortInfo', 'filterInfo'].forEach(function (name) {
                if(type != name) {
                    $scope[name] = false;
                }
            });

            $scope[type] = !$scope[type];
        };

        $scope.$on('onpos', function ($event, pos) {
            var BMap = $rootScope.BMap,
                point = new BMap.Point(pos.longitude, pos.latitude),
                gc = new BMap.Geocoder();
            $scope.pos = pos;
            gc.getLocation(point, function (rs) {
               var addComp = rs.addressComponents;
                $scope.address = addComp.city + addComp.district + addComp.street;
            });
            params.latitude = pos.latitude;
            params.longitude = pos.longitude;
            home.getShopList(params)
                .success(function (data) {
                    if(data.ResultStatus) {
                        $scope.scrollList = data.ResultObject;
                    }
                });
        });

        $scope.$on('onDropload', function (me) {
            if(params.latitude && params.longitude) {
                home.getShopList(params)
                    .success(function (data) {
                        if(data.ResultStatus) {
                            $scope.scrollList.push(1);
                        }else {
                            me.noData();
                        }
                    });
            }
        });
    }]);