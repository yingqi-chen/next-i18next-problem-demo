_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("ERkP"))&&a.__esModule?a:{default:a},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,u=void 0!==o&&o;return n||r&&u}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var u=r.key.slice(r.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var s=f[i];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=r.props[s],d=a[s]||new Set;d.has(l)?o=!1:(d.add(l),a[s]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(u.AmpStateContext),a=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8lYe":function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),o=n("pnTc"),u=n("k7Sn"),i=r.a.createElement;t.a=Object(u.withTranslation)("footer")((function(e){var t=e.t;return i("footer",null,i("p",null,t("description")),i("p",null,"next-i18next v",o.a))}))},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("ERkP"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("HaE+"),u=n("ERkP"),i=n.n(u),c=n("k7Sn"),s=n("b0oO"),l=n("8lYe"),d=i.a.createElement,f=function(e){var t=e.t;return d(i.a.Fragment,null,d("main",null,d(s.a,{title:t("h1")}),d("div",null,d("button",{type:"button",onClick:function(){return c.i18n.changeLanguage("en"===c.i18n.language?"de":"en")}},t("change-locale")),d(c.Link,{href:"/second-page"},d("button",{type:"button"},t("to-second-page"))))),d(l.a,null))};f.getInitialProps=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common","footer"]});case 1:case"end":return e.stop()}}),e)}))),t.default=Object(c.withTranslation)("common")(f)},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("ERkP"),d=function(e){u(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},b0oO:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),o=n("8Kt/"),u=n.n(o),i=r.a.createElement;t.a=function(e){var t=e.title;return i(r.a.Fragment,null,i(u.a,null,i("title",null,"next-i18next"),i("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",rel:"stylesheet"}),i("link",{href:"/static/app.css",rel:"stylesheet"}),i("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css",rel:"stylesheet"}),i("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600",rel:"stylesheet"}),i("link",{"data-react-helmet":"true",rel:"icon",href:"https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"})),i("h2",null,"next-i18next",i("hr",null)),i("h1",null,t),i("a",{className:"github",href:"//github.com/isaachinman/next-i18next"},i("i",{className:"typcn typcn-social-github-circular"})))}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("ERkP"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},pnTc:function(e){e.exports=JSON.parse('{"a":"6.0.3"}')},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,0]]]);