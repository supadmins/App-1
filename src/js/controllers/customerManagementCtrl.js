angular.module('yyzWebApp')
    .controller('customerManagementCtrl', ['$scope', function ($scope) {
        $scope.contentView = true;
        $scope.editView = false;
        $scope.maskerView = false;
    }]);