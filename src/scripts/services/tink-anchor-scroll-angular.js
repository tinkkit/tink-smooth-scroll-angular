'use strict';
(function(module) {
  try {
    module = angular.module('tink.anchorscroll');
  } catch (e) {
    module = angular.module('tink.anchorscroll', []);
  }
  module.service('tinkAnchorScroll', [function () {

    function _test() {
      console.log('srvc');
    }

    return {
      test: _test
    };

  }]);
})();
