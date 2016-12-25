import angular from 'angular';
import Home from './home';
import About from './about';

let pageModule = angular.module('app.pages', [
  Home,
  About
])

.name;

export default pageModule;
