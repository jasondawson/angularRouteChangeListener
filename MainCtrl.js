(function() {

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl ($rootScope, $location) {
    var vm = this;
    vm.test = 'MainCtrl';

    vm.handleKeyup = function (event) {
      if (event.keyCode === 13) {
        // console.log(event);
        $rootScope.view2Text = vm.inputText;
        if(!$rootScope.view2) {
          $location.path('/view2');
        } else {
          console.log('on view2, emitting submitText event')
          $rootScope.$broadcast('submitText', $rootScope.view2);
        }
        vm.inputText = '';
      }
    }
  }

})();
