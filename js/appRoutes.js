app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'partials/home.html'
        })
        .state('aboutMe', {
          url: '/aboutMe',
          templateUrl: 'partials/aboutMe.html'
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
        .state('contact', {
          url: '/contact',
          templateUrl: 'partials/contact.html'
        })  
				.state('skills', {
          url: '/skills',
          templateUrl: 'partials/skills.html'
        });    
});