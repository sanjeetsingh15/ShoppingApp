var loginModule = angular.module('myApp.login', []);
var signupModule = angular.module('myApp.signup', []);
var homeModule = angular.module('myApp.home', []);
var menuModule = angular.module('myApp.menu', []);


angular.module('myApp', [
    'myApp.login',
    'myApp.signup','myApp.home' ,'myApp.menu'
]);