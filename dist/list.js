webpackJsonp([4],{31:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(b,"__esModule",{value:!0}),b.fetchListIfNeeded=b.currentListSelector=b.HnListElement=void 0;var h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c(10);c(37);var j=c(49),k=d(j),l=c(38),m=d(l),n=c(39),o=d(n),p=c(12);c(46);var q=c(44),r=c(36),s=c(15),t=c(11);p.store.addReducers({lists:k.default,favorites:o.default,items:m.default}),p.store.dispatch((0,r.loadFavorites)());var u=b.HnListElement=function(a){function b(){return e(this,b),f(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return g(b,a),h(b,[{key:"update",value:function(a){var b=(0,j.currentListSelector)(a);if(b){document.title=b.id;var c={favorites:a.favorites,list:b},d=(0,j.currentItemsSelector)(a);d&&(c.items=d),this.setProperties(c)}}},{key:"_isFavorite",value:function(a,b){return!!(a&&b&&a[b.id])}},{key:"_reload",value:function(){p.store.dispatch((0,q.fetchList)(this.list))}}],[{key:"template",get:function(){return"\n    "+t.sharedStyles+"\n    <button on-click=\"_reload\">Reload</button>\n    <dom-repeat items=\"[[items]]\">\n      <template>\n        <hn-summary item=\"[[item]]\" is-favorite=\"[[_isFavorite(favorites, item)]]\"></hn-summary>\n      </template>\n    </dom-repeat>\n    "}},{key:"properties",get:function(){return{list:Object,favorites:Object,items:Array}}}]),b}((0,s.connect)(p.store)(i.Element));customElements.define("hn-list",u),b.currentListSelector=j.currentListSelector,b.fetchListIfNeeded=q.fetchListIfNeeded},44:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=b.REQUEST_LIST="REQUEST_LIST",d=b.RECEIVE_LIST="RECEIVE_LIST",e=b.FAIL_LIST="FAIL_LIST",f=b.fetchList=function(a){return function(b){b(h(a.id)),fetch("https://node-hnapi.herokuapp.com/"+a.id).then(function(a){return a.json()}).then(function(c){return b(i(a.id,c))}).catch(function(){return b(j(a.id))})}},g=b.fetchListIfNeeded=function(a){return function(b){!a||a.items||a.isFetching||b(f(a))}},h=function(a){return{type:c,listId:a}},i=function(a,b){return{type:d,listId:a,items:b}},j=function(a){return{type:e,listId:a}}},49:function(a,b,c){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}Object.defineProperty(b,"__esModule",{value:!0}),b.currentItemsSelector=b.currentListSelector=void 0;var e=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},f=c(44),g=c(14),h=c(4),i=c(38),j=c(39),k=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=arguments[1];switch(b.type){case f.REQUEST_LIST:return e({},a,{id:b.listId,failure:!1,isFetching:!0});case f.RECEIVE_LIST:return e({},a,{failure:!1,isFetching:!1,items:b.items.map(function(a){return a.id})});case f.FAIL_LIST:return e({},a,{failure:!0,isFetching:!1});default:return a;}};b.default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=arguments[1];switch(b.type){case f.REQUEST_LIST:case f.RECEIVE_LIST:case f.FAIL_LIST:var c=b.listId;return e({},a,d({},c,k(a[c],b)));default:return a;}};var l=b.currentListSelector=(0,g.createSelector)(function(a){return a.lists},j.favoritesSelector,h.splitPathnameSelector,function(a,b,c){switch(c[0]){case"":return a.news||{id:"news"};case"new":return a.newest||{id:"newest"};case"ask":case"show":case"jobs":return a[c[0]]||{id:c[0]};case"favorites":return{id:"favorites",items:Object.keys(b).map(function(a){return parseInt(a,10)})};default:return null;}}),m=b.currentItemsSelector=(0,g.createSelector)(l,i.itemsSelector,function(a,b){return a&&a.items?a.items.map(function(a){return b[a]||{id:a}}):null})}});