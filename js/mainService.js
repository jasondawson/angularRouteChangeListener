(function() {

angular
  .module('app')
  .service('mainService', mainService);


  function mainService ($rootScope) {

    // I'm saving something here to be returned to view2 as a resolve, which is the important part of this app. The idea is that I could return any data (i.e. from an API call) on the resolve, which would refresh

    var view2Text = '';

    this.setView2Text = function(newText) {
      view2Text = newText;
    }

    this.getView2Text = function() {
      return view2Text;
    }
  }

})();
