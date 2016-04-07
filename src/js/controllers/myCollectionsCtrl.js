angular.module('yyzWebApp')
    .controller('myCollectionsCtrl', ['$scope', function ($scope) {
        $scope.$on('onselectUniqe', function ($event, data) {
            alert(data);
            $scope.$apply();
        });
    }]);

