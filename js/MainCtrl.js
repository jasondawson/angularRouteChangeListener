(function() {

angular
  .module('app')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl ($rootScope, $location, mainService) {
    var vm = this;
    vm.test = 'MainCtrl';

    // This controller is handling the text input. This is simulating a search bar in the header that will perform a search (via an API call) and resolve the data on view2.

    vm.handleKeyup = function (event) {

      // if enter key is pressed, either navigate to view2 (which will perform the resolve on the route) or broadcast an event that view2's controller can listen for and perform a $route.reload (which will perform the resolve).

      if (event.keyCode === 13) {
        mainService.setView2Text(vm.inputText);
        if(!$rootScope.view2) {
          $location.path('/view2');
        } else {
          $rootScope.$broadcast('submitText', $rootScope.view2);
        }
        vm.inputText = '';
      }
    }
  }

})();
