export default function route($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    component: 'about'
  })
}

route.$inject = ['$stateProvider']
