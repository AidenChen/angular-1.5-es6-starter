import template from './greeting.tpl.html'
import controller from './greeting.controller'
import './greeting.scss'

export default function greeting() {
  return {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'model',
    bindToController: {
      year: '<',
      month: '<',
      name: '<'
    }
  }
}
