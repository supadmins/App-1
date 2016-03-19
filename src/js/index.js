angular.module('yyzWebApp', ['ui.router', 'oc.lazyLoad', 'yyzDirectiveMod', 'yyzServiceMod'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('index', {
                url: "/",
                views: {
                    "lazyLoadView": {
                        controller: 'homeCtrl',
                        templateUrl: 'partials/home.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/homeCtrl.js')
                    }]
                }
            })
            .state('orderList', {
                url: "/orderList",
                views: {
                    "lazyLoadView": {
                        controller: 'orderListCtrl',
                        templateUrl: 'partials/orderList.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/orderListCtrl.js')
                    }]
                }
            })
            .state('myYyz', {
                url: "/myYyz",
                views: {
                    "lazyLoadView": {
                        controller: 'myYyzCtrl',
                        templateUrl: 'partials/myYyz.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/myYyzCtrl.js')
                    }]
                }
            })
    }]);


