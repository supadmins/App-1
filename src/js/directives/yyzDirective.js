angular.module('yyzDirectiveMod', ['oc.lazyLoad'])
    /**
     * yyzBanner指令依赖zepto swipeSlide插件 https://github.com/ximan/swipeSlide.git
     */
    .directive('yyzBanner', ['$http', '$timeout', '$ocLazyLoad', function ($http, $timeout, $ocLazyLoad) {
        return {
            restrict: 'E',
            scope: true,
            template: '<div class="slide" id="slide"><ul><li ng-repeat="banner in banners">'               +
            '<a ng-href="{{banner.link}}"><img ng-src="{{banner.imgSrc}}" alt=""></a>'           +
            '</li></ul><div class="dot"><span ng-repeat="banner in banners"></span></div></div>',
            replace: true,
            link: function (scope, element, attrs) {
                var apiUrl = attrs['api'];
                $http.get(apiUrl).success(function (data) {
                    if(data.length > 0) {
                        scope.banners = data;
                    }
                });
                /*使用$timeout延迟 等待dom树结构生成->绑定DOM事件*/
                $timeout(function () {
                    $ocLazyLoad.load("lib/swipeSlide/swipeSlide.min.js")
                        .then(function () {
                            $('#slide').swipeSlide({
                                continuousScroll:true,
                                speed : 3000,
                                transitionType : 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
                                firstCallback : function(i,sum,me){
                                    me.find('.dot').children().first().addClass('cur');
                                },
                                callback : function(i,sum,me){
                                    me.find('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
                                }
                            });
                        });
                }, 300);
            }
        }
    }])
    /**
     * yyzBanner指令依赖dropload 插件 https://github.com/ximan/dropload.git
     */
    .directive('yyzDropload', ['$http', '$ocLazyLoad', function ($http, $ocLazyLoad) {
        return {
            restrict: 'E',
            template: '<div ng-transclude></div>',
            transclude: true,
            replace: true,
            link: function (scope, element, attrs) {
                $ocLazyLoad.load("lib/dropload/dist/dropload.min.js")
                    .then(function () {
                        $('#' + attrs['id']).dropload({
                            scrollArea: window,
                            loadDownFn: function (me) {
                                $.ajax({
                                    type: 'GET',
                                    url: attrs['api'],
                                    dataType: 'json',
                                    success: function (data) {
                                        scope.shopList = [].concat(scope.shopList, data);
                                        scope.$apply();
                                        me.resetload();
                                    },
                                    error: function (xhr, type) {
                                        alert('请求数据失败!');
                                        me.resetload();
                                    }
                                });
                            }
                        });
                    });

            }
        }
    }]);




