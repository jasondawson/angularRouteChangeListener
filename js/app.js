(function() {

angular
  .module('app', ['ngRoute'])
  .config(config)
  .run(run);

  function config ($routeProvider) {
    $routeProvider
      .otherwise('/view1')
      .when('/view1', {
        templateUrl: 'views/view1.html',
        controller: 'View1Ctrl',
        controllerAs: 'vm'
      })
      .when('/view2', {
        templateUrl: 'views/view2.html',
        controller: 'View2Ctrl',
        controllerAs: 'vm',
        //resolve is grabbing data from the service, this is to simulate behavior where we would get data from an API call and resolve that data into view2's controller on navigation or refresh
        resolve: {
          getView2Text: function(mainService) {
            return mainService.getView2Text();
          }
        }
      })
  };

  // before any route change, check the path and set $rootscope.view2 true or false
  // this will be used on view2's controller to determine if a refresh of the text is necessary


  function run ($route, $rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if(next.$$route.originalPath === '/view2') {
        $rootScope.view2 = true;
      } else {
        $rootScope.view2Text = '';
        $rootScope.view2 = false;
      }
    })
  }

})();
