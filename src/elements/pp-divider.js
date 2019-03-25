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

class PPDivider extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          height: 1px;
          min-height: 1px;
          max-height: 1px;
          background-color: var(--pp-divider-color, #000);
          opacity: 0.12;
          @apply(--pp-divider);
        }
      </style>
    `;
  }
}

window.customElements.define('pp-divider', PPDivider);
