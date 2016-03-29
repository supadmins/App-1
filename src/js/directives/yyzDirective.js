angular.module('yyzDirectiveMod', ['oc.lazyLoad'])
    /**
     * yyzBanner指令依赖zepto swipeSlide插件 https://github.com/ximan/swipeSlide.git
     */
    .directive('yyzBanner', ['$http', '$timeout', '$ocLazyLoad', function ($http, $timeout, $ocLazyLoad) {
        return {
            restrict: 'E',
            scope: true,
            transclude: true,
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
                                scope.$emit('onDropload');
                                me.resetload();
                            }
                        });
                    });

            }
        }
    }])
    .directive('yyzTimelimiter', ['$interval', function ($interval) {
        return {
            restrict: 'E',
            scope: true,
            template: '<div class="timeLimiter"><span ng-bind="hour"></span>:<span ng-bind="min"></span>:<span ng-bind="sec"></span></div>',
            resplace: true,
            link: function (scope, element, attrs) {
                var endTime = new Date(attrs['endTime']),
                    counter = function () {
                        var now = new Date(),
                            diff = endTime.getTime() - now.getTime();
                        scope.hour = Math.floor(diff/ 1000 / 3600);
                        scope.min = Math.floor((diff / 1000 / 3600 - scope.hour) * 60);
                        scope.sec = Math.floor((diff / 1000 - scope.hour * 3600 - scope.min * 60));
                        if(scope.hour.toString().length == 1) scope.hour = '0' + scope.hour;
                        if(scope.min.toString().length == 1) scope.min = '0' + scope.min;
                        if(scope.sec.toString().length == 1) scope.sec = '0' + scope.sec;

                        if(scope.sec === 0) {
                            scope.$emit('activityEnd');
                            if(interval) {
                                $interval.cancel(interval);
                            }
                        }
                    };
                counter();

                var interval = $interval(function () {
                    counter();
                }, 1000);
            }
        }
    }])
    .directive('yyzUpload', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var fileElement = document.querySelector(attrs['yyzUpload']);
                element[0].addEventListener('click', function () {
                    fileElement.click();
                    scope.$apply();
                }, false);
            }
        }
    })
    .directive('yyzVouchers', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    if(element.html().toString().indexOf('领取成功') == -1) {
                        element.css('opacity', 0.5);
                        var html = '<div style="color: #ff9d06; font-size: 0.28rem; margin-top: 0.4rem; text-align: center">领取成功</div>';
                        element.append(html);
                    }
                })
            }
        }
    })
    .directive('yyzScrollSpy', function ($timeout) {
        return {
            link: function (scope, element, attrs) {
                var scrollTop, timeout, index = 0;
                element.on('scroll', function () {
                    scrollTop = $(element[0]).scrollTop();
                    var height = $(attrs['yyzScrollSpy']).height();
                    index = Math.floor(scrollTop / height);
                    scope.$emit('onScroll', index);
                });
            }
        }
    })
    .directive('yyzDelete', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var selector = attrs['yyzDelete'],
                    $ele = $(element[0]);

                $ele.click(function () {
                    $ele.parent('.left')
                        .css({
                            'transform': 'translateX(-1.16rem)',
                            '-webkit-transform': 'translateX(-1.16rem)'
                        });
                    $ele.parents('li').find(selector)
                        .css({
                            'width': '1.16rem'
                        });
                });
            }
        }
    })
    .directive('yyzMasker', function () {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                element.on('click', function (event) {
                    if(event.target.className.toString().indexOf('masker') > -1) {
                        scope.$emit('maskerClick');
                    }
                })
            }
        }
    });




