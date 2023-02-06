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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import './elements/pp-elements.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(PPAppGlobals.rootPath);

class PPApp extends PolymerElement {
  static get template() {
    return html`
      <style include="pp-styles">
        [hidden] {
          display: none !important;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" 
        data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-localstorage-document key="autoTheme" data="{{autoTheme}}">
      </app-localstorage-document>
      <app-localstorage-document key="customTheme" data="{{customTheme}}">
      </app-localstorage-document>
      <app-localstorage-document key="theme" data="{{theme}}">
      </app-localstorage-document>

      <iron-ajax auto url="../data/navigation.json" 
        handle-as="json" last-response="{{navigation}}">
      </iron-ajax>

      <app-drawer-layout responsive-width="840px" fullbleed narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <div class="scrollable flex">
            <app-toolbar class="drawer-header layout horizontal center-vertical">
              <div>
                <iron-image class="drawer-header-image" sizing="cover" preload 
                  placeholder="[[navigation.header.placeholder]]" src="[[navigation.header.icon]]"
                  hidden$="[[!navigation.header.icon]]">
                </iron-image>
              </div>
              <div>
                <p class="drawer-quote" hidden$="[[!navigation.header.title]]">{{navigation.header.title}}</p>
              </div>
            </app-toolbar>

            <pp-divider></pp-divider>
            
            <div id="theme-selector">
              <app-toolbar class="drawer-section layout horizontal center-vertical">
                <div>
                  <paper-icon-button id="theme-icon"
                    tabIndex="-1" class="theme color-secondary" 
                    aria-hidden="true" icon="pp-icons:theme-auto">
                  </paper-icon-button>
                  <paper-tooltip aria-label="Auto">Auto</paper-tooltip>
                </div>
                <div>
                  <iron-icon id="theme-icon-day"
                    class="theme color-tint-background" 
                    icon="pp-icons:theme-day">
                  </iron-icon>
                </div>
                <div>
                  <paper-toggle-button id="theme-toggle" 
                    tabIndex="-1" class="theme color-secondary" 
                    aria-hidden="true">
                  </paper-toggle-button>
                </div>
                <div>
                  <iron-icon id="theme-icon-night"
                    class="theme color-tint-background" 
                    icon="pp-icons:theme-night">
                  </iron-icon>
                </div>
              </app-toolbar>

              <pp-divider></pp-divider>
            </div>

            <template id="pages" is="dom-repeat" items="[[navigation.pages]]" as="pageCategory">
              <div class="drawer-list-container">
                <iron-selector selected="[[page]]" attr-for-selected="name" 
                  class="drawer-list" role="navigation" on-iron-activate="drawerSelected"
                  selectable="[[pageCategory.selectable]]">
                  <template id="page" is="dom-repeat" items="[[pageCategory.paths]]" as="pagePath">
                    <a name="[[pagePath.name]]" href="[[rootPath]][[pagePath.path]]">
                      <paper-ripple class="selector"></paper-ripple>
                      <iron-icon icon="[[pagePath.icon]]"></iron-icon>{{pagePath.title}}
                    </a>
                  </template>
                </iron-selector>
              </div>

              <pp-divider hidden$="[[!pageCategory.divider]]"></pp-divider>
            </template>

            <template id="links" is="dom-repeat" items="[[navigation.links]]" as="linkCategory">
              <div class="drawer-list-container">
                <iron-selector selected="[[page]]" attr-for-selected="name" 
                  class="drawer-list" selectable="[[linkCategory.selectable]]">
                  <template id="link" is="dom-repeat" items="[[linkCategory.paths]]" as="linkPath">
                    <a name="[[linkPath.name]]" href="[[linkPath.path]]" target="_blank" rel="noopener" tabindex="-1">
                      <paper-ripple class$="[[linkPath.class]]"></paper-ripple>
                      <iron-icon class$="[[linkPath.class]]" icon="[[linkPath.icon]]"></iron-icon>{{linkPath.title}}
                    </a>
                  </template>
                </iron-selector>
              </div>

              <pp-divider hidden$="[[!linkCategory.divider]]"></pp-divider>
            </template>

            <div class="flex footer">
              <p class="footer" id="copyright"></p>
              <p class="footer" hidden$="[[!navigation.footer]]">{{navigation.footer}}</p>
            </div>
          </div>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout>
          <app-header slot="header" condenses fixed effects="material">
            <app-toolbar>
              <paper-icon-button icon="pp-icons:menu" aria-label="Toggle navigation drawer" 
                drawer-toggle></paper-icon-button>
              <div condensed-title>{{navigation.title}}</div>
              <a class=".drawer-list a" href="https://github.com/pranavpandey" 
                target="_blank" rel="noopener" tabindex="-1" aria-label="Open Source">
                <paper-icon-button class="color-tint-primary" 
                  icon="social-icons:github" tabindex="-1" aria-hidden="true">
                </paper-icon-button>
                <paper-tooltip aria-label="Open Source">OSS</paper-tooltip>
              </a>
            </app-toolbar>
            <app-toolbar></app-toolbar>
            <app-toolbar hidden$="[[smallLayout]]"></app-toolbar>
            <app-toolbar>
              <div main-title>{{navigation.title}}<br>
                <span class="main-subtitle">{{navigation.subtitle}}</span>
              </div>
            </app-toolbar>
            <app-toolbar></app-toolbar>
          </app-header>

          <div>
            <div class="content-frame" hidden$="[[loading]]">
              <iron-pages class="content" role="main" selected="[[page]]" 
                attr-for-selected="name" fallback-selection="404">
                <pp-home theme="[[theme]]" loading="{{loading}}" name="home"></pp-home>
                <pp-about theme="[[theme]]" loading="{{loading}}" name="about"></pp-about>
                <pp-skills theme="[[theme]]" loading="{{loading}}" name="skills"></pp-skills>
                <pp-projects theme="[[theme]]" loading="{{loading}}" name="projects"></pp-projects>
                <pp-work theme="[[theme]]" loading="{{loading}}" name="work"></pp-work>
                <pp-contact theme="[[theme]]" loading="{{loading}}" name="contact"></pp-contact>
                <pp-404 name="404"></pp-404>
              </iron-pages>
            </div>

            <div class="progress" hidden$="[[!loading]]">
              <paper-spinner active$="[[loading]]"></paper-spinner>
            </div>
          </div>
        </app-header-layout>

        <a class=".drawer-list a" href="https://play.google.com/store/apps/dev?id=6608630615059087491" 
          target="_blank" rel="noopener" tabindex="-1" aria-label="Google Play">
          <paper-fab icon="pp-icons:shop" title="Google Play"></paper-fab>
        </a>
      </app-drawer-layout>

      <paper-toast id="toast"></paper-toast>

      <iron-media-query query="(max-width:840px)" 
        query-matches="{{smallLayout}}">
      </iron-media-query>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: String,
      autoTheme: {
        type: Boolean,
        value: true,
        reflectToAttribute: true,
        observer: '_refreshTheme'
      },
      customTheme: {
        type: String,
        value: 'light',
        reflectToAttribute: true,
        observer: '_refreshTheme'
      },
      theme: {
        type: String,
        value: 'light',
        reflectToAttribute: true,
        observer: '_refreshTheme'
      },
      smallLayout: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      loading: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
      '_lockScroll(loading)'
    ];
  }

  ready() {
    super.ready();

    this.setCopyright();

    window.addEventListener('show-toast', (e) => {
      this._showToast(e);
    });

    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener("change", (e) => {
        this.setTheme();
    });

    this.shadowRoot.querySelector('#theme-icon')
      .addEventListener('click', (e) => {
        this.set('autoTheme', !this.autoTheme);
    });

    this.shadowRoot.querySelector('#theme-toggle')
      .addEventListener('change', (e) => {
        this.set('customTheme', e.target.checked ? 'dark' : 'light');
    });
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      this.updateStyles(this.getDarkTheme());
    } else {          
      this.updateStyles(this.getLightTheme());
    }

    this.set('theme', theme);
  }
  
  _refreshTheme() {
    this.shadowRoot.querySelector('#theme-toggle').checked = this.customTheme === 'dark';

    if (this.autoTheme) {
      this.shadowRoot.querySelector('#theme-icon-day').style.opacity = 0.5;
      this.shadowRoot.querySelector('#theme-toggle').disabled = true;
      this.shadowRoot.querySelector('#theme-icon-night').style.opacity = 0.5;
    
      this.shadowRoot.querySelector('#theme-icon')
        .updateStyles(
          {
            'color': 'var(--dt-secondary-color)',
            '--paper-icon-button-ink-color': 'var(--dt-secondary-color)'
          }
        );
    } else {
      this.shadowRoot.querySelector('#theme-icon-day').style.opacity = 1;
      this.shadowRoot.querySelector('#theme-toggle').disabled = false;
      this.shadowRoot.querySelector('#theme-icon-night').style.opacity = 1;

      this.shadowRoot.querySelector('#theme-icon')
        .updateStyles(
          {
            'color': 'var(--dt-tint-background-color)',
            '--paper-icon-button-ink-color': 'var(--dt-tint-background-color)'
          }
        );
    }

    this.setTheme();
  }

  setTheme() {
    let currentTheme = 'light';

    if (this.autoTheme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
      } else if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
        let hours = new Date().getHours();

        if (hours < 6 || hours >= 19) {
          currentTheme = 'dark';
        }
      }
    } else {
      if (this.customTheme === 'dark') {
        currentTheme = 'dark';
      }
    }

    this.applyTheme(currentTheme);
  }

  _routePageChanged(page) {
    // If no page was found in the route data, page will be an empty string.
    // Default to 'home' in that case.
    if (page && page.indexOf('index.html') !== -1) {
      this.page = 'home';
    } else {
      this.page = page || 'home';
    }

    // Close a non-persistent drawer when the page & route are changed.
    this.drawerSelected();
  }

  _pageChanged(page) {
    let pageTitle;

    switch (page) {
      default:
        pageTitle = '';
        break;
      case 'about':
        pageTitle = 'About | ';
        break;
      case 'skills':
        pageTitle = 'Skills | ';
        break;
      case 'projects':
        pageTitle = 'Projects | ';
        break;
      case 'work':
        pageTitle = 'Work | ';
        break;
      case 'contact':
        pageTitle = 'Contact | ';
        break;
      case '404':
        pageTitle = 'Error | ';
        break;
    }

    document.title = pageTitle + 'Pranav Pandey';
    import(`./pages/pp-${page}.js`).then(null, this._showPage404.bind(this));
  }

  _showPage404() {
    this.page = '404';
  }

  _showToast(event) {
    const toast = this.shadowRoot.querySelector('paper-toast');
    toast.text = event.detail.text;
    toast.toggle();
  }

  _lockScroll(loading) {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }
  
  getLightTheme() {
    return { '--dt-theme': 'light',
      '--dt-background-color': '#EAEAEA',
      '--dt-surface-color': '#EBEBEB',
      '--dt-surface-color-elevation': '#EBEBEB',
      '--dt-header-color': '#3F51B5',
      '--dt-primary-color': '#3F51B5',
      '--dt-secondary-color': '#E91E63',
      '--dt-tint-background-color': '#414141',
      '--dt-tint-primary-color': '#C9CEEA',
      '--dt-tint-secondary-color': '#F8C0D3',
      '--dt-text-primary-color': '#121212',
      '--dt-text-secondary-color': '#343434',
      '--dt-text-description-color': '#676767',
      '--dt-link-techtics-color': '#138808',
      '--dt-link-support-color': '#4285F4',
      '--dt-link-theme-color': '#9C27B0',
      '--dt-link-privacy-color': '#1976D2',
      '--pp-divider-color': '#BCBCBC'
    };
  }

  getDarkTheme() {
    return { '--dt-theme': 'dark', 
      '--dt-background-color': '#252525',
      '--dt-surface-color': '#2D2D2D',
      '--dt-surface-color-elevation': '#353535',
      '--dt-header-color': '#3F51B5',
      '--dt-primary-color': '#3F51B5',    
      '--dt-secondary-color': '#FBC02D',
      '--dt-tint-background-color': '#C1C1C1',
      '--dt-tint-primary-color': '#C9CEEA',
      '--dt-tint-secondary-color': '#46350C',
      '--dt-text-primary-color': '#EFEFEF',
      '--dt-text-secondary-color': '#CDCDCD',
      '--dt-text-description-color': '#898989',
      '--dt-link-techtics-color': '#FF9933',
      '--dt-link-support-color': '#3DDC84',
      '--dt-link-theme-color': '#CDDC39',
      '--dt-link-privacy-color': '#2196F3',
      '--pp-divider-color': '#454545',
    };
  }

  reloadOnThemeChange() {
    return window.navigator.userAgent.match(/(MSIE|Trident)/);
  }

  setCopyright() {
    this.$.copyright.innerHTML = 
      '&copy; ' + new Date().getFullYear() + ' Pranav Pandey';
  }

  drawerSelected() {
    const drawer = this.shadowRoot.querySelector('app-drawer');
    if (!drawer.persistent && drawer.opened) {
      drawer.close();
    }
  }
}

window.customElements.define('pp-app', PPApp);
