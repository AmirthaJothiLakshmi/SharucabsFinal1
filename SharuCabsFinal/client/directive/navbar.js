angular.module('Sharucabs').directive('navbar',() => ({
  templateUrl:'../views/navigation.html',
  restrict :"E",
  controller:'NavigationController',
  controllerAs:'navigation'
}));
