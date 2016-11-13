# My Personal Website
Building a place for me on the web...I am following the Material Design
Guidelines by Google using [Polymer] (https://www.polymer-project.org/1.0/)
and will keep experimenting with new elements and features. Its open source so
that anyone can learn from my experiences. It is just a start as I am not a
professional web developer but I will do my best to make it better.

---

## Setup

### Prerequisites

1. Install the LTS version (4.x) of [Node.js](https://nodejs.org/). The current version (6.x) should work, but is not officially supported. Versions below LTS are not supported.

2. Install [polymer-cli](https://github.com/Polymer/polymer-cli).

  ```
  npm install -g polymer-cli
  ```

### Initialize this project

Either clone or fork then, clone to make this project as a starting point for your website.

```
git clone https://github.com/pranavpandey/pranavpandey.github.io
```

### Install dependencies
It uses [bower] (https://bower.io/) to manage dependensies. Run below command to install `bower` via npm.

```
npm install -g bower
```

Now, run the below command in the root dir of project to automatically install the dependencies.

```
bower install
```

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app.

```
polymer serve
```

---

## Build

This command performs HTML, CSS, and JS minification on the application
dependencies, and generates a service-worker.js file with code to pre-cache the
dependencies based on the entrypoint and fragments specified in `polymer.json`.
The minified files are output to the `build/unbundled` folder, and are suitable
for serving from a HTTP/2+Push compatible server.

In addition the command also creates a fallback `build/bundled` folder,
generated using fragment bundling, suitable for serving from non
H2/push-compatible servers or to clients that do not support H2/Push.

```
polymer build
```

---

## Test the build

This command serves the minified version of the app in an unbundled state, as it would
be served by a push-compatible server.

```
polymer serve build/unbundled
```

This command serves the minified version of the app generated using fragment bundling.

```
polymer serve build/bundled
```

---

## Deploy with Firebase

1. [Sign up for a Firebase account](https://www.firebase.com/signup/).

2. Install the Firebase command line tools.

  ```
  npm install -g firebase-tools
  ```

  The -g flag instructs npm to install the package globally so that you can use the firebase command from any directory. You may need to install the package with sudo privileges.

3. cd into your project directory.

4. Inititalize the Firebase application.

  ```
  firebase login
  firebase init
  ```

  Firebase asks you which app you would like to use for hosting. If you just signed up, you should see one app with a randomly-generated name. You can use that one. Otherwise go to https://www.firebase.com/account to create a new app.

5. Firebase asks you the name of your app's public directory. Enter build/bundled. This works because when you run polymer build to build your application, Polymer CLI places your bundled application appropriate for serving on Firebase into the build/bundled folder.

6. Edit your firebase configuration to add support for URL routing. Add the following section to your firebase.json file, which will instruct Firebase to serve up index.html for any URL's that don't otherwise end in a file extension.

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
of the application.  Each new demand-loaded fragment should be added to the
list of `fragments` in the included `polymer.json` file.  This will ensure
those components and their dependencies are added to the list of pre-cached
components (and will have bundles created in the fallback `bundled` build).

---

## License

The Polymer library uses a BSD-like license available [here](./LICENSE.txt).
