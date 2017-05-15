# PostcardExchange

This app lets photographers exchange postcards with people all over the world. It uses firebase and Angular2. You will need nodeJS, a Google Firebase account, and angular-cli installed to run this project locally. You can view the live project at [my firebase site] (https://postcardexchange-1488491588529.firebaseapp.com/#/).

## Running locally

Clone this repository.

## Install Dependencies
```
npm install
```

```
bower install
```

## Installation
  * Clone this repository to a location on your computer
  * Add a ~/src/app/api-keys.ts file with the following code (adding your api key info from firebase):
  ```javascript
   export var masterFirebaseConfig = {
    apiKey: "YOUR API KEY HERE",
    authDomain: "YOUR AUTHDOMAIN HERE",
    databaseURL: "YOUR DATABASE URL HERE",
    storageBucket: "YOUR STORAGE BUCKET HERE",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
   };
   export var mastergoogleMaps = {
      apiKey: "YOUR API KEY HERE"
    }
  ```
  * Navigate to the repo location using your console/terminal and run the following commands:
    * npm install
    * bower install
    * ng serve

Site will automatically launch in browser.
