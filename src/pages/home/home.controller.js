export default class HomeController {
  constructor($http, userService, homeService) {
    this.$http = $http
    this.user = userService
    this.home = homeService
  }

  $onInit() {
    this.randomName()
    this.home.getTestData().then(function(resp) {
      console.log(resp.data)
    })
  }

  randomName() {
    this.name = this.user.getName()
  }
}

HomeController.$inject = ['$http', 'user', 'home']
