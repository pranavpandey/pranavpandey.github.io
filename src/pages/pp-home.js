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
import '../elements/pp-videos.js';

class PPHome extends PolymerElement {
  static get template() {
    return html`
      <style include="pp-styles"></style>

      <app-location route="{{route}}" query-params="{{queryParams}}"></app-location>

      <iron-ajax auto url="../../data/home.json" handle-as="json" 
        loading="{{loading}}" last-response="{{data}}">
      </iron-ajax>
      
      <pp-content url="../../data/home.json" 
        theme="[[theme]]" loading="{{loading}}">
      </pp-content>

      <div class="container">
        <paper-card id="achievement" class="width-large secondary" hidden$="[[!data.home.achievement]]">
          <div class="card-content">
            <p class="color-tint-secondary">{{data.home.achievement}}</p>
          </div>
        </paper-card>
        
        <paper-card id="quote" class="width-large primary" hidden$="[[!data.home.quote]]">
          <div class="card-content">
            <p class="color-tint-primary">{{data.home.quote}}</p>
          </div>
        </paper-card>
      </div>

      <pp-content url="../../data/home-apps.json"
        theme="[[theme]]" loading="{{loading}}">
      </pp-content>

      <pp-content url="../../data/home-blog.json"
        theme="[[theme]]" loading="{{loading}}">
      </pp-content>

      <pp-content url="../../data/home-graphics.json"
        theme="[[theme]]" loading="{{loading}}">
      </pp-content>

      <pp-videos url="../../data/home-videos.json"
        theme="[[theme]]" loading="{{loading}}">
      </pp-videos>

      <!-- Un-comment for the Google/IO video -->
      <!-- <h2 class="padding-horizontal">Google I/O 2018</h2>
      <paper-card>
        <iframe src="https://events.google.com/io/embed"
          style="width:100%;height:480px"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </paper-card> -->
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

  _themeChanged(theme) { }

  isDarkTheme(theme) {
    return theme === 'dark';
  }
  
  isJSONEmpty(jsonObject) {
    return jsonObject == null || !jsonObject.length 
      || !jsonObject.filter(function(a) {
        return Object.keys(a).length;
      }).length;
  }

  getBaseThemeUrl() {
    return 'https://theme.pranavpandey.com/?theme=';
  }

  isEmpty(string) {
    return !string || string === null || string === "";
  }
}

window.customElements.define('pp-home', PPHome);
