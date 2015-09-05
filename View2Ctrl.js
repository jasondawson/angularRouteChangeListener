(function() {

angular
  .module('app')
  .controller('View2Ctrl', View2Ctrl);

  function View2Ctrl ($scope, getView2Text, mainService, $route) {
    var vm = this;
    vm.test = 'View2Ctrl';

    vm.text = getView2Text;

    $scope.$on('submitText', function() {
      // vm.text = mainService.getView2Text();
      console.log('reloading');
      $route.reload();
    })
  }

})();
