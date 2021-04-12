# Schools Index

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br />

[![NPM](https://nodei.co/npm/postalcodes-finder.png?compact=true)](https://npmjs.org/package/postalcodes-finder)

##### You can use this package to get informations about any italian village.

## Installation

```js
npm i postalcodes-finder --save
```

## Usage

### Importing

```js
const Client = require("postalcodes-finder").Client;
```

or

```js
const { Client } = require("postalcodes-finder");
```

### Available functions

###### Every function return an array of objects

<br />

##### Get all available informations for every village

```js
const ... = await Client.getAllCodes();
```

<br />

##### Get informations by postal code

```js
// Venice postal code: 30100
const ... = await Client.getInfoByPostalCode(code);
```

<br />

##### Get informations by city name abbreviation

```js
// Venice city code: "VI"
const ... = await Client.getInfosByCityCode(code);
```

<br />

##### Get informations by village name

```js
// Village name: "Venezia"
const ... = await Client.getInfosByCityCode(code);
```

<br />

##### Get informations by village city code

```js
// Venice admin code: 20
const ... = await Client.getInfosByAdminCode(code);
```

<br />
