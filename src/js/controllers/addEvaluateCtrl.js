angular.module('yyzWebApp')
    .controller('addEvaluateCtrl', ['$scope', '$http','order', '$stateParams',
        function ($scope, $http,order,$stateParams) {

        $scope.id=$stateParams.id;
            $scope.score=5;
            $scope.content="";
            $scope.save=function(){};
    }]);