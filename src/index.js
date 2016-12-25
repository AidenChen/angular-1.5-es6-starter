import angular from 'angular'
import uiRouter from 'angular-ui-router'
import Pages from './pages/pages'
import Components from './components/components'
import Services from './services/services'
import Directives from './directives/directives'
import config from './app.config'
import AppComponent from './app.component'

angular.module('app', [
  uiRouter,
  Pages,
  Components,
  Services,
  Directives
])

.config(config)

.component('app', AppComponent)
