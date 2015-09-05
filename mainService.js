(function() {

angular
  .module('app')
  .service('mainService', mainService);

  function mainService ($rootScope) {

    this.getView2Text = function() {
      return $rootScope.view2Text;
    }
  }

})();
