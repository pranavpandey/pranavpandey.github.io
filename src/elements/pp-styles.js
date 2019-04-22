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

import '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = 
`<dom-module id="pp-styles">
  <template>
    <custom-style>
      <style is="custom-style" include="iron-flex iron-flex-alignment">
        :host {
          --app-drawer-width: 320px;
          --app-primary-color: #3F51B5;
          --app-secondary-color: #E91E63;
          @apply --paper-font-common-base;
          @apply --layout-flex;
        }

        .flex {
          flex: 1 1 auto;
        }

        .content-frame {
          @apply --layout-flex;
          @apply --layout-vertical;
          height: 100%;
        }

        .content {
          @apply --layout-flex;
          padding: 12px 24px;
          padding-bottom: 48px;
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

        p {
          margin: 0;
          white-space: pre-wrap;
          color: #454545;
        }

        h2.padding-horizontal {
          padding-left: 4px;
          padding-right: 4px;
          margin-top: 8px;
          margin-bottom: 8px;
        }

        .color-white {
          color: white;
        }

        .color-primary {
          color: var(--app-primary-color);
        }

        app-drawer {
          --app-drawer-content-container: {
            box-shadow: 2px 0 4px 2px rgba(0,0,0,0.18);
          }
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          --app-header-background-front-layer: {
            background-image: url(../../images/header.jpg);
            background-position: center;
            background-size: cover;
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

        div.scrollable {
          height: 100%;
          overflow: auto;
        }

        app-toolbar.drawer-header {
          margin-top: 24px;
          margin-bottom: 24px;
          margin-left: 4px;
          margin-right: 8px;
        }

        div.drawer-header-circle {
          width: 72px;
          height: 72px;
          border-collapse: separate;
        }

        div.drawer-quote {
          margin-left: 16px;
        }

        iron-image.drawer-header-image {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border-collapse: separate;
          background-color: var(--app-primary-color);
        }

        p.drawer-quote {
          font-size: 0.7em;
          font-style: italic;
          color: #454545;
        }

        p.drawer-title {
          font-size: 1.0em;
        }

        p.sub-title {
          font-size: 0.8em;
          color: var(--app-secondary-color);
        }

        p.menu-category {
          padding: 24px;
          padding-top: 12px;
          padding-bottom: 0px;
          text-transform: uppercase;
        }

        p.footer {
          color: gray;
          font-size: 0.7em;
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
          color: black;
          line-height: 40px;
          background-color: transparent;
          outline: none;
        }

        .drawer-list a iron-icon {
          margin-right: 32px;
          margin-bottom: 2px;
        }

        .drawer-list a.iron-selected {
          background-color: #dedede;
          color: var(--app-primary-color);
        }

        .footer {
          padding: 12px;
          padding-top: 8px;
          vertical-align: bottom;
        }

        paper-ripple.primary {
          color: var(--app-primary-color);
        }

        paper-card {
          width: 100%;
          margin-top: 12px;
          margin-bottom: 12px;
        }

        paper-card.showcase {
          position: relative;
          width: 148px;
          margin-right: 8px;
        }

        .weight-half {
          float: left;
          width: 48.7%;
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

        iron-image.card-header {
          width: 100%;
          height: 420px;
          background-color: var(--app-secondaey-color);
        }

        .card-title {
          margin-top: 0px;
          margin-bottom: 16px;
          font-weight: normal;
          font-size: 1.3em;
        }

        .showcase-title {
          margin-top: 0px;
          margin-bottom: 0px;
          font-weight: normal;
          font-size: 1.3em;
        }

        paper-card.primary {
          --paper-card-background-color: var(--app-primary-color);
          --paper-card-header-color: white;
        }

        iron-icon.small {
          --iron-icon-height: 20px;
          --iron-icon-width: 20px;
          margin-right: 8px;
          margin-bottom: 2px;
        }

        .card-subtitle {
          margin-top: 0px;
          margin-bottom: 4px;
          font-weight: normal;
          font-size: 1.1em;
        }

        .no-vertical-margin {
          margin-top: 0px;
          margin-bottom: 0px;
        }

        paper-fab {
          --paper-fab-background: var(--app-secondary-color);
          position: fixed;
          right: 24px;
          bottom: 24px;
          font-size: 20px;
        }

        .progress {
          margin: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .inherit {
          color: inherit;
          background-color: inherit;
          text-decoration: none;
          display: block;
          padding: 8px 16px;
          color: black;
          line-height: 40px;
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

        paper-button.secondary {
          color: var(--app-secondary-color);
        }

        .margin-top {
          margin-top: 4px;
        }

        .contact-footer {
          padding-top: 22px;
          padding-bottom: 23px;
        }

        google-map {
          height: 352px;
          width: 100%;
          display: block;
        }

        @media (max-width: 1109px) {
          .weight-half {
            position: block;
            width: 100%;
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
                --app-drawer-width: 304px;
          }

          paper-card {
            margin-top: 8px;
            margin-bottom: 8px;
          }

          .content {
            padding: 4px 12px;
            padding-bottom: 48px;
          }

          h2.padding-horizontal {
            padding-left: 16px;
            padding-right: 16px;
          }

          iron-image.card-header {
            height: 240px;
          }

          paper-fab {
            right: 16px;
            bottom: 16px;
          }
        }
      </style>
    </custom-style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);