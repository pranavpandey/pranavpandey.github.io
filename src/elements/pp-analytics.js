/**
 * @license
 * Copyright (c) 2019 Pranav Pandey.
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement } from '@polymer/polymer/polymer-element.js';

class PPAnalytics extends PolymerElement {
  static get properties() {
    return {
      /**
       * The Google analytics property id
       */
      apiKey: {
        type: String
      },
      /**
       * Optional user id, set this for a use authenticated with your service
       * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
       */
      userId: {
        type: String,
        notify: true
      }
    };
  }

  ready() {
    super.ready();

    ga('create', this.apiKey, 'auto');
    this.trackPage();

    window.addEventListener('on-track-page', (e) => {
      this.trackPage(e);
    });

    window.addEventListener('on-track-event', (e) => {
      this.trackEvent(e);
    });

    window.addEventListener('on-userId-changed', (e) => {
      this.userIdChanged(e);
    });
  }

  trackEvent(e) {
    // Add support for a non-interactin even that does not effect bounce rates - eg things that happen after a timeout
    // ga('send', 'event', 'category', 'action', {'nonInteraction': 1});
    ga('send', 'event', e.detail.category, e.detail.action, e.detail.label, e.detail.value);
  }

  trackPage(e) {
    // Use set param, this way if we then send a subsequent event on the page it will be correctly associated with the 
    // same page.
    if (e != undefined && e.detail.path !== undefined) {
      ga('set', 'page', e.detail.path);
    }

    ga('send', 'pageview');
  }

  userIdChanged(e) {
    ga('set', '&uid', this.userId);
  }
}

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

window.customElements.define('pp-analytics', PPAnalytics);
