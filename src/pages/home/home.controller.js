export default class HomeController {
  constructor($http, userService) {
    this.$http = $http
    this.user = userService
  }

  $onInit() {
    this.randomName()

    const data = {
      method: 'GET',
      url: 'api/test'
    }

    this.$http(data).then(function(resp) {
      console.log(resp.data)
    })
  }

  randomName() {
    this.name = this.user.getName()
  }
}

HomeController.$inject = ['$http', 'user']
