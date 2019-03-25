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

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../elements/pp-elements.js';

class PP404 extends PolymerElement {
  static get template() {
    return html`
      <style include="pp-styles"></style>

      <h2 class="padding-horizontal">404</h2>
      <paper-card>
        <div class="card-content">
          <h3 class="card-subtitle no-vertical-margin">This is not the web page you are looking for!</h3>
        </div>
      </paper-card>

      <paper-card class="primary">
        <div class="card-content">
          <p class="color-white">The requested URL <b>{{getPathName()}}</b> was not found on this server.</p>
        </div>
      </paper-card>
    `;
  }

  getPathName() {
    return window.location.pathname;
  }
}

window.customElements.define('pp-404', PP404);
