# vue-cookie
A Vue.js plugin for manipulating cookies

## Installation

Install through npm

``` bash
npm install vue-cookie --save

```

Include in ```<body>``` after loading Vue and it will automatically hook into Vue

``` html
<script src="/node_modules/vue-cookie/src/vue-cookie.js'"></script>

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
The plugin is available through ```this.$cookie``` in components

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

Thanks for using the plugin, I am happy to accept feedback/pull requests, don not forget to star if you like it!

Happy Coding! :D
