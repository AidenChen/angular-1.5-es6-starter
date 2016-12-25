export default class Interceptor {
  constructor($q, $window, $location) {
    this.$q = $q
    this.$window = $window
    this.$location = $location
  }

  request = (config) => {
    config.headers = config.headers || {}
    if (this.$window.sessionStorage.token) {
      config.headers.Authorization = 'AidenChen'
    }
    return config
  }

  requestError = (rejection) => {
    return this.$q.reject(rejection)
  }

  response = (resp) => {
    return resp || this.$q.when(resp)
  }

  responseError = (rejection) => {
    if (rejection !== null && rejection.status === 403) {
      this.$location.path('/about')
    }
    return this.$q.reject(rejection)
  }
}

Interceptor.$inject = ['$q', '$window', '$location']
