import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routing from './home.route'
import homeComponent from './home.component'

export default angular.module('pages.home', [
  uiRouter
])

.config(routing)

.component('home', homeComponent)

.name
