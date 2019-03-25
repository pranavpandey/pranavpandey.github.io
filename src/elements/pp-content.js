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
import './pp-elements.js';

class PPContent extends PolymerElement {
  static get template() {
    return html`
      <style include="pp-styles"></style>

      <iron-ajax auto="" url="{{url}}" handle-as="json" loading="{{loading}}" last-response="{{dataContent}}">
      </iron-ajax>

      <template is="dom-repeat" items="[[dataContent.showcases]]" as="showcaseCategory">
        <h2 hidden\$="[[!showcaseCategory.category]]" class="padding-horizontal">{{showcaseCategory.category}}</h2>
        <template is="dom-repeat" items="[[showcaseCategory.data]]" as="showcaseData">
          <a class="showcase" href\$="[[setUrl(showcaseData.url)]]" 
            target\$="[[setTarget(showcaseData.url)]]" rel="noopener" tabindex="-1">
            <paper-card class="showcase">
              <div class="card-content" hidden\$="[[hideShowcaseIcon]]">
                <iron-icon icon\$="[[showcaseData.icon]]" src\$="[[showcaseData.src]] " 
                  style\$="[[setColor(showcaseData.accent)]]" aria-hidden="true">
                </iron-icon>
              </div>
              <div class="card-actions">
                <h2 class="showcase-title" style\$="[[setColor(showcaseData.accent)]]">{{showcaseData.title}}</h2>
              </div>
              <paper-ripple style\$="[[setShowcaseColor(showcaseData.accent, showcaseData.url)]]"></paper-ripple>
            </paper-card>
          </a>
        </template>
      </template>

      <template is="dom-repeat" items="[[dataContent.categories]]" as="contentCategory">
        <h2 class="padding-horizontal" hidden\$="[[!contentCategory.category]]">{{contentCategory.category}}</h2>
        <template is="dom-repeat" items="[[contentCategory.data]]" as="categoryData">
          <paper-card>
            <div hidden\$="[[!categoryData.header]]">
              <iron-image class="card-header" hidden\$="[[!categoryData.header]]" 
                sizing="cover" preload="" fade="" style\$="[[setBackgroundColor(categoryData.accent)]]" 
                placeholder="[[categoryData.headerPlaceholder]]" src="[[categoryData.header]]">
              </iron-image>
            </div>
            <div class="card-content">
              <h2 class="card-title" hidden\$="[[!categoryData.title]]">{{categoryData.title}}</h2>
              <h3 class="card-subtitle" hidden\$="[[!categoryData.subtitle]]">{{categoryData.subtitle}}</h3>
              <p hidden\$="[[!categoryData.description]]">{{categoryData.description}}</p>
            </div>
            <div class="card-actions" hidden\$="[[isJSONEmpty(categoryData.links)]]">
              <template is="dom-repeat" items="[[categoryData.links]]" as="linkData">
                <a class="paper-button" href\$="[[linkData.url]]" target="_blank" rel="noopener" tabindex="-1">
                  <paper-button class="secondary" style\$="[[setColor(linkData.accent)]]">
                    <iron-icon class="small" icon="[[linkData.ironIcon]]"></iron-icon>
                    {{linkData.link}}
                  </paper-button>
                </a>
              </template>
            </div>
          </paper-card>
        </template>
      </template>
    `;
  }

  static get properties() {
    return {
      loading: {
        type: Boolean,
        value: false,
        notify: true
      },
      url: {
        type: String
      },
      hideShowcaseIcon: {
        type: Boolean,
        value: false,
        notify: true
      }
    };
  }

  isJSONEmpty(jsonObject) {
    return jsonObject == null || !jsonObject.length ||
      !jsonObject.filter(function(a) {
        return Object.keys(a).length;
      }).length;
  }

  setBackgroundColor(color) {
    var style = 'background-color:' + color;
    return style;
  }

  setColor(color) {
    var style = 'color:' + color;
    return style;
  }

  setShowcaseColor(color, url) {
    var style = 'color:' + (url ? color : 'transparent');
    return style;
  }

  setUrl(url) {
    return url ? url : 'javascript:void(0)';
  }

  setTarget(href) {
    return href ? '_blank' : '';
  }
}

window.customElements.define('pp-content', PPContent);
