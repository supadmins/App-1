angular.module('yyzWebApp')
    .controller('searchCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.$on('onpos', function ($event, pos) {
            var BMap = $rootScope.BMap,
                point = new BMap.Point(pos.longitude, pos.latitude),
                gc = new BMap.Geocoder();

            $scope.addressArr = [];

            gc.getLocation(point, function (rs) {
                var addComp = rs.addressComponents,
                    address = addComp.city + addComp.district + addComp.street + addComp.streetNumber;

                $scope.addressArr.push('当前地址: ' + address);
                $scope.$apply();
            });
        });

        $scope.$watch('keywords', function (value) {
            alert(value);
            if($rootScope.BMap) {
                var BMap = $rootScope.BMap,
                    autoComplete = new BMap.Autocomplete({
                        onSearchComplete: function (result) {
                            alert(JSON.stringify(result));
                        }
                    });
                autoComplete.search(value);
            }
        });
    }]);