import angular from 'angular';
import Navbar from './navbar';
import Hero from './hero';

let componentModule = angular.module('app.components', [
  Navbar,
  Hero
])

.name;

export default componentModule;
