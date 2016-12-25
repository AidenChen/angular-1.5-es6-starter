import template from './hero.tpl.html';
import controller from './hero.controller';
import './hero.scss';

let heroComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default heroComponent;
