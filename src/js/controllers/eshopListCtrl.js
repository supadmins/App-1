angular.module('yyzWebApp')
    .controller('eshopListCtrl', ['$scope', function ($scope) {
        $scope.scrollList = [1, 2, 3, 4, 5, 6];

        $scope.show = function (type) {
            ['categoryInfo', 'sortInfo', 'filterInfo'].forEach(function (name) {
                if(type != name) {
                    $scope[name] = false;
                }
            });

            $scope[type] = !$scope[type];
        };

        $scope.$on('onDropload', function () {
            try {
                $scope.scrollList = [].concat($scope.scrollList, $scope.scrollList);
                console.log($scope.scrollList.length);
            } catch(ex){
                console.log(ex.message);
            }
        });

        $scope.$on('onpos', function ($event, pos) {
        });
    }]);