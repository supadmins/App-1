angular.module('yyzWebApp')
    .controller('shopExamineCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.defaultImg = 'imgs/other/carmer.png';

        $scope.$on('onselect', function () {
        });
    }]);