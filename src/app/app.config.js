export default function config($urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/')
  $httpProvider.interceptors.push('interceptor')
}

config.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider']
