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
            .state('orderStatus', {
                url: "/orderStatus",
                views: {
                    "lazyLoadView": {
                        controller: 'orderStatusCtrl',
                        templateUrl: 'partials/orderStatus.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/orderStatusCtrl.js')
                    }]
                }
            })
            .state('orderDetail', {
                url: "/orderDetail",
                views: {
                    "lazyLoadView": {
                        controller: 'orderDetailCtrl',
                        templateUrl: 'partials/orderDetail.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/orderDetailCtrl.js')
                    }]
                }
            })
            .state('returnGoods', {
                url: "/returnGoods",
                views: {
                    "lazyLoadView": {
                        controller: 'returnGoodsCtrl',
                        templateUrl: 'partials/returnGoods.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/returnGoodsCtrl.js')
                    }]
                }
            })
            .state('createOrder', {
                url: "/createOrder",
                views: {
                    "lazyLoadView": {
                        controller: 'createOrderCtrl',
                        templateUrl: 'partials/createOrder.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/createOrderCtrl.js')
                    }]
                }
            })
    }]);


