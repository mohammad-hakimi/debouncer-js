# debouncer-js

## Table of Contents

* [Installation](#installation)
* [Example](#example)

## Installation

To install, you can use [npm](https://npmjs.org/):

    $ npm install --save debouncer-js

To install debouncer-js in CDN app:

- Add this CDN script tag before your JS files (for example
  from [unpkg](https://unpkg.com/)):

         <script src="https://unpkg.com/debouncer-js@1.0.2/debouncer.js"
         crossorigin="anonymous"
         referrerpolicy="no-referrer"></script>

## Example

Here is a simple example of debouncer-js being used in an app

```jsx
import Debouncer from 'debouncer-js';

const debouncer = new Debouncer();

function func(...args) {
    // Do something
}

const debouncedFunc = debouncer.debounce(func, 500);

function onChangeSomething() {
    const args = [/*Some args*/];
    debouncedFunc(...args); 
    // It will call func when ever 
    // the onChangeSomething call last more than 500ms.
  
debouncer.clear(func); // Or func.name ---- Clear the func from being called in the delay time and latest call won't be trigger.
debouncer.flush(); // Remove all debounced functions calls  
}
```
