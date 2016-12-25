import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './about.route';
import aboutComponent from './about.component';

let aboutModule = angular.module('about', [
  uiRouter
])

.config(routing)

.component('about', aboutComponent)

.name;

export default aboutModule;
