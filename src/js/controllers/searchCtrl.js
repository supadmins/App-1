angular.module('yyzWebApp')
    .controller('searchCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.address = '正在定位当前位置';

        $scope.$on('onpos', function ($event, pos) {
            var BMap = $rootScope.BMap,
                point = new BMap.Point(pos.longitude, pos.latitude),
                gc = new BMap.Geocoder();

            $scope.addressArr = [];
            gc.getLocation(point, function (rs) {
                var addComp = rs.addressComponents;
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
                            console.log($scope.keyword);
                        }
                    });
                autoComplete.search(value);
            }
        });
    }]);