// ==UserScript==
// @name         Remove forcedownload parameter from moodle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove ?forcedownload=1 from all links on the page
// @author       You
// @match        https://moodle.polymtl.ca/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=polymtl.ca
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  function removeForcedownloadParameter(url) {
    return url.replace(/(\?|&)forcedownload=1(&|$)/, '$1');
  }

  function processLinks() {
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
      var originalHref = link.href;
      var newHref = removeForcedownloadParameter(originalHref);
      if (newHref !== originalHref) {
        link.href = newHref;
      }
    });
  }

  // Run on page load
  processLinks();

  // Run on AJAX navigation (if applicable)
  document.addEventListener('DOMContentLoaded', function () {
    processLinks();
  });

  // Run on history state change (if applicable)
  window.addEventListener('popstate', function () {
    processLinks();
  });
})();
