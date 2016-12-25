import angular from 'angular'
import User from './user'
import Interceptor from './interceptor'

export default angular.module('app.services', [
  User,
  Interceptor
])

.name
