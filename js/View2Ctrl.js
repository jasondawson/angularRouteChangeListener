(function() {

angular
  .module('app')
  .controller('View2Ctrl', View2Ctrl);

  function View2Ctrl ($scope, getView2Text, mainService, $route) {
    var vm = this;
    vm.test = 'View2Ctrl';

    // getView2Text is resolved upon navigating to or refreshing this route

    vm.text = getView2Text;

    $scope.$on('submitText', function(isView2) {
      if(isView2) {
        $route.reload();
      }
    })
  }

})();
