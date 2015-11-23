'use strict';
(function(module) {
  try {
    module = angular.module('tink.anchorscroll');
  } catch (e) {
    module = angular.module('tink.anchorscroll', []);
  }
  module.service('tinkAnchorScroll', [function () {

    /**
     * Check the API down below
     */

    function _scrollTo(id) {

      /**
       * Helper functions
       */
      function currentYPosition() {
        return window.pageYOffset;
      }

      function elmYPosition(id) {
        var elm = document.getElementById(id);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent !== document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        } return y;
      }


      var startY = currentYPosition();
      var stopY = elmYPosition(id);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY); return;
      }
      var speed = Math.round(distance / 100);
      if (speed >= 20) { speed = 20; }
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
          setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
          leapY += step; if (leapY > stopY) { leapY = stopY; } timer++;
        } return;
      }
      for ( var j=startY; j>stopY; j-=step ) {
        setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
        leapY -= step; if (leapY < stopY) { leapY = stopY; } timer++;
      }
    }


    /**
     * API
     */

    return {
      scrollTo: _scrollTo
    };

  }]);
})();
