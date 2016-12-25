export default class HomeController {
  constructor($http, userService) {
    this.$http = $http
    this.user = userService
    this.name = 'home'
  }

  $onInit() {
    const data = {
      method: 'GET',
      url: 'api/test'
    }

    this.$http(data).then(function(resp) {
      console.log(resp.data)
    })
  }

  changeName() {
    this.name = 'angular-tips'
  }

  randomName() {
    this.name = this.user.getName()
  }
}

HomeController.$inject = ['$http', 'user']
