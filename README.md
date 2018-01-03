# My Personal Website

[![Build Status](https://travis-ci.org/pranavpandey/pranavpandey.github.io.svg?branch=polymer-1.x)](https://travis-ci.org/pranavpandey/pranavpandey.github.io)

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
It uses [bower] (https://bower.io/) to manage dependensies. Run below command
to install `bower` via npm.

```
npm install -g bower
```

Now, run the below command in the root dir of project to automatically install
the dependencies.

```
bower install
```

### Start the development server

This command serves the app at `http://localhost:8081` and provides basic URL
routing for the app.

```
polymer serve
```

---

## Build

Build a Polymer application for production. This includes support for
optimizations like code bundling, minification, and ES6 compilation to run
on older browsers.

Most optimizations are disabled by default. To make sure the correct build
enhancements are always used, you can provide a set of build configurations via
the ["builds"](https://www.polymer-project.org/2.0/docs/tools/polymer-json#builds)
field of your `polymer.json` file:

```json
"builds": [{
  "bundle": true,
  "js": {"minify": true},
  "css": {"minify": true},
  "html": {"minify": true}
}],
```

Run `polymer help build` for the full list of available options & optimizations.

If you need support for something that is missing from the CLI, check out the
[polymer-build](https://github.com/Polymer/polymer-build) library. Is the JS
library that powers the CLI, and calling it directly gives you much greater
control than the CLI can provide. Visit the repo for usage information and
examples.

```
polymer build [options...]
```

---

## Test the build

Start a development server designed for serving Polymer & Web Component
projects. Applications are served as-is, while elements are served from a
special route where it can properly reference its dependencies.

By default, the server will automatically use [Babel](https://babeljs.io) to
transpile any ES6 code down to ES5 for browsers that don't have native support
for important ES6 features like classes. This behavior can be explicitly turned
on/off for all browsers via the `--compile` option.

Run `polymer help serve` for the full list of available options.

```
polymer serve [options...]
```

Lint your project for common errors. Specify a set of linting rules via
the `--rules` command option or your `polymer.json` configuration. To make
sure you always use the correct rule set, we recommend adding a "lint" section
to your polymer.json like so:

```json
"lint": {
  "rules": [
    "polymer-2-hybrid"
  ]
},
```

Run `polymer help lint` for the full list of available options and rule sets.

```
polymer lint [--rules RULE_SET] [options...]
```

In case of any issue, please follow the official guidelines
[here](https://github.com/Polymer/polymer-cli).

---

## Deploy with Firebase

1. [Sign up for a Firebase account](https://www.firebase.com/signup/).

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

In case of any issue, please follow the official guidelines
[here](https://www.polymer-project.org/1.0/start/toolbox/deploy).

---

## Extend

You can extend the app by adding more elements that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections
of the application.  Each new demand-loaded fragment should be added to the
list of `fragments` in the included `polymer.json` file.  This will ensure
those components and their dependencies are added to the list of pre-cached
components (and will have bundles created in the fallback `bundled` build).

### Data

Almost all the website data is generated via `json` files stored in the `data`
folder. Modify all the data files to display your own data. Please do not break
the `json` schema otherwise, it will not display the data.

### Google Analytics

It has [Google Analytics](https://www.google.co.in/analytics/#?modal_active=none)
support to monitor the website traffic. Add your tracking id in the
`index.html` file to track the website data.

```html
<body fullbleed layout vertical unresolved>
  <start-google-analytics-tracker
    code="YOUR-TRACKING-ID">
  </start-google-analytics-tracker>

  ...
</body>
```

### Twitter widgets

Home screen has an option to display twitter widgets. Add your profile
link in the `src/pages/pp-home.html` file to display the latest tweets. For
loading twitter widgets, I am using
[this polymer element](https://github.com/joaovieira/twitter-widgets). You can
also add multiple widgets.

```html
<twitter-widgets>
  ...

  <a class="twitter-timeline" href="https://twitter.com/YOUR_USER_NAME"
    data-tweet-limit="5"
    data-chrome="nofooter transparent">
  </a>

  ...
</twitter-widgets>
```

### Contact form

Contact form is very useful if someone wants to contact you on your official
email id. It has built in support via [formspree.io](https://formspree.io/).
Add your verified email id in the `src/pages/pp-contact.html` file to get emails
via `formspree.io`.

```html
<paper-card class="weight-half">
  <form is="iron-form" id="presubmit"
    action="https://formspree.io/YOUR_EMAIL_ID" method="post"
    on-iron-form-presubmit="_presubmit">

    ...
  </form>

  ...
</paper-card>
```

### Google Maps

It has Google Maps support to display your location on contact page. Add your
API Key in the `src/pages/pp-contact.html` file and modify the location to
display it on the map. To generate an API Key, please follow the official
documentation [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

```html
<paper-card class="weight-half">
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

## License

The Polymer library uses a BSD-like license available [here](./LICENSE.txt).
<br />[Devicon](http://devicon.fr/), [SVG Social Media Icons](https://codepen.io/ruandre/pen/howFi).
