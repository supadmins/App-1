angular.module('yyzWebApp', [
    'ui.router', 'oc.lazyLoad', 'yyzDirectiveMod', 'yyzServiceMod',
    'angularFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;

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
                        return $ocLazyLoad.load('js/controllers/homeCtrl.js');
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
                        return $ocLazyLoad.load('js/controllers/orderListCtrl.js');
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
                        return $ocLazyLoad.load('js/controllers/myYyzCtrl.js');
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
                        return $ocLazyLoad.load('js/controllers/orderStatusCtrl.js');
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
                        return $ocLazyLoad.load('js/controllers/orderDetailCtrl.js');
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
                        return $ocLazyLoad.load('js/controllers/returnGoodsCtrl.js');
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
                        return $ocLazyLoad.load('js/controllers/createOrderCtrl.js');
                    }]
                }
            })
            .state('login', {
                url: "/login",
                views: {
                    "lazyLoadView": {
                        controller: 'loginCtrl',
                        templateUrl: 'partials/login.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/loginCtrl.js');
                    }]
                }
            })
            .state('register', {
                url: "/register",
                views: {
                    "lazyLoadView": {
                        controller: 'loginCtrl',
                        templateUrl: 'partials/login.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/loginCtrl.js');
                    }]
                }
            })
            .state('personalCenter', {
                url: "/personalCenter",
                views: {
                    "lazyLoadView": {
                        controller: 'personalCenterCtrl',
                        templateUrl: 'partials/personalCenter.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/personalCenterCtrl.js');
                    }]
                }
            })
            .state('deliverAddress', {
                url: "/deliverAddress",
                views: {
                    "lazyLoadView": {
                        controller: 'deliverAddressCtrl',
                        templateUrl: 'partials/deliverAddress.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/deliverAddressCtrl.js');
                    }]
                }
            })
            .state('eshop', {
                url: "/eshop",
                views: {
                    "lazyLoadView": {
                        controller: 'eshopCtrl',
                        templateUrl: 'partials/eshop.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/eshopCtrl.js');
                    }]
                }
            })
            .state('shopDetail', {
                url: "/shopDetail",
                views: {
                    "lazyLoadView": {
                        controller: 'shopDetailCtrl',
                        templateUrl: 'partials/shopDetail.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/shopDetailCtrl.js');
                    }]
                }
            })
            .state('shopInfo', {
                url: "/shopInfo",
                views: {
                    "lazyLoadView": {
                        controller: 'shopInfoCtrl',
                        templateUrl: 'partials/shopInfo.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/shopInfoCtrl.js');
                    }]
                }
            })
            .state('myAllOrder', {
                url: "/myAllOrder",
                views: {
                    "lazyLoadView": {
                        controller: 'myAllOrderCtrl',
                        templateUrl: 'partials/myAllOrder.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/myAllOrderCtrl.js');
                    }]
                }
            })
            .state('addGoods', {
                url: "/addGoods",
                views: {
                    "lazyLoadView": {
                        controller: 'addGoodsCtrl',
                        templateUrl: 'partials/addGoods.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/addGoodsCtrl.js');
                    }]
                }
            })
            .state('orderDesc', {
                url: "/orderDesc",
                views: {
                    "lazyLoadView": {
                        controller: 'orderDescCtrl',
                        templateUrl: 'partials/orderDesc.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/orderDescCtrl.js');
                    }]
                }
            })
            .state('refunding', {
                url: "/refunding",
                views: {
                    "lazyLoadView": {
                        controller: 'refundingCtrl',
                        templateUrl: 'partials/refunding.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/refundingCtrl.js');
                    }]
                }
            })
            .state('consultHistory', {
                url: "/consultHistory",
                views: {
                    "lazyLoadView": {
                        controller: 'consultHistoryCtrl',
                        templateUrl: 'partials/consultHistory.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/consultHistoryCtrl.js');
                    }]
                }
            })
            .state('goodsManage', {
                url: "/goodsManage",
                views: {
                    "lazyLoadView": {
                        controller: 'goodsManageCtrl',
                        templateUrl: 'partials/goodsManage.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/goodsManageCtrl.js');
                    }]
                }
            })
            .state('goodsTypeManage', {
                url: "/goodsTypeManage",
                views: {
                    "lazyLoadView": {
                        controller: 'goodsTypeManageCtrl',
                        templateUrl: 'partials/goodsTypeManage.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/goodsTypeManageCtrl.js');
                    }]
                }
            })
            .state('selectType', {
                url: "/selectType",
                views: {
                    "lazyLoadView": {
                        controller: 'selectTypeCtrl',
                        templateUrl: 'partials/selectType.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/selectTypeCtrl.js');
                    }]
                }
            })
            .state('goodsTypeHelper', {
                url: "/goodsTypeHelper",
                views: {
                    "lazyLoadView": {
                        controller: 'goodsTypeHelperCtrl',
                        templateUrl: 'partials/goodsTypeHelper.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/goodsTypeHelperCtrl.js');
                    }]
                }
            })
            .state('addEvaluate', {
                url: "/addEvaluate",
                views: {
                    "lazyLoadView": {
                        controller: 'addEvaluateCtrl',
                        templateUrl: 'partials/addEvaluate.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/addEvaluateCtrl.js');
                    }]
                }
            })
            .state('shopManagement', {
                url: "/shopManagement",
                views: {
                    "lazyLoadView": {
                        controller: 'shopManagementCtrl',
                        templateUrl: 'partials/shopManagement.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/shopManagementCtrl.js');
                    }]
                }
            })
            .state('shopExamine', {
                url: "/shopExamine",
                views: {
                    "lazyLoadView": {
                        controller: 'shopExamineCtrl',
                        templateUrl: 'partials/shopExamine.html'
                    }
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('js/controllers/shopExamineCtrl.js');
                    }]
                }
            })
            .state('help', {
                url: "/help",
                views: {
                    "lazyLoadView": {
                        templateUrl: 'partials/help.html'
                    }
                }
            })
    }])
    .value('baseUrl', 'http://112.74.126.176:8899/');


