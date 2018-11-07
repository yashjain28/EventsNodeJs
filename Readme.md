
# ipm package: EventsNodeJs

## Overview

Partial Implementation of NodeJs' Events library

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)


## Setup
Import Just the Code Library, Code Service just gives an exmaple of how to use it.
## Usage
Example Checkout the Code Service, once system is imported.

```javascript
function TestEventsNodeJs(req, resp) {
  const EventEmitter = EventsNodeJs();
  var ee = new EventEmitter();
  ee.on("message", function(text) {
    log(text);
    resp.success('Success');
  });
  ee.emit("message", "hello world");
}


```
## API
The goal is to provide an API that is identical to [node's Events API](https://nodejs.org/api/events.html). Currently matches Node.js 10.1 API. It is modified from [node-events](https://github.com/Gozala/events) library. 


## Contributing
PRs are very welcome! The main way to contribute to `EventsNodeJs` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5 (followed by some modifications), rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js. This module intends to provide exactly the same API as Node.js, so features that are not available in the core `Events` module will not be accepted. 

If there is a difference in behaviour between Node.js's `Events` module and this module, please open an issue!
