export default class Home {
  constructor($http) {
    this.$http = $http
  }

  getTestData() {
    const data = {
      method: 'GET',
      url: 'api/test'
    }

    return this.$http(data)
  }
}

Home.$inject = ['$http']
