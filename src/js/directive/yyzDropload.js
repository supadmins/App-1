angular.module('yyzDroploadMod', [])
    .directive('yyzDropload', ['$http', function ($http) {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
                $('#' + attrs['id']).dropload({
                    scrollArea : window,
                    loadDownFn : function(me){
                        $.ajax({
                            type: 'GET',
                            url: attrs['api'],
                            dataType: 'json',
                            success: function(data){
                                scope.shopList = [].concat(scope.shopList, data);
                                /**
                                 * 页面首次渲染不需call $applay
                                 * 后续触发调用dropload插件 需要手动触发digest循环
                                 */
                                scope.$apply();
                                me.resetload();
                            },
                            error: function(xhr, type){
                                alert('Ajax error!');
                                me.resetload();
                            }
                        });
                    }
                });
            }
        }
    }]);