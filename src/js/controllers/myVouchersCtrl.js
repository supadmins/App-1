angular.module('yyzWebApp')
    .controller('myVouchersCtrl', ['$scope', function ($scope) {
        $scope.invalidView = false;
        $scope.expired = true;
    }]);
