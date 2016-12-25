import template from './hero.tpl.html'
import controller from './hero.controller'
import './hero.scss'

export default {
  restrict: 'E',
  bindings: {
    testword: '<'
  },
  template,
  controller,
  controllerAs: 'model'
}
