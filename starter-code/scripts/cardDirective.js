angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

function wdiCard(){
  var directive = {
    //'A' == attribute, 'E' == element, 'C' == class
    restrict: 'E',
    replace: true,
    templateUrl:  "templates/cardDirective.html",
    scope: {
        question: '@'
    }
  };

  return directive;
}