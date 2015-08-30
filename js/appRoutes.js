//app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//    
//    //$urlRouterProvider.otherwise('/home');
//    
//    $stateProvider
//        .state('home', {
//            url: '/home',
//            templateUrl: 'partials/home.html'
//        });
//        
//}]);
//

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
          url: '/home',
          templateUrl: 'partials/home.html'
        })
        .state('education', {
          url: '/education',
          templateUrl: 'partials/education.html'
        })
        .state('experience', {
          url: '/experience',
          templateUrl: 'partials/experience.html'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'partials/projects.html'
        })
        
});