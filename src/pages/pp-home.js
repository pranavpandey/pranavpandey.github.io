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
import '../elements/pp-twitter.js';

class PPHome extends PolymerElement {
  static get template() {
    return html`
      <style include="pp-styles"></style>

      <iron-ajax auto="" url="../../data/home.json" handle-as="json" 
        loading="{{loading}}" last-response="{{dataHome}}">
      </iron-ajax>
      
      <h2 class="padding-horizontal">{{dataHome.home.title}}</h2>
      <paper-card>
        <div class="card-content">
          <h3 class="card-subtitle no-vertical-margin">{{dataHome.home.description}}</h3>
        </div>
      </paper-card>

      <paper-card id="quote" class="primary">
        <div class="card-content">
          <p class="color-tint-primary">{{dataHome.home.quote}}</p>
        </div>
      </paper-card>

      <!-- Un-comment for the Google/IO video -->
      <!-- <h2 class="padding-horizontal">Google I/O 2018</h2>
      <paper-card>
        <iframe src="https://events.google.com/io/embed"
          style="width:100%;height:480px"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </paper-card> -->

      <!-- Add your user name to show Twitter feeds -->
      <div id="twitter-container" class="color-primary">
        <pp-twitter>
          <paper-card>
            <a class="twitter-timeline"
              href="https://twitter.com/YOUR_USER_NAME" 
              data-chrome="nofooter transparent">
            </a>
          <paper-card>
        </pp-twitter>
      </div>
    `;
  }

  static get properties() {
    return {
      theme: {
        type: String,
        reflectToAttribute: true,
        observer: "_themeChanged"
      },
      loading: {
        type: Boolean,
        value: false,
        notify: true
      }
    };
  }

  _themeChanged(theme) {
    const container = this.shadowRoot.querySelector("#twitter-container");
    const linkColor = this.isDarkTheme(theme) ? "#7986CB" : "#3F51B5";
    container.innerHTML = `
      <pp-twitter>
        <paper-card>
          <a class="twitter-timeline" data-theme="${theme}" 
            data-link-color="${linkColor}"
            href="https://twitter.com/YOUR_USER_NAME" 
            data-chrome="nofooter transparent">
          </a>
        <paper-card>
    </pp-twitter>`;
  }

  isDarkTheme(theme) {
    return theme === 'dark';
  }
  
  isJSONEmpty(jsonObject) {
    return jsonObject == null || !jsonObject.length ||
      !jsonObject.filter(function(a) {
        return Object.keys(a).length;
      }).length;
  }
}

window.customElements.define('pp-home', PPHome);
