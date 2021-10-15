# Potato's Website

Website URLs: https://potato-the-shihtzu.firebaseapp.com/ or https://potato-the-shihtzu.web.app/

## Setup
Install the Angular CLI globally.

```bash
npm install -g @angular/cli
```

Start off by installing the node_modules required.

```bash
npm i
```

The file structure is:

```
potato
│   README.md
│   node_modules
│   ...  
└───src
│   │   index.html
│   │   ...
│   └───app
│   └───assets
│   └───...
│   └───environments
│       │   environment.ts
│       │   environment.prod.ts

```
Inside the `src/environments` contains the `environment.ts` and `environment.prod.ts` which has the `secretEmail` string and the `firebaseConfig` object. Go ahead and copy and paste the firebaseConfig from the firebase console -> potato -> project settings then scroll to the bottom. 

`environment.ts`

```javascript

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  secretEmail: 'meganjlin99@gmail.com',
  firebaseConfig: {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

```

`environment.prod.ts`

```javascript

export const environment = {
  production: true,
  secretEmail: 'meganjlin99@gmail.com',
  firebaseConfig: {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID"
  }
};
```



