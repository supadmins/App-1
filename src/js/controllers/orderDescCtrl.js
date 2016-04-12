angular.module('yyzWebApp')
    .controller('orderDescCtrl', ['$scope','$state','order','$stateParams',
    function ($scope, $state,order,$stateParams) {

        $scope.logistics = $scope.logisticsView = false;
        $scope.id=$stateParams.id;
        if(!$scope.id){
            alert("参数错误");
            history.go(-1);
            return;
        }
        $scope.$on('onselectUniqe', function () {
            $scope.logistics = !$scope.logistics;
            $scope.$apply();
        });
        initData();
        $scope.deliveryNumber = "";//物流单号
        $scope.expressName = "圆通快递";//选中物流名称
        $scope.express = [
            {"id":"1","name":"圆通快递"},
            {"id":"2","name":"德邦快递"},
            {"id":"3","name":"优速快递"},
            {"id":"4","name":"EMS"}];

        function initData(){
            order.orderdetail($scope.id).success(function (data) {
                if (data.ResultStatus) {
                    $scope.items = data.ResultObject;
                } else {
                    alert(data.ResultMessage)
                }
            });
        }

        //确认发货
        $scope.confirm = function(){
            var params = {
                id:$scope.id,
                deliveryNumber: $scope.deliveryNumber,
                deliveryCompany: $scope.expressName
            };
            order.confirmationdelivery(params).success(function(data){
                if (data.ResultStatus) {
                    alert("操作成功");
                    $scope.logisticsView = false;
                } else {
                    alert(data.ResultMessage)
                }
            });
        };

        $scope.cancel = function () {
            $scope.logisticsView = false;
        };
    }]);