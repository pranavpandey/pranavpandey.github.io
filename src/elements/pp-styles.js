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

import '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = 
`<dom-module id="pp-styles">
  <template>
    <style include="iron-flex iron-flex-alignment">
      :host {
        --app-drawer-width: 340px;
        --app-primary-color: var(--dt-primary-color);
        --app-secondary-color: var(--dt-secondary-color);
        @apply --paper-font-common-base;
        @apply --layout-flex;
      }
      
      .flex {
        flex: 1 1 auto;
      }

      h2 {
        color: var(--dt-text-primary-color);
      }

      h2.padding-horizontal {
        padding-left: 4px;
        padding-right: 4px;
        margin-top: 8px;
        margin-bottom: 8px;
      }

      p {
        margin: 0;
        white-space: pre-wrap;
        color: var(--dt-text-secondary-color);
      }

      p.drawer-title {
        font-size: 1.0em;
      }

      p.sub-title {
        font-size: 0.8em;
        color: var(--dt-secondary-color);
      }

      p.menu-category {
        padding: 24px;
        padding-top: 12px;
        padding-bottom: 0px;
        text-transform: uppercase;
      }

      p.footer {
        color: var(--dt-text-description-color);
        font-size: 0.7em;
      }

      a.paper-button {
        text-decoration: none;
        background-color: transparent;
        outline: none;
      }

      a.showcase {
        text-decoration: none;
        background-color: transparent;
        outline: none;
      }

      app-drawer-layout {
        background-color: var(--dt-background-color);
      }
      
      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-drawer {
        --app-drawer-content-container: {
          background-color: var(--dt-background-color);
          box-shadow: 2px 0 4px 2px rgba(0,0,0,0.18);
        }
      }

      app-header {
        color: var(--dt-tint-primary-color);
        background-color: var(--dt-header-color);
        --app-header-background-front-layer: {
          background-image: url(../../images/header.jpg);
          background-position: center;
          background-size: cover;
        };
        --app-header-background-rear-layer: {
          background-color: var(--dt-header-color);
        };
      }

      [main-title] {
        font-size: 2em;
        margin-left: 12px;
      }

      .main-subtitle {
        font-size: 0.8em;
      }

      [condensed-title] {
        margin-left: 12px;
        text-overflow: ellipsis;
      }

      .scrollable {
        height: 100%;
        overflow: auto;
        background-color: var(--dt-background-color);
      }

      .drawer-header {
        margin-top: 24px;
        margin-bottom: 24px;
        margin-left: 4px;
        margin-right: 8px;
      }

      .drawer-section {
        margin-left: 8px;
        margin-right: 8px;
      }

      .drawer-header-image {
        width: 72px;
        height: 72px;
        margin-top: 8px;
        margin-right: 16px;
        border-radius: 50%;
        border-collapse: separate;
        background-color: var(--dt-primary-color);
      }

      .drawer-quote {
        font-size: 0.7em;
        font-style: italic;
        color: var(--dt-text-secondary-color);
      }
      
      .drawer-list-container {
        padding-top: 12px;
        padding-bottom: 12px;
      }

      .drawer-list a {
        display: block;
        position: relative;
        padding: 4px 24px;
        text-decoration: none;
        color: var(--dt-text-primary-color);
        line-height: 40px;
        background-color: transparent;
        outline: none;
      }

      .drawer-list a iron-icon {
        margin-right: 32px;
        margin-bottom: 2px;
      }

      .drawer-list a.iron-selected {
        background-color: var(--dt-selector-color);
        color: var(--dt-primary-color);
      }

      .footer {
        padding: 12px;
        padding-top: 8px;
        vertical-align: bottom;
      }

      .content-frame {
        height: 100%;
        background-color: var(--dt-background-color);
        @apply --layout-flex;
        @apply --layout-vertical;
      }

      .content {
        padding: 12px 24px;
        padding-bottom: 48px;
        background-color: var(--dt-background-color);
      }

      .weight-half {
        float: left;
        width: 48.7%;
        margin-right: 8px;
      }
      
      .no-vertical-margin {
        margin-top: 0px;
        margin-bottom: 0px;
      }

      .overlay {
        pointer-events: none;
        position: fixed;
        content: " ";
        z-index: 10;
        right: 0px;
        left: 0px;
        bottom: 0px;
        top: 0px;
      }

      pp-divider {
        background-color: var(--pp-divider-color);
      }

      iron-icon.small {
        --iron-icon-height: 20px;
        --iron-icon-width: 20px;
        margin-right: 8px;
        margin-bottom: 2px;
      }
      
      iron-icon.style {
        margin-right: 32px;
      }
      
      iron-icon.theme {
        --iron-icon-height: 28px;
        --iron-icon-width: 28px;
      }

      iron-image.card-header {
        width: 100%;
        height: 420px;
        background-color: var(--dt-secondary-color);
      }

      paper-spinner {
        --paper-spinner-layer-1-color: var(--dt-secondary-color);
        --paper-spinner-layer-2-color: var(--dt-primary-color);
        --paper-spinner-layer-3-color: var(--dt-secondary-color);
        --paper-spinner-layer-4-color: var(--dt-primary-color);
      }

      .progress {
        margin: 48px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      
      paper-ripple.primary {
        color: var(--dt-primary-color);
      }

      paper-button.secondary {
        color: var(--dt-secondary-color);
      }
      
      paper-toggle-button {
        --paper-toggle-button-unchecked-bar-color: var(--dt-text-description-color);
        --paper-toggle-button-unchecked-button-color: var(--dt-text-description-color);
        --paper-toggle-button-unchecked-ink-color: var(--dt-text-description-color);
      }

      paper-toggle-button.color-primary {
        --paper-toggle-button-checked-bar-color: var(--dt-primary-color);
        --paper-toggle-button-checked-button-color: var(--dt-primary-color);
        --paper-toggle-button-checked-ink-color: var(--dt-primary-color);
      }

      paper-toggle-button.theme {
        margin-left: 16px;
        margin-right: 16px
      }

      paper-card {
        width: 100%;
        margin-top: 12px;
        margin-bottom: 12px;
        --paper-card-background-color: var(--dt-surface-color);
        --paper-card-actions: {
          border-top: 1px solid var(--pp-divider-color);
        }
      }

      paper-card.primary {
        --paper-card-background-color: var(--dt-primary-color);
        --paper-card-header-color: var(--dt-tint-primary-color);
      }

      paper-card.showcase {
        position: relative;
        width: 148px;
        margin-right: 8px;
      }

      paper-card.showcase div iron-icon {
        width: 100%;
        height: 100%;
      }

      paper-card.showcase div iron-image {
        width: 100%;
        height: 112px;
      }

      .card-subtitle {
        margin-top: 0px;
        margin-bottom: 4px;
        font-weight: normal;
        font-size: 1.1em;
        color: var(--dt-text-secondary-color);
      }

      .card-title {
        margin-top: 0px;
        margin-bottom: 16px;
        font-weight: normal;
        font-size: 1.3em;
        color: var(--dt-text-primary-color);
      }

      .showcase-title {
        margin-top: 0px;
        margin-bottom: 0px;
        font-weight: normal;
        font-size: 1.3em;
        color: var(--dt-text-primary-color);
      }

      paper-fab {
        position: fixed;
        right: 24px;
        bottom: 24px;
        font-size: 20px;
        color: var(--dt-tint-secondary-color);
        --paper-fab-background: var(--dt-secondary-color);
        --paper-fab-keyboard-focus-background: var(--dt-secondary-color);
        --paper-fab-disabled-background: var(--dt-selector-color);
      }

      paper-input {
        --paper-input-container-color: var(--dt-text-description-color);     
        --paper-input-container-focus-color: var(--dt-primary-color);   
        --paper-input-container-invalid-color: var(--dt-secondary-color);          
        --paper-input-container-input: {
          color: var(--dt-text-secondary-color);
        };
      }

      paper-input iron-icon {
        color: var(--dt-text-primary-color);
      }

      paper-textarea {
        --paper-input-container-color: var(--dt-text-description-color);     
        --paper-input-container-focus-color: var(--dt-primary-color);
        --paper-input-container-invalid-color: var(--dt-secondary-color);
        --paper-input-container-input: {
          color: var(--dt-text-secondary-color);
        };
      }

      google-map {
        height: 352px;
        width: 100%;
        display: block;
      }

      .margin-top {
        margin-top: 4px;
      }

      .contact-footer {
        padding-top: 22px;
        padding-bottom: 23px;
      }

      .color-primary {
        color: var(--dt-primary-color);
      }

      .color-secondary {
        color: var(--dt-secondary-color);
      }

      .color-tint-primary {
        color: var(--dt-tint-primary-color);
      }

      .color-tint-primary {
        color: var(--dt-tint-primary-color);
      }

      .color-link-privacy {
        color: var(--dt-link-privacy-color);
      }

      @media (max-width: 1109px) {
        .weight-half {
          position: block;
          width: 100%;
        }
      }

      @media (max-width: 900px) {
        :host {
          --app-drawer-width: 320px;
        }
      }

      @media (max-width: 748px) {
        [main-title] {
          font-size: 1.6em;
        }

        .main-subtitle {
          font-size: 0.7em;
        }
      }

      @media (max-width: 700px) {
        :host {
          --app-drawer-width: 310px;
        }

        h2.padding-horizontal {
          padding-left: 16px;
          padding-right: 16px;
        }

        paper-card {
          margin-top: 8px;
          margin-bottom: 8px;
        }

        .content {
          padding: 4px 12px;
          padding-bottom: 48px;
        }

        iron-image.card-header {
          height: 240px;
        }

        paper-fab {
          right: 16px;
          bottom: 16px;
        }
      }

      @media (max-width: 600px) {
        :host {
          --app-drawer-width: 300px;
        }

        .drawer-header-image {
          width: 48px;
          height: 48px;
        }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
