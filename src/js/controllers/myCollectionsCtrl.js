angular.module('yyzWebApp')
    .controller('myCollectionsCtrl', ['$scope', function ($scope) {
        $scope.$on('onselectUniqe', function ($event, data) {
            $scope.$apply();
        });
    }]);

