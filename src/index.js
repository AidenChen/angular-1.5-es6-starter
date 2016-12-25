import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Pages from './pages/pages';
import Components from './components/components';
import routing from './app.config';
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  Pages,
  Components
])

.config(routing)

.component('app', AppComponent);
