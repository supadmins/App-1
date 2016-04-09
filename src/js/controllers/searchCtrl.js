angular.module('yyzWebApp')
    .controller('searchCtrl', ['$scope', 'addressHelper', '$rootScope', '$state', function ($scope, addressHelper, $rootScope, $state) {
        $scope.address = '正在定位当前位置';
        $scope.city = '定位中';
        $scope.keyword = '';

        $scope.$on('onpos', function ($event, pos) {
            var BMap = $rootScope.BMap,
                point = new BMap.Point(pos.longitude, pos.latitude),
                gc = new BMap.Geocoder();

            $scope.addressArr = [];
            gc.getLocation(point, function (rs) {
                var addComp = rs.addressComponents;
                $scope.city = addComp.city;
                $scope.address = '当前地址: ' + addComp.city + addComp.district + addComp.street + addComp.streetNumber;

                $scope.$apply();
            });
        });

        $scope.$watch('keyword', function (value) {
            if($rootScope.BMap) {
                var BMap = $rootScope.BMap,
                    autoComplete = new BMap.Autocomplete({
                        input: 'keywords',
                        onSearchComplete: function (result) {
                            $scope.addressArr.length = 0;
                            result.wr.forEach(function (addComp) {
                                var item = addComp.city + addComp.district +
                                    addComp.street + addComp.streetNumber + addComp.business;
                                $scope.addressArr.push(item);
                            });

                            $scope.$apply();
                        }
                    });
                autoComplete.search(value);
                autoComplete.setInputValue(value);
            }
        });

        $scope.selected = function (item) {
            addressHelper.searchViewValue = item;
            var params = {};
            if(addressHelper.originState == 'myAddress') {
            }

            $state.go(addressHelper.originState, params);
        };
    }]);