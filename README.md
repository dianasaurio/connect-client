# humanapi-connect-client

## New version 2.x.x available

We have recently released a new Connect integration client version that replaces the old 1.x.x version that has been deprecated.

It is recommended that you use this new client version which is backwards compatible to make the transition easier.

Please refer to http://myhealthdata.co/connect-guide for full instructions on how to use the Connect client

## Upgrade from 1.x.x

### CDN
- If you are using the script via the CDN and the source location is `src=https://cdn.humanapi.co/humanapi-connect-client@latest.js` you will be upgraded automatically. The new version is backwards compatible so there is no other change needed for the time being.

- If you are using a specific version of the library, e.g. `src=https://cdn.humanapi.co/humanapi-connect-client@1.2.4.js` you can just use `humanapi-connect-client@latest.js` or specify a 2.x.x version, e.g. `humanapi-connect-client@2.0.0.js`

### npm
- Install the latest package with `npm install humanapi-connect-client`

## Description

This purpose of this library is to spawn https://hapi-connect.humanapi.co within your application.

We recommend you use version 2.0.0+ since version 1.3.1 has been deprecated and support for it will be removed in the future, although it will continue to work in the meantime.

## Installation

This module can be used by loading the script from our CDN or by installing the npm module.

### CDN
To use the library via our CDN you can include the following script source:

```html
<script src="https://cdn.humanapi.co/humanapi-connect-client@latest.js">
```


### npm module
To install the npm module and use it with e.g. React:

```shell script
npm install --save humanapi-connect-client
```

## Usage

To use this library regardless of the method used, you first need to acquire a session token and set it as the data-attribute `data-hapi-token` of an element that supports the `onclick` event (e.g. a button). Then, you need to add the class `hapi__token-container` to the parent of the element that has the token value, e.g.: 

```html
<div class="hapi__token-container">
    <button data-hapi-token="<your session token>">Open Connect</button>
</div>
```

The library will then automatically configure all elements with the `data-hapi-token` attribute under that parent, to allow them to open the Connect window.

### Lifecycle hooks

`humanapi-connect-client` can be configured to respond to the following lifecycle hooks:
 
 - `connect`: This event will be fired after a source has been successfully connected
 - `disconnect`: This event will be fired after a source has been disconnected
 - `close`: This event will be fired after the Connect window is closed, regardless of whether sources were connected or not
 
 To add a lifecycle hook to a particular event you have to use the `on(eventName, eventListener)` method, e.g.:
 
 ```javascript
HumanConnect.on("close", (response) => {console.log("close", response)});
HumanConnect.on("connect", (response) => {console.log("connect", response)});
HumanConnect.on("disconnect", (response) => {console.log("disconnect", response)});
```
 
 Any function listening for lifecycle events defined by Connect will receive a payload with the following schema:
  
  ```javascript
   {
       sessionResults: {
           // List of sources the user connected during this session
           connectedSources: [
               {
                   name: "Starfleet Pharmacy",
                   id: "5b1daf3f079c652eaf41fd23"
               }
           ],
           // List of sources the user disconnected during this session
           disconnectedSources: [],
           // List of sources the user requested during this session
           requestedSources: [
               {
                   address: "742 Evergreen Terrace, OH",
                   healthSystem: "N/A",
                   location: {
                       latitude: 41.3289,
                       longitude: -105.6928
                   },
                   physician: "Dr. John Smith",
                   website: "drjohnsmith.example.com"
               }
           ]
       },
       // List of sources the user currently has connected with your app
       currentConnections: [
           {
               name: "Starfleet Pharmacy",
               id: "5b1daf3f079c652eaf41fd23"
           }
       ],
       // List of sources the user has requested
       requestedProviders: [
               {
                   address: "742 Evergreen Terrace, OH",
                   healthSystem: "N/A",
                   location: {
                       latitude: 41.3289,
                       longitude: -105.6928
                   },
                   physician: "Dr. John Smith",
                   website: "drjohnsmith.example.com"
               }
       ]
   }
   ```

## Version 1 setup instructions

Version 1 has been deprecated, but the current release version (2.0.X) will be backwards compatible and support will eventually be removed in a future version.

### Usage 

To use version 1 of the library you have to build an `options` and pass that as an argument for the `open()` method:

```javascript
import * as ConnectClient from "humanapi-connect-client";

const options = { token: "this-is-your-session-token" };

ConnectClient.open(options);
```

## Full list of options

#### `options.token` - _required_

This is the session token that is used to validate your `hapi-connect` session.

#### `options.logger` - _optional_

You can optionally pass a `logger` function to `humanapi-connect-client`. This is especially useful for debugging purposes, such as tracing behavior as `humanapi-connect-client` goes through its runtime.


## Lifecycle hooks

`humanapi-connect-client` can be configured to respond to lifecycle hooks. Any function listening for lifecycle events defined by Connect will receive a payload with the following schema:

```javascript
{
    sessionResults: {
        // List of sources the user connected during this session
        connected: [
            {
                name: "Starfleet Pharmacy",
                id: "5b1daf3f079c652eaf41fd23"
            }
        ],
        // List of sources the user disconnected during this session
        disconnected: []
    },

    // List of sources the user currently has connected with your app
    connections: [
        {
            name: "Starfleet Pharmacy",
            id: "5b1daf3f079c652eaf41fd23"
        }
    ]
}
```

#### `options.onConnectSource(payload)` - _optional_

This lifecycle event will fire when users connect a source.

#### `options.onDisconnectSource(payload)` - _optional_

This lifecycle event will fire when users disconnect a source.

#### `options.onClose(payload)` - _optional_

This is the function that will be executed when `hapi-connect` is closed.

## Example Usage

```javascript
import * as HumanConnect from "humanapi-connect-client";

const token = "this-is-your-session-token";

/* Library runtime operations will be logged to your console, prefixed with "humanapi-connect-client" */
const logger = console.log.bind(null, "humanapi-connect-client: ")

const onClose = ({ sessionResults, connections }) => {
    console.log(`You have a total of ${connections.length} connections`);
    const connectionsStr = connections.reduce((acc, connection, i) => {
        acc += connection.name;
        acc += i !== connections.length - 1 && ", ";
        return acc;
    }, "");
    console.log(`Your current connections are ${connectionsStr}`);
    console.log(
        `During this previous session, you connected ${
            sessionResults.connected.length
        } sources and disconnected ${
            sessionResults.disconnected.length
        } sources.`
    );
};

const options = { token, logger, onClose };

HumanConnect.open(options);
```
