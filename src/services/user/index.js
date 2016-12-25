import angular from 'angular'
import userService from './user.service'

export default angular.module('services.user', [])

.service('user', userService)

.name
