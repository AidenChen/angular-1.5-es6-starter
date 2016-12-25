import angular from 'angular'
import interceptorService from './interceptor.service'

export default angular.module('services.interceptor', [])

.service('interceptor', interceptorService)

.name
