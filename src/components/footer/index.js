import angular from 'angular'
import uiRouter from 'angular-ui-router'
import footerComponent from './footer.component'

export default angular.module('components.footer', [
  uiRouter
])

.component('appFooter', footerComponent)

.name
