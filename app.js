(function() {

angular
  .module('app', ['ngRoute'])
  .config(config)
  .run(run);

  function config ($routeProvider) {
    $routeProvider
      .otherwise('/view1')
      .when('/view1', {
        templateUrl: '/view1.html',
        controller: 'View1Ctrl',
        controllerAs: 'vm'
      })
      .when('/view2', {
        templateUrl: '/view2.html',
        controller: 'View2Ctrl',
        controllerAs: 'vm',
        resolve: {
          getView2Text: function(mainService) {
            return mainService.getView2Text();
          }
        }
      })
  };

  function run ($route, $rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if(next.$$route.originalPath === '/view2') {
        $rootScope.view2 = true;
        // console.log($rootScope.view2);
      } else {
        $rootScope.view2Text = '';
        $rootScope.view2 = false;
        // console.log($rootScope.view2);
      }
      // console.log(current, next);
    })
  }

})();
