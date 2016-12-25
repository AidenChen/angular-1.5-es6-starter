export default function route($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    component: 'home'
  })
}

route.$inject = ['$stateProvider']
