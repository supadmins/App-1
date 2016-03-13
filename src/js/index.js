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
            });
    }]);


