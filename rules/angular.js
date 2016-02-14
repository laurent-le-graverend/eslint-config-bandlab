module.exports = {
  'plugins': [
    'angular'
  ],
  'rules': {
    'angular/angularelement': 2,
    'angular/controller-as': 0,
    'angular/controller-as-route': 0,
    'angular/controller-as-vm': [2, 'vm'],
    'angular/controller-name': [2, '/[A-Z].*Ctrl$/'],
    'angular/deferred': 0,
    'angular/definedundefined': 2,
    'angular/di': [2, 'function'],
    'angular/di-order': [0, true],
    'angular/di-unused': 2,
    'angular/directive-name': 0,
    'angular/directive-restrict': [0, {'restrict': 'AE', 'explicit': 'never'}],
    'angular/component-limit': [0, 1],
    'angular/document-service': 0,
    'angular/empty-controller': 0,
    'angular/file-name': 0,
    'angular/filter-name': 0,
    'angular/foreach': 0,
    'angular/function-type': 0,
    'angular/interval-service': 0,
    'angular/json-functions': 0,
    'angular/log': 0,
    'angular/module-dependency-order': [0, {'grouped': true, 'prefix': null}],
    'angular/module-getter': 2,
    'angular/module-name': 0,
    'angular/module-setter': 2,
    'angular/no-angular-mock': 0,
    'angular/no-controller': 0,
    'angular/no-cookiestore': 2,
    'angular/no-digest': 0,
    'angular/no-http-callback': 2,
    'angular/no-inline-template': [0, {'allowSimple': true}],
    'angular/no-jquery-angularelement': 2,
    'angular/no-private-call': 0,
    'angular/no-run-logic': [0, {'allowParams': true}],
    'angular/no-service-method': 2,
    'angular/no-services': [2, ['$resource']],
    'angular/on-watch': 0,
    'angular/one-dependency-per-line': 0,
    'angular/rest-service': 0,
    'angular/service-name': 2,
    'angular/timeout-service': 0,
    'angular/typecheck-array': 2,
    'angular/typecheck-date': 2,
    'angular/typecheck-function': 2,
    'angular/typecheck-number': 2,
    'angular/typecheck-object': 2,
    'angular/typecheck-regexp': 2,
    'angular/typecheck-string': 2,
    'angular/watchers-execution': [0, '$digest'],
    'angular/window-service': 0
  }
};
