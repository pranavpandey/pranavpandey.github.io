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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import './elements/pp-elements.js';
import './elements/pp-analytics.js';

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

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <iron-ajax auto="" url="../data/base64.json" handle-as="json" last-response="{{dataBase64}}">
      </iron-ajax>

      <app-drawer-layout responsive-width="700px" fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <div class="scrollable">
            <app-toolbar class="drawer-header layout horizontal center-justified">
              <div class="drawer-header-circle flex">
                <iron-image class="drawer-header-image" sizing="cover" preload="" 
                  placeholder="[[dataBase64.drawerHeader]]" src="../images/drawer.jpg">
                </iron-image>
              </div>
              <div class="drawer-quote flex">
                <p class="drawer-quote">Nothing is perfect but can be better. Developing such better things!</p>
              </div>
            </app-toolbar>

            <pp-divider></pp-divider>

            <div class="drawer-list-container">
              <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" 
                role="navigation" on-iron-activate="drawerSelected">
                <a name="home" href="[[rootPath]]home">
                  <iron-icon icon="pp-icons:home">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>Home
                </a>
                <a name="about" href="[[rootPath]]about">
                  <iron-icon icon="pp-icons:account-circle">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>About
                </a>
                <a name="skills" href="[[rootPath]]skills">
                  <iron-icon icon="pp-icons:stars">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>Skills
                </a>
                <a name="projects" href="[[rootPath]]projects">
                  <iron-icon icon="pp-icons:build">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>Projects
                </a>
                <a name="work" href="[[rootPath]]work">
                  <iron-icon icon="pp-icons:work">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>Work
                </a>
                <a name="contact" href="[[rootPath]]contact">
                  <iron-icon icon="pp-icons:feedback">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>Contact
                </a>
              </iron-selector>
            </div>

            <pp-divider></pp-divider>

            <p class="menu-category">Links</p>
            <div class="drawer-list-container">
              <iron-selector class="drawer-list" selectable="false" on-iron-activate="drawerSelected">
                <!-- <a href="https://techtics.xyz" target="_blank" rel="noopener" tabindex="-1">
                  <iron-icon icon="social-icons:techtics">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>Techtics
                </a> -->
                <a href="https://privacy.pranavpandey.com" target="_blank" rel="noopener" tabindex="-1">
                  <iron-icon icon="pp-icons:security">
                  </iron-icon><paper-ripple class="primary">
                  </paper-ripple>Privacy &amp; Terms
                </a>
              </iron-selector>
            </div>

            <pp-divider></pp-divider>

            <div class="flex footer">
              <p class="footer" id="copyright"></p>
              <p class="footer">Android is a trademark of Google LLC.<br>Xperia is a trademark or registered trademark of Sony Mobile Communications Inc.<br>All other logos and trademarks are the property of their respective owners.<br>Views expressed here are mine and not from my employers.</p>
            </div>
          </div>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout>
          <app-header slot="header" condenses="" fixed="" effects="material">
            <app-toolbar>
              <paper-icon-button icon="pp-icons:menu" aria-hidden="true" drawer-toggle=""></paper-icon-button>
              <div condensed-title="">Pranav Pandey</div>
              <a class=".drawer-list a" href="https://github.com/pranavpandey" target="_blank" rel="noopener" tabindex="-1" aria-label="GitHub">
                <paper-icon-button class="color-white" icon="social-icons:github" aria-hidden="true">
              </paper-icon-button></a>
              <a class=".drawer-list a" href="https://twitter.com/pranavpandeydev" target="_blank" rel="noopener" tabindex="-1" aria-label="Twitter">
                <paper-icon-button class="color-white" icon="pp-icons:person" aria-hidden="true">
              </paper-icon-button></a>
            </app-toolbar>
            <app-toolbar></app-toolbar>
            <app-toolbar hidden\$="[[smallLayout]]"></app-toolbar>
            <app-toolbar>
              <div main-title="">Pranav Pandey<br>
                <span class="main-subtitle">Software Developer &amp; Designer</span>
              </div>
            </app-toolbar>
            <app-toolbar></app-toolbar>
          </app-header>

          <div>
            <div class="content-frame" hidden\$="[[loading]]">
              <iron-pages class="content" role="main" selected="[[page]]" attr-for-selected="name" fallback-selection="404">
                <pp-home loading="{{loading}}" name="home"></pp-home>
                <pp-about loading="{{loading}}" name="about"></pp-about>
                <pp-skills loading="{{loading}}" name="skills"></pp-skills>
                <pp-projects loading="{{loading}}" name="projects"></pp-projects>
                <pp-work loading="{{loading}}" name="work"></pp-work>
                <pp-contact loading="{{loading}}" name="contact"></pp-contact>
                <pp-404 name="404"></pp-404>
              </iron-pages>
            </div>

            <div class="progress" hidden\$="[[!loading]]">
              <paper-spinner active\$="[[loading]]"> </paper-spinner>
            </div>
          </div>
        </app-header-layout>

        <a class=".drawer-list a" href="https://play.google.com/store/apps/dev?id=6608630615059087491" target="_blank" rel="noopener" tabindex="-1">
          <paper-fab icon="pp-icons:shop" title="Google Play">
        </paper-fab></a>
      </app-drawer-layout>

      <paper-toast id="toast"></paper-toast>

      <iron-media-query query="(max-width:700px)" query-matches="{{smallLayout}}">
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
      smallLayout: {
        type: Boolean,
        value: false
      },
      loading: {
        type: Boolean,
        value: true,
        notify: true
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

    var pageTitle;
    switch (page) {
      default:
        import('./pages/pp-home.js');
        pageTitle = '';
        break;
      case 'about':
        import('./pages/pp-about.js');
        pageTitle = 'About - ';
        break;
      case 'skills':
        import('./pages/pp-skills.js');
        pageTitle = 'Skills - ';
        break;
      case 'projects':
        import('./pages/pp-projects.js');
        pageTitle = 'Projects - ';
        break;
      case 'work':
        import('./pages/pp-work.js');
        pageTitle = 'Work - ';
        break;
      case 'contact':
        import('./pages/pp-contact.js');
        pageTitle = 'Contact - ';
        break;
      case '404':
        import('./pages/pp-404.js');
        pageTitle = '404 - ';
        break;
    }

    document.title = pageTitle + 'Pranav Pandey';

    // Track page via analytics.
    this.dispatchEvent(new CustomEvent('on-track-page', {
      bubbles: true, composed: true, 
      detail: { path: window.location.pathname }
    }));
  }

  _showToast(event) {
    var toast = this.shadowRoot.querySelector('paper-toast');
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

  setCopyright() {
    this.$.copyright.innerHTML = 
      '&copy; ' + new Date().getFullYear() + ' Pranav Pandey';
  }

  drawerSelected() {
    var drawer = this.shadowRoot.querySelector('app-drawer');
    if (!drawer.persistent && drawer.opened) {
      drawer.close();
    }
  }

  stringify(obj) {
    return JSON.stringify(obj);
  }

  openLink(event) {
    var arg = event.currentTarget.getAttribute('link');
    window.open(arg, '_blank');
    this.drawerSelected();
  }
}

window.customElements.define('pp-app', PPApp);
