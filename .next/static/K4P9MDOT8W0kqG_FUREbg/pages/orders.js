(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5k9V":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return r("V+vy")}])},"V+vy":function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),a=r.n(n),o=r("5c+8"),i=r("1OyB"),c=r("vuIU"),u=r("Ji7U"),s=r("md7G"),f=r("foSv"),l=r("h4VS"),p=r("4KRT"),d=r("/Tr7"),h=r("jIYg");function m(t,e){Object(h.a)(2,arguments);var r=Object(d.a)(t),n=Object(d.a)(e),a=r.getTime()-n.getTime();return a<0?-1:a>0?1:a}function v(t,e){Object(h.a)(2,arguments);var r=Object(d.a)(t),n=Object(d.a)(e),a=m(r,n),o=Math.abs(function(t,e){Object(h.a)(2,arguments);var r=Object(d.a)(t),n=Object(d.a)(e);return 12*(r.getFullYear()-n.getFullYear())+(r.getMonth()-n.getMonth())}(r,n));r.setMonth(r.getMonth()-a*o);var i=a*(o-(m(r,n)===-a));return 0===i?0:i}function g(t,e){Object(h.a)(2,arguments);var r=function(t,e){Object(h.a)(2,arguments);var r=Object(d.a)(t),n=Object(d.a)(e);return r.getTime()-n.getTime()}(t,e)/1e3;return r>0?Math.floor(r):Math.ceil(r)}var y=r("iSMj");function b(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in e=e||{})e.hasOwnProperty(r)&&(t[r]=e[r]);return t}({},t)}var O=r("JCDJ"),w=1440,j=2520,D=43200,M=86400;var x=r("YFqc"),k=r.n(x),R=r("vOnD"),E=r("lTCR"),T=r.n(E),U=r("VUBQ"),S=r("2y/O"),_=R.b.li.withConfig({displayName:"OrderItemStyles",componentId:"fbwo89-0"})(["box-shadow:",";list-style:none;padding:2rem;border:1px solid ",";h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"],(function(t){return t.theme.bs}),(function(t){return t.theme.offWhite})),C=a.a.createElement;function X(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var a=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}function P(){var t=Object(l.a)(["\n  query USER_ORDERS_QUERY {\n    orders(orderBy: createdAt_DESC) {\n      id\n      total\n      createdAt\n      items {\n        id\n        title\n        price\n        description\n        quantity\n        image\n      }\n    }\n  }\n"]);return P=function(){return t},t}var q=T()(P()),I=(R.b.ul.withConfig({displayName:"OrderList__orderUl",componentId:"rwafy5-0"})(["display:grid;grid-gap:4rem;grid-template-columns:repeat(auto-fit,minmax(40%,1fr));"]),function(t){Object(u.a)(r,t);var e=X(r);function r(){return Object(i.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return C(p.d,{query:q},(function(t){var e=t.data.orders,r=t.loading,n=t.error;return r?C("p",null,"loading..."):n?C(U.a,{erorr:n}):(console.log(e),C("div",null,C("h2",null,"You have ",e.length," orders"),C("orderUl",null,e.map((function(t){return C(_,{key:t.id},C(k.a,{href:{pathname:"/order",query:{id:t.id}}},C("a",null,C("div",{className:"order-meta"},C("p",null,t.items.reduce((function(t,e){return t+e.quantity}),0)," Items"),C("p",null,t.items.length," Products"),C("p",null,function(t,e,r){Object(h.a)(2,arguments);var n=r||{},a=n.locale||y.a;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var o=m(t,e);if(isNaN(o))throw new RangeError("Invalid time value");var i,c,u=b(n);u.addSuffix=Boolean(n.addSuffix),u.comparison=o,o>0?(i=Object(d.a)(e),c=Object(d.a)(t)):(i=Object(d.a)(t),c=Object(d.a)(e));var s,f=g(c,i),l=(Object(O.a)(c)-Object(O.a)(i))/1e3,p=Math.round((f-l)/60);if(p<2)return n.includeSeconds?f<5?a.formatDistance("lessThanXSeconds",5,u):f<10?a.formatDistance("lessThanXSeconds",10,u):f<20?a.formatDistance("lessThanXSeconds",20,u):f<40?a.formatDistance("halfAMinute",null,u):f<60?a.formatDistance("lessThanXMinutes",1,u):a.formatDistance("xMinutes",1,u):0===p?a.formatDistance("lessThanXMinutes",1,u):a.formatDistance("xMinutes",p,u);if(p<45)return a.formatDistance("xMinutes",p,u);if(p<90)return a.formatDistance("aboutXHours",1,u);if(p<w){var x=Math.round(p/60);return a.formatDistance("aboutXHours",x,u)}if(p<j)return a.formatDistance("xDays",1,u);if(p<D){var k=Math.round(p/w);return a.formatDistance("xDays",k,u)}if(p<M)return s=Math.round(p/D),a.formatDistance("aboutXMonths",s,u);if((s=v(c,i))<12){var R=Math.round(p/D);return a.formatDistance("xMonths",R,u)}var E=s%12,T=Math.floor(s/12);return E<3?a.formatDistance("aboutXYears",T,u):E<9?a.formatDistance("overXYears",T,u):a.formatDistance("almostXYears",T+1,u)}(t.createdAt,new Date)),C("p",null,Object(S.a)(t.total))),C("div",{className:"images"},t.items.map((function(t){return C("img",{key:t.id,src:t.image,alt:t.title})}))))))})))))}))}}]),r}(a.a.Component)),N=a.a.createElement;e.default=function(t){return N("div",null,N(o.a,null,N(I,null)))}},YFqc:function(t,e,r){t.exports=r("cTJO")},cTJO:function(t,e,r){"use strict";var n=r("lwsE"),a=r("W8MJ"),o=r("7W2i"),i=r("a1gu"),c=r("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}var s=r("TqRt"),f=r("284h");e.__esModule=!0,e.default=void 0;var l,p=f(r("q1tI")),d=r("QmWs"),h=r("g/15"),m=s(r("nOHt")),v=r("elyg");function g(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var y=new Map,b=window.IntersectionObserver,O={};function w(){return l||(b?l=new b((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var j=function(t){o(r,t);var e=u(r);function r(t){var a;return n(this,r),(a=e.call(this,t)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(t){var e=null,r=null,n=null;return function(a,o){if(n&&a===e&&o===r)return n;var i=t(a,o);return e=a,r=o,n=i,i}}((function(t,e){return{href:(0,v.addBasePath)(g(t)),as:e?(0,v.addBasePath)(g(e)):e}})),a.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,n=e.target;if("A"!==r||!(n&&"_self"!==n||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,c=o.as;if(function(t){var e=(0,d.parse)(t,!1,!0),r=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(i)){var u=window.location.pathname;i=(0,d.resolve)(u,i),c=c?(0,d.resolve)(u,c):i,t.preventDefault();var s=a.props.scroll;null==s&&(s=c.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](i,c,{shallow:a.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==t.prefetch,a}return a(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),r=e.href,n=e.as,a=(0,d.resolve)(t,r);return[a,n?(0,d.resolve)(t,n):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var r=w();return r?(r.observe(t),y.set(t,e),function(){try{r.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],t).catch((function(t){0})),O[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var o=p.Children.only(e),i={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||n),p.default.cloneElement(o,i)}}]),r}(p.Component);e.default=j}},[["5k9V",0,1,3,2,4,6]]]);