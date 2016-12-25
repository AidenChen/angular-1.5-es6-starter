import angular from 'angular'
import greetingDirective from './greeting.directive'

export default angular.module('directives.greeting', [])

.directive('greeting', greetingDirective)

.name
