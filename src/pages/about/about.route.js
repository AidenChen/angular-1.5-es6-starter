route.$inject = ['$stateProvider'];

export default function route($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    component: 'about'
  });
}
