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
        --dt-preview-size: 320px;
        --dt-preview-size-small: 160px;
        --dt-preview-size-large: 520px;
        --dt-preview-size-xlarge: 1200px;
        --dt-preview-size-xxlarge: 1600px;

        @apply --paper-font-common-base;
        @apply --layout-flex;
      }

      ::-webkit-scrollbar {
        width: 8px;
        background-color: var(--dt-tint-primary-color);
      }

      ::-webkit-scrollbar-track {
        width: 8px;
        background-color: var(--dt-tint-primary-color);
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--dt-primary-color);
      }
      
      ::selection {
        color: var(--dt-tint-secondary-color);
        background: var(--dt-secondary-color);
        background-color: var(--dt-secondary-color);
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
          background-image: linear-gradient(135deg, var(--dt-header-color) 30%, var(--dt-secondary-color) 100%);
          -webkit-filter: brightness(80%);
          filter: brightness(80%);
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
        scrollbar-color: var(--dt-primary-color) var(--dt-tint-primary-color);
        scrollbar-width: thin;
      }

      .drawer-header {
        margin-top: 24px;
        margin-bottom: 24px;
        margin-left: 4px;
        margin-right: 8px;
      }

      .drawer-section {
        padding-left: 16px;
        padding-right: 16px;
      }

      .drawer-header-image {
        width: 72px;
        height: 72px;
        margin-top: 8px;
        margin-right: 16px;
        border-radius: 50%;
        border-collapse: separate;
        background-color: var(--pp-divider-color);
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
        background-color: var(--dt-tint-secondary-color);
        color: var(--dt-secondary-color);
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
        max-width: var(--dt-preview-size-xxlarge);
        padding: 12px 24px;
        padding-bottom: 48px;
        background-color: var(--dt-background-color);
      }

      .content-margin {
        margin-top: 12px;
        margin-right: 8px;
      }

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
      }

      .width-large {
        position: block;
        max-width: 100%;
      }

      .width-xlarge {
        max-width: var(--dt-preview-size-xlarge);
      }

      .weight-half {
        position: relative;
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
        margin-right: 8px;
        margin-bottom: 2px;
        --iron-icon-height: 20px;
        --iron-icon-width: 20px;
      }
      
      iron-icon.theme {
        margin-bottom: 2px;
        --iron-icon-height: 28px;
        --iron-icon-width: 28px;
      }

      iron-image.card-header {
        width: 100%;
        height: 420px;
        background-color: var(--dt-secondary-color);
      }

      paper-icon-button.theme {
        margin-right: 22px;
      }

      paper-spinner {
        --paper-spinner-layer-1-color: var(--dt-secondary-color);
        --paper-spinner-layer-2-color: var(--dt-primary-color);
        --paper-spinner-layer-3-color: var(--dt-secondary-color);
        --paper-spinner-layer-4-color: var(--dt-primary-color);
      }

      paper-tooltip {
        --paper-tooltip-background: var(--dt-secondary-color);
        --paper-tooltip-text-color: var(--dt-tint-secondary-color);
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

      paper-ripple.secondary {
        color: var(--dt-secondary-color);
      }

      paper-ripple.selector {
        color: var(--dt-tint-background-color);
      }

      paper-button {
        padding: 0.5em 0.7em;
      }

      paper-button.primary {
        color: var(--dt-primary-color);
      }
      
      paper-button.secondary {
        color: var(--dt-secondary-color);
      }

      paper-button.tint-background {
        color: var(--dt-tint-background-color);
      }

      paper-toggle-button {
        --paper-toggle-button-unchecked-bar-color: var(--dt-text-description-color);
        --paper-toggle-button-unchecked-button-color: var(--dt-text-description-color);
        --paper-toggle-button-unchecked-ink-color: var(--dt-text-description-color);
      }

      paper-toggle-button.color-primary {
        --paper-toggle-button-checked-bar-color: var(--dt-primary-color);
        --paper-toggle-button-checked-bar-color([disabled]): var(--dt-primary-color);
        --paper-toggle-button-checked-button-color: var(--dt-primary-color);
        --paper-toggle-button-checked-ink-color: var(--dt-primary-color);
      }

      paper-toggle-button.color-secondary {
        --paper-toggle-button-checked-bar-color: var(--dt-secondary-color);
        --paper-toggle-button-checked-bar-color([disabled]): var(--dt-secondary-color);
        --paper-toggle-button-checked-button-color: var(--dt-secondary-color);
        --paper-toggle-button-checked-ink-color: var(--dt-secondary-color);
      }

      paper-toggle-button.theme {
        margin-left: 16px;
        margin-right: 12px;
        --paper-toggle-button-unchecked-bar-color: var(--paper-toggle-button-checked-bar-color);
        --paper-toggle-button-unchecked-button-color: var(--paper-toggle-button-checked-bar-color);
        --paper-toggle-button-unchecked-ink-color: var(--paper-toggle-button-checked-bar-color);
      }

      paper-card {
        width: 100%;
        margin-top: 12px;
        margin-bottom: 12px;
        --paper-card-background-color: var(--dt-surface-color);
        --paper-card-actions: {
          padding-top: 0.5em;
          padding-bottom: 0.5em;
          border-top: 1px solid var(--pp-divider-color);
        }

        @apply --shadow-transition;
      }

      paper-card:hover {
        --paper-card-background-color: var(--dt-surface-color-elevation);
        
        @apply --paper-material-elevation-4;
      }

      paper-card iron-image {
        max-height: var(--dt-preview-size);
      }
    
      paper-card.primary {
        --paper-card-background-color: var(--dt-primary-color);
        --paper-card-header-color: var(--dt-tint-primary-color);
      }

      paper-card.secondary {
        --paper-card-background-color: var(--dt-secondary-color);
        --paper-card-header-color: var(--dt-tint-secondary-color);
      }

      paper-card.secondary ::selection {
        color: var(--dt-tint-primary-color);
        background: var(--dt-primary-color);
        background-color: var(--dt-primary-color);
      }

      paper-card.showcase {
        position: relative;
        max-width: var(--dt-preview-size-small);
        margin-right: 8px;
      }

      paper-card.showcase div iron-icon {
        width: 100%;
        height: 100%;
      }

      paper-card.showcase div iron-image {
        width: 100%;
        max-height: var(--dt-preview-size-small);
      }

      paper-card.video {
        max-width: var(--dt-preview-size-large);
        margin-right: 8px;
      }

      iframe.video {
        width: 100%;
        height: var(--dt-preview-size);
        left: 0;
        top: 0;
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
        color: var(--dt-background-color);
        --paper-fab-background: var(--dt-secondary-color);
        --paper-fab-keyboard-focus-background: var(--dt-secondary-color);
        --paper-fab-disabled-background: var(--dt-tint-secondary-color);
      }

      paper-fab:hover{
        @apply --paper-material-elevation-4;
      }

      paper-input {
        --paper-input-container-color: var(--dt-text-description-color);     
        --paper-input-container-focus-color: var(--dt-secondary-color);   
        --paper-input-container-invalid-color: var(--dt-text-primary-color);          
        --paper-input-container-input: {
          color: var(--dt-text-secondary-color);
        };
      }

      paper-input iron-icon {
        color: var(--dt-tint-background-color);
      }

      paper-textarea {
        --paper-input-container-color: var(--dt-text-description-color);     
        --paper-input-container-focus-color: var(--dt-secondary-color);   
        --paper-input-container-invalid-color: var(--dt-text-primary-color);          
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
        padding-top: 1em;
        padding-bottom: 1em;
      }

      .color-primary {
        color: var(--dt-primary-color);
      }

      .color-secondary {
        color: var(--dt-secondary-color);
      }

      .color-tint-background {
        color: var(--dt-tint-background-color);
      }
      
      .color-tint-primary {
        color: var(--dt-tint-primary-color);
      }

      .color-tint-secondary {
        color: var(--dt-tint-secondary-color);
      }

      .color-link-techtics {
        color: var(--dt-link-techtics-color);
      }

      .color-link-support {
        color: var(--dt-link-support-color);
      }

      .color-link-theme {
        color: var(--dt-link-theme-color);
      }

      .color-link-privacy {
        color: var(--dt-link-privacy-color);
      }

      @media (min-width: 1490px) {
        .width-large {
          position: relative;
          max-width: var(--dt-preview-size-large);
          margin-right: 8px;
        }
      }

      @media (max-width: 1109px) {
        .width-xlarge {
          max-width: 100%;
        }
        
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

      @media (max-width: 840px) {
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

        .drawer-header-image {
          width: 48px;
          height: 48px;
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

        .content-margin {
          margin-top: 8px;
          margin-right: 8px;
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
          --dt-preview-size: 280px;
          --dt-preview-size-small: 140px;
          --dt-preview-size-large: 460px;
          --dt-preview-size-xlarge: 1000px;
          --dt-preview-size-xxlarge: 1200px;
        }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
