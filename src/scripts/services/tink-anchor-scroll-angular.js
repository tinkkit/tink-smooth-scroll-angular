'use strict';
(function(module) {
  try {
    module = angular.module('tink.anchorscroll');
  } catch (e) {
    module = angular.module('tink.anchorscroll', []);
  }
  module.service('tinkAnchorScroll', ['$timeout', function ($timeout) {

    /**
     * Check the API down below
     */

    function _scrollTo(id, speed) {

      /**
       * Helper functions
       */
      function currentYPosition() {
        return window.pageYOffset;
      }

      function elmYPosition() {
        var y = elm.offsetTop;
        var node = elm;
        var padding = parseFloat($('body').css('padding-top')) || 0;
        while (node.offsetParent && node.offsetParent !== document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        } return (y - padding);
      }

      var elm = document.getElementById(id);
      var startY = currentYPosition();
      var stopY = elmYPosition();
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY); return;
      }

      // Set speed
      if (typeof speed === 'undefined') {
        speed = Math.round(distance / 100);
        if (speed >= 15) { speed = 15; }
      }

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
      $timeout(function() {
        elm.focus();
      });
    }


    /**
     * API
     */

    return {
      scrollTo: _scrollTo
    };

  }]);
})();
