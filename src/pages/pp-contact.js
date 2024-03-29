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
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input-container.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-input-error.js';
import '@polymer/paper-input/paper-textarea.js';
import '@google-web-components/google-map/google-map.js';

class PPContact extends PolymerElement {
  static get template() {
    return html`
      <style include="pp-styles"></style>

      <pp-content url="../../data/contact.json" 
        theme="[[theme]]" loading="{{loading}}">
      </pp-content>

      <div class="container">
        <div class="weight-half">
          <h2 class="padding-horizontal">Form</h2>

          <!-- Add your email id for the contact form -->
          <paper-card>
            <div class="container card-content">
              <iron-form id="contactform">
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                  <h3 class="card-subtitle">If you have any queries or anything good for me, you can contact me via this form.</h3>
                  <input type="text" name="_gotcha" style="display:none">
                  <paper-input class="margin-top" type="text" name="name" label="Name" 
                    floatinglabel required auto-validate error-message="Name cannot be empty!">
                    <iron-icon slot="prefix" class="small" icon="pp-icons:person"></iron-icon>
                  </paper-input>
                  <paper-input class="margin-top" name="_replyto" type="email" label="Email" 
                    floatinglabel required auto-validate error-message="Please enter your email id.">
                    <iron-icon slot="prefix" class="small" icon="pp-icons:mail"></iron-icon>
                  </paper-input>
                  <paper-input class="margin-top" type="text" name="_subject" label="Subject" 
                    floatinglabel required auto-validate error-message="Please enter subject.">
                    <iron-icon slot="prefix" class="small" icon="pp-icons:create"></iron-icon>
                  </paper-input>
                  <paper-textarea class="margin-top" id="message" type="text" label="Message" 
                    name="message" floatinglabel multiline rows="4" required 
                    placeholder="Something about your subject..." error-message="Message cannot be empty!">
                  </paper-textarea>
                </form>
              </iron-form>
            </div>
            <div class="card-actions contact-footer">
              <paper-button id="btn_submit" class="secondary" on-tap="submitForm">
                <iron-icon class="small" icon="pp-icons:submit"></iron-icon>
                Submit
              </paper-button>
              <paper-button class="tint-background" on-tap="resetForm">
                <iron-icon class="small" icon="pp-icons:reset"></iron-icon>
                Reset
              </paper-button>
            </div>
          </paper-card>
        </div>

        <div class="container weight-half">
          <h2 class="padding-horizontal">Map</h2>

          <!-- Modify Google Maps according to your need -->
          <paper-card>
            <google-map latitude="LATITUDE" longitude="LONGITUDE" 
              api-key="YOUR_API_KEY" zoom="13">
              <google-map-marker latitude="LATITUDE" longitude="LONGITUDE" 
                title="TITLE" draggable="true">
              </google-map-marker>
            </google-map>

            <div class="card-content">
              <h3 class="card-subtitle no-vertical-margin">
                YOUR_LOCATION_TEXT
              </h3>
            </div>
          </paper-card>
        </div>
      </div>
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

  ready() {
    super.ready();

    this.$.contactform.addEventListener(
      'iron-form-submit', function(event) {
        event.target.fire('show-toast', {
          'text': 'Thanks for contacting me. I will get back to you soon!',
        });
    });

    this.$.contactform.addEventListener(
      'iron-form-presubmit', function(event) {
        event.target.reset();
    });
  }

  submitForm() {
    this.shadowRoot.querySelector('iron-form').submit();
  }

  resetForm() {
    this.shadowRoot.querySelector('iron-form').reset();s
  }
}

window.customElements.define('pp-contact', PPContact);
