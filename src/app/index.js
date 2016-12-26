import angular from 'angular'
import uiRouter from 'angular-ui-router'

import Pages from 'src/pages'
import Components from 'src/components'
import Services from 'src/services'
import Directives from 'src/directives'

import configuration from './app.config'
import appComponent from './app.component'

angular.module('app', [
  uiRouter,
  Pages,
  Components,
  Services,
  Directives
])

.config(configuration)

.component('app', appComponent)
