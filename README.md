# Tink smooth scroll Angular service

v1.0.0

## What is this repository for?

The Tink Angular smooth scroll service gives you an easy way to scroll to an element.

Tink is an in-house developed easy-to-use front end framework for quick prototyping and simple deployment of all kinds of websites and apps, keeping a uniform and consistent look and feel.

## Setup

### Prerequisites

* nodeJS [http://nodejs.org/download/](http://nodejs.org/download/)
* bower: `npm install -g bower`

### Install

1. Go to the root of your project and type the following command in your terminal:
   `bower install tink-smooth-scroll-angular --save`

2. Include `dist/tink-smooth-scroll-angular.js` and its necessary dependencies in your project.

## How to use

```js
myApp.controller('myController', ['tinkSmoothScroll', function(tinkSmoothScroll) {
  this.scrollTo = function(id) {
    tinkSmoothScroll.scrollToID(id);
  }
}]);
```

```html
<button ng-click="scrollToID('down')">Scroll to id 'down'</button>
[...]
<div id="down">It will scroll to this element</div>
```


## Contribution guidelines

* If you're not sure, drop us a note
* Fork this repo
* Do your thing
* Create a pull request

## Who do I talk to?

* Jasper Van Proeyen - jasper.vanproeyen@digipolis.be - Lead front-end
* Tom Wuyts - tom.wuyts@digipolis.be - Lead UX
* [The hand](https://www.youtube.com/watch?v=_O-QqC9yM28)
