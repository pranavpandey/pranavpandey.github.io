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
import './pp-elements.js';

class PPContent extends PolymerElement {
  static get template() {
    return html`
      <style include="pp-styles"></style>

      <iron-ajax auto url="{{url}}" handle-as="json" 
        loading="{{loading}}" last-response="{{data}}">
      </iron-ajax>

      <template id="showcase" is="dom-repeat" items="[[data.showcases]]" as="showcaseCategory">
        <h2 id$="[[generateId(showcaseCategory.category)]]" class="padding-horizontal" 
          hidden$="[[!showcaseCategory.category]]">{{showcaseCategory.category}}</h2>
        <div class="container">
          <template is="dom-repeat" items="[[showcaseCategory.data]]" as="showcaseData">
            <a class="container showcase" href$="[[setUrl(showcaseData.url)]]" 
              target$="[[setTarget(showcaseData.url)]]" rel="noopener" tabindex="-1">
              <paper-card class="showcase">
                <div class="card-content" hidden$="[[hideShowcaseIcon]]">
                  <iron-icon icon$="[[showcaseData.icon]]" src$="[[showcaseData.src]] " 
                    style$="[[setColor(showcaseData.color, showcaseData.colorDark)]]" aria-hidden="true">
                  </iron-icon>
                </div>
                <div class="card-actions">
                  <h2 class="showcase-title" 
                    style$="[[setColor(showcaseData.color, showcaseData.colorDark)]]">
                    {{showcaseData.title}}
                  </h2>
                </div>
                <paper-ripple 
                  style$="[[setShowcaseColor(showcaseData.url, showcaseData.color, showcaseData.colorDark)]]">
                </paper-ripple>
              </paper-card>
            </a>
          </template>
        </div>
      </template>

      <template id="content" is="dom-repeat" items="[[data.categories]]" as="contentCategory">
        <h2 id$="[[generateId(contentCategory.category)]]" class="padding-horizontal" 
          hidden$="[[!contentCategory.category]]">{{contentCategory.category}}</h2>
        <div class="container">
          <template is="dom-repeat" items="[[contentCategory.data]]" as="categoryData">
            <paper-card class="width-large">
              <div hidden$="[[!categoryData.header]]">
                <iron-image class="card-header" hidden$="[[!categoryData.header]]" 
                  sizing="cover" preload fade style$="[[setBackgroundColor(categoryData.color)]]" 
                  placeholder$="[[categoryData.headerPlaceholder]]" src$="[[categoryData.header]]">
                </iron-image>
              </div>
              <div class="card-content">
                <h2 class="card-title" hidden$="[[!categoryData.title]]">{{categoryData.title}}</h2>
                <h3 class="card-subtitle" hidden$="[[!categoryData.subtitle]]">{{categoryData.subtitle}}</h3>
                <p hidden$="[[!categoryData.description]]">{{categoryData.description}}</p>
              </div>
              <div class="card-actions" hidden$="[[isJSONEmpty(categoryData.links)]]">
                <template is="dom-repeat" items="[[categoryData.links]]" as="linkData">
                  <a class="paper-button" href$="[[linkData.url]]" target="_blank" rel="noopener" tabindex="-1">
                    <paper-button class="secondary" style$="[[setColor(linkData.color, linkData.colorDark)]]">
                      <iron-icon class="small" icon="[[linkData.ironIcon]]"></iron-icon>{{linkData.link}}
                    </paper-button>
                  </a>
                </template>
              </div>
            </paper-card>
          </template>
        </div>
      </template>
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

  _themeChanged(theme) {
    let link = this.url;
    this.set('url', );
    this.set('url', link);
  }

  isDarkTheme(theme) {
    return theme === 'dark';
  }

  isJSONEmpty(jsonObject) {
    return jsonObject == null || !jsonObject.length 
      || !jsonObject.filter(function(a) {
        return Object.keys(a).length;
      }).length;
  }

  generateId(str) {
    if (!str) {
      return null;
    }
    
    return str.replace(/\s+/g, '-').toLowerCase();
  }

  setBackgroundColor(color, colorDark) {
    color = this.isDarkTheme(this.theme)
       && colorDark != null ? colorDark : color; 
    return 'background-color:' + color;   
  }

  setColor(color, colorDark) {
    color = this.isDarkTheme(this.theme)
       && colorDark != null ? colorDark : color;
     return 'color:' + color;
  }

  setShowcaseColor(url, color, colorDark) {
    color = this.isDarkTheme(this.theme)
       && colorDark != null ? colorDark : color;
    return 'color:' + (url ? color : 'transparent');
  }

  setUrl(url) {
    return url ? url : 'javascript:void(0)';
  }

  setTarget(href) {
    return href ? '_blank' : '';
  }
}

window.customElements.define('pp-content', PPContent);
