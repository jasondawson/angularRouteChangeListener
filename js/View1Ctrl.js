(function() {

angular
  .module('app')
  .controller('View1Ctrl', View1Ctrl);

  function View1Ctrl () {
    var vm = this;
    vm.test = 'View1Ctrl';
  }

})();
