import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './home.route';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(routing)

.component('home', homeComponent)

.name;

export default homeModule;
