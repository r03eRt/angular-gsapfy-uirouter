(function () {

  'use strict';

  console.log(angular.version);

  angular.module('MainCtrl', []).controller('MainCtrl', ['$scope', '$state', '$log',
    function ($scope, $state, $log) {

      $scope.$on('gsapifyRouter:enterStart', function (event, element) {
        if ($state.history.length) {
          $log.log('gsapifyRouter:enterStart', element.attr('ui-view'), element.attr('data-state'));
        }
      });

      $scope.$on('gsapifyRouter:leaveStart', function (event, element) {
        if ($state.history.length) {
          $log.log('gsapifyRouter:leaveStart', element.attr('ui-view'), element.attr('data-state'));
        }
      });

      $scope.$on('gsapifyRouter:leaveSuccess', function (event, element) {
        if ($state.history.length) {
          $log.log('gsapifyRouter:leaveSuccess', element.attr('ui-view'), element.attr('data-state'));
        }
      });

    },
  ]);

  angular.module('InicioCtrl', []).controller('InicioCtrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

  angular.module('NuestroMenuCtrl', []).controller('NuestroMenuCtrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

  angular.module('NosotrosCtrl', []).controller('NosotrosCtrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

    angular.module('NuestromenuCtrl', []).controller('NuestromenuCtrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

  angular.module('ContactoCtrl', []).controller('ContactoCtrl', ['$scope', '$log',
    function ($scope, $log) {
      $scope.$on('gsapifyRouter:enterSuccess', function (event, element) {
        $log.log('gsapifyRouter:enterSuccess', element.attr('ui-view'), element.attr('data-state'));
      });
    },
  ]);

  angular.module('JaleoApp', ['ngAnimate', 'ui.router', 'mobile-angular-ui', 'hj.gsapifyRouter', 'MainCtrl',
   'InicioCtrl', 'NosotrosCtrl', 'NuestroMenuCtrl', 'ContactoCtrl'])

    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'gsapifyRouterProvider',
      function ($stateProvider, $locationProvider, $urlRouterProvider, gsapifyRouterProvider) {

        gsapifyRouterProvider.initialTransitionEnabled = true;

        gsapifyRouterProvider.defaults = {
          enter: 'slideRight',
          leave: 'slideLeft',
        };

        gsapifyRouterProvider.transition('slideAbove', {
          duration: 1,
          ease: 'Quart.easeInOut',
          css: {
            y: '-100%',
          },
        });

        gsapifyRouterProvider.transition('slideBelow', {
          duration: 1,
          ease: 'Quart.easeInOut',
          css: {
            y: '100%',
          },
        });

        gsapifyRouterProvider.transition('slideLeft', {
          duration: 1,
          ease: 'Quint.easeInOut',
          css: {
            x: '-100%',
          },
        });

        gsapifyRouterProvider.transition('slideRight', {
          duration: 1,
          ease: 'Quint.easeInOut',
          delay: 0.5,
          css: {
            x: '100%',
          },
        });

        gsapifyRouterProvider.transition('fadeIn', {
          duration: 0.5,
          delay: 0.5,
          css: {
            opacity: 0,
          },
        });

        gsapifyRouterProvider.transition('fadeOut', {
          duration: 0.5,
          css: {
            opacity: 0,
          },
        });

        gsapifyRouterProvider.transition('scaleDown', {
          duration: 0.5,
          css: {
            scale: 0,
            opacity: 0,
          },
        });

        // $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('inicio', {
          url: '/',
          views: {
            main: {
              templateUrl: 'example/inicio.html',
              controller: 'InicioCtrl',
            },
          },
          data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'slideLeft',
                  priority: 1,
                },
                out: {
                  transition: 'slideRight',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('nosotros', {
          url: '/nosotros',
          views: {
            main: {
              templateUrl: 'example/nosotros.html',
              controller: 'NosotrosCtrl',
            },
          },
                   data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'slideLeft',
                  priority: 1,
                },
                out: {
                  transition: 'slideRight',
                  priority: 1,
                },
              },
            },
          },
        });

        $stateProvider.state('nuestro-menu', {
          url: '/nuestro-menu',
          views: {
            main: {
              templateUrl: 'example/nuestro-menu.html',
              controller: 'NuestroMenuCtrl',
            },
          },
                    data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'slideLeft',
                  priority: 1,
                },
                out: {
                  transition: 'slideRight',
                  priority: 1,
                },
              },
            },
          },
        });

          $stateProvider.state('contacto', {
          url: '/contacto',
          views: {
            main: {
              templateUrl: 'example/contacto.html',
              controller: 'ContactoCtrl',
            },
          },
                    data: {
            'gsapifyRouter.main': {
              enter: {
                'in': {
                  transition: 'slideBelow',
                  priority: 1,
                },
                out: {
                  transition: 'slideAbove',
                  priority: 1,
                },
              },
            },
          },
        });


      },
    ]);

  angular.module('JaleoApp').run(['$templateCache', function ($templateCache) {
    $templateCache.put('example/inicio.html', '<div class=\'wrapper\' style=\'background: #81B270\'><h1>Inicio</h1></div>');
    $templateCache.put('example/nosotros.html', '<div class=\'wrapper\' style=\'background: #FF7F40\'><h1>nosotros</h1></div>');
    $templateCache.put('example/nuestro-menu.html', '<div class=\'wrapper\' style=\'background: #7F80B2\'><h1>Nuestro-menu</h1></div>');
    $templateCache.put('example/contacto.html', '<div class=\'wrapper\' style=\'background: lightblue\'><h1>Contactanos</h1></div>');

  }]);

})();
