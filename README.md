<img src="https://raw.githubusercontent.com/pranavpandey/pranavpandey.github.io/master/images/projects/icon-pp.png" width="160" height="160" align="right" hspace="20">

# My Personal Website

[![Build Status](https://travis-ci.org/pranavpandey/pranavpandey.github.io.svg?branch=polymer-2.x-hybrid)](https://travis-ci.org/pranavpandey/pranavpandey.github.io)

This is my personal website in which I am following the
[Material Design Guidelines](https://material.io/) by Google using
[Polymer](https://www.polymer-project.org/2.0/) and will keep experimenting
with new elements and features. I have made it open source so that anyone can
learn from my experiences. It is just a start as I am not a professional web
developer but I will do my best to make it better.

---

## Setup

### Prerequisites

1. Install the LTS version (4.x) of [Node.js](https://nodejs.org/). The current
version (6.x) should work, but is not officially supported. Versions below LTS
are not supported.

2. Install [polymer-cli](https://github.com/Polymer/polymer-cli).

  ```
  npm install -g polymer-cli
  ```

### Initialize this project

Either clone or fork then, clone to make this project as a starting point for
your website.

```
git clone https://github.com/pranavpandey/pranavpandey.github.io
```

### Install dependencies
It uses [npm] (https://www.npmjs.com) to manage dependensies. Run the below command 
in the root dir of project to automatically install the dependencies.

```
npm install
```

### Start the development server

This command serves the app at `http://127.0.0.1:8081` and provides basic URL
routing for the app:

    npm start

### Build

The `npm run build` command builds your Polymer application for production, using build configuration options provided by the command line or in your project's `polymer.json` file.

You can configure your `polymer.json` file to create multiple builds. This is necessary if you will be serving different builds optimized for different browsers. You can define your own named builds, or use presets. See the documentation on [building your project for production](https://www.polymer-project.org/3.0/toolbox/build-for-production) for more information.

The Polymer Starter Kit is configured to create three builds. These builds will be output to a subdirectory under the `build/` directory as follows:

```
build/
  es5-bundled/
  es6-bundled/
  esm-bundled/
```

* `es5-bundled` is a bundled, minified build with a service worker. ES6 code is compiled to ES5 for compatibility with older browsers.
* `es6-bundled` is a bundled, minified build with a service worker. ES6 code is served as-is. This build is for browsers that can handle ES6 code - see [building your project for production](https://www.polymer-project.org/3.0/toolbox/build-for-production#compiling) for a list.
* `esm-bundled` is a bundled, minified build with a service worker. It uses standard ES module import/export statements for browsers that support them.

Run `polymer help build` for the full list of available options and optimizations. Also, see the documentation on the [polymer.json specification](https://www.polymer-project.org/3.0/docs/tools/polymer-json) and [building your Polymer application for production](https://www.polymer-project.org/3.0/toolbox/build-for-production).

### Preview the build

This command serves your app. Replace `build-folder-name` with the folder name of the build you want to serve.

    npm start build/build-folder-name/

### Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

    npm test

If running Windows you will need to set the following environment variables:

- LAUNCHPAD_BROWSERS
- LAUNCHPAD_CHROME

Read More here [daffl/launchpad](https://github.com/daffl/launchpad#environment-variables-impacting-local-browsers-detection)

---

## Deploy with Firebase

1. [Sign up](https://www.firebase.com/signup/) for a Firebase account.

2. Install the Firebase command line tools.

  ```
  npm install -g firebase-tools
  ```

  The -g flag instructs npm to install the package globally so that you can use
  the firebase command from any directory. You may need to install the package
  with sudo privileges.

3. cd into your project directory.

4. Inititalize the Firebase application.

  ```
  firebase login
  firebase init
  ```

  Firebase asks you which app you would like to use for hosting. If you just
  signed up, you should see one app with a randomly-generated name. You can use
  that one. Otherwise go to https://www.firebase.com/account to create a new
  app.

5. Firebase asks you the name of your app's public directory. Enter
build/bundled. This works because when you run polymer build to build your
application, Polymer CLI places your bundled application appropriate for
serving on Firebase into the build/bundled folder.

6. Edit your firebase configuration to add support for URL routing. Add the
following section to your firebase.json file, which will instruct Firebase to
serve up index.html for any URL's that don't otherwise end in a file extension.

  ```json
  "rewrites": [ {
    "source": "**/!{*.*}",
    "destination": "/index.html"
  } ]
  ```

7. Deploy.

  ```
  firebase deploy
  ```

  The URL to your live site is listed in the output.

---

## Extend

You can extend the app by adding more elements that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections
of the application.

### Theme

It supports `light` and `dark` themes which can be changed at runtime. It will store
the user preference in local storage to persist it for the future visits.

You can modify the various color variables in `src/pages/app.js` file to create your 
own unique theme. Currently, it supports the following variables:

```
--dt-theme: light
--dt-background-color: #EAEAEA
--dt-surface-color: #EEEEEE
--dt-selector-color: #DADADA
--dt-header-color: #3F51B5
--dt-primary-color: #3F51B5
--dt-secondary-color: #E91E63
--dt-tint-primary-color: #FFFFFF
--dt-tint-secondary-color': #FFFFFF
--dt-text-primary-color: #000000
--dt-text-secondary-color: #454545
--dt-text-description-color: #787878
--dt-link-privacy-color: #1976D2
--pp-divider-color: #CACACA

--dt-theme: dark
--dt-background-color: #222222
--dt-surface-color: #343434
--dt-selector-color: #323232
--dt-header-color: #3F51B5
--dt-primary-color: #7986CB
--dt-secondary-color: #FF4081
--dt-tint-primary-color: #FFFFFF
--dt-tint-secondary-color': #FFFFFF
--dt-text-primary-color: #FFFFFF
--dt-text-secondary-color: #CDCDCD
--dt-text-description-color: #787878
--dt-link-privacy-color: #2196F3
--pp-divider-color: #4A4A4A
```

> Update the `theme-color` in `manifest.json` and `index.html` files to complete 
the theme.

### Data

Almost all the website data is generated via `JSON` files stored in the `data`
folder. Modify all the data files to display your own data. Please do not break
the `JSON` schema otherwise, it will not display the data.

### Google Analytics

It has [Google Analytics](https://www.google.co.in/analytics/#?modal_active=none)
support to monitor the website traffic. Add your tracking id in the `index.html` 
file to track the website data.

```html
<body>
  <pp-analytics api-key="YOUR-TRACKING-ID"></pp-analytics>

  ...
</body>
```

### Twitter widgets

Home screen has an option to display twitter widgets. Add your profile
link in the `src/pages/pp-home.js` file to display the latest tweets. 
For loading twitter widgets, I have ported the 
[Twitter widgets](https://developer.twitter.com/en/docs/twitter-for-websites) for 
Polymer 3.x. You can also add multiple widgets.

```html
<pp-twitter>
  ...

  <a class="twitter-timeline" 
    href="https://twitter.com/YOUR_USER_NAME"
    data-tweet-limit="5" data-chrome="nofooter transparent">
  </a>

  ...
</pp-twitter>
```

> Update the `theme` and `username` in javascript function also to get the 
optimal results on theme change.

```javascript
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
    </pp-twitter>
  `;
}
```

### Contact form

Contact form is very useful if someone wants to contact you on your official
email id. It has built in support via [formspree.io](https://formspree.io/).
Add your verified email id in the `src/pages/pp-contact.js` file to get emails
via `formspree.io`.

```html
<iron-form id="contactform">
  <form action="https://formspree.io/YOUR_EMAIL_ID" method="post">

    ...
  </form>
</iron-form>
```

### Google Maps

It has Google Maps support to display your location on contact page. Add your
API Key in the `src/pages/pp-contact.js` file and modify the location to
display it on the map. To generate an API Key, please follow the official
documentation [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

```html
<paper-card>
  ...

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
```

---

## Author

Pranav Pandey

[![GitHub](https://img.shields.io/github/followers/pranavpandey?label=GitHub&style=social)](https://github.com/pranavpandey)
[![Follow on Twitter](https://img.shields.io/twitter/follow/pranavpandeydev?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=pranavpandeydev)
[![Donate via PayPal](https://img.shields.io/static/v1?label=Donate&message=PayPal&color=blue)](https://paypal.me/pranavpandeydev)

---

## License

The Polymer library uses a BSD-like license available [here](./LICENSE.txt).
<br />[Devicon](http://devicon.fr/), [SVG Social Media Icons](https://codepen.io/ruandre/pen/howFi).
