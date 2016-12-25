import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routing from './about.route'
import aboutComponent from './about.component'

export default angular.module('pages.about', [
  uiRouter
])

.config(routing)

.component('about', aboutComponent)

.name
