/**
 * @license
 * Copyright (c) 2019 Pranav Pandey.
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../elements/pp-content.js';

class PPSkills extends PolymerElement {
  static get template() {
    return html`
      <pp-content url="../../data/skills.json" 
        theme="[[theme]]" loading="{{loading}}">
      </pp-content>
    `;
  }

  static get properties() {
    return {
      theme: {
        type: String,
        notify: true
      },
      loading: {
        type: Boolean,
        value: false,
        notify: true
      }
    };
  }
}

window.customElements.define('pp-skills', PPSkills);
