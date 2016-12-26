import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routing from './home.route'
import homeComponent from './home.component'
import homeService from './home.service'

export default angular.module('pages.home', [
  uiRouter
])

.config(routing)

.component('home', homeComponent)

.service('home', homeService)

.name
