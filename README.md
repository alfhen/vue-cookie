# vue-cookie [![CircleCI](https://circleci.com/gh/alfhen/vue-cookie.svg?style=svg)](https://circleci.com/gh/alfhen/vue-cookie)
A Vue.js plugin for manipulating cookies tested up to ```Vue v2.0.5```

## Installation

Install through npm

``` bash
npm install vue-cookie --save

```

Include in ```<body>``` after loading Vue and it will automatically hook into Vue

``` html
<script src="/node_modules/vue-cookie/build/vue-cookie.js'"></script>

 ```

Or do it the cool way and load it in your ```main.js/app.js```

``` javascript
// Require dependencies
var Vue = require('vue');
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

```

### Usage
The plugin is available through ```this.$cookie``` in components or ```Vue.cookie```

Rather than implementing my own Cookie handling logic the plugin now wraps the awesome
[tiny-cookie](https://github.com/Alex1990/tiny-cookie "Tiny cookie documentation") package

###### Example
``` javascript
// From some method in one of your Vue components
this.$cookie.set('test', 'Hello world!', 1);
// This will set a cookie with the name 'test' and the value 'Hello world!' that expires in one day

// To get the value of a cookie use
this.$cookie.get('test');

// To delete a cookie use
this.$cookie.delete('test');

```

###### Advanced examples
``` javascript

// Setting the cookie Domain
this.$cookie.set('test', 'Random value', {expires: 1, domain: 'localhost'});

// As this cookie is set with a domain then if you wish to delete it you have to provide the domain when calling delete
this.$cookie.delete('test', {domain: 'localhost'});

// Customizing expires
var date = new Date;
date.setDate(date.getDate() + 21);

this.$cookie.set('dateObject', 'A date object', { expires: date });
this.$cookie.set('dateString', 'A parsable date string', { expires: date.toGMTString() });
this.$cookie.set('integer', 'Seven days later', { expires: 7 });
this.$cookie.set('stringSuffixY', 'One year later', { expires: '1Y' });
this.$cookie.set('stringSuffixM', 'One month later', { expires: '1M' });
this.$cookie.set('stringSuffixD', 'One day later', { expires: '1D' });
this.$cookie.set('stringSuffixh', 'One hour later', { expires: '1h' });
this.$cookie.set('stringSuffixm', 'Ten minutes later', { expires: '10m' });
this.$cookie.set('stringSuffixs', 'Thirty seconds later', { expires: '30s' });

```

Thanks for using the plugin, I am happy to accept feedback/pull requests, do not forget to star if you like it!

Happy Coding! :D

### Tests
This packacge uses the ´´´testem``` framework and ```jasmine``` assertion library

``` bash
# Run npm install to fetch dependencies
npm install

# Then you may run the tests from
npm run test-dev

```
