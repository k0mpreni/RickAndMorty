(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{10:function(e,t,a){e.exports={pagination:"Pagination_pagination__2plzt",pages:"Pagination_pages__2TgFR",prev_next:"Pagination_prev_next__16CWJ",active:"Pagination_active__1R0gI"}},13:function(e,t,a){e.exports={wrapper:"Episode_wrapper__1eQKe"}},15:function(e,t,a){e.exports={characters_wrapper:"Characters_characters_wrapper__1wku3",spinner:"Characters_spinner__1yJwU"}},21:function(e,t,a){e.exports={wrapper:"Search_wrapper__1ATBJ"}},22:function(e,t,a){e.exports=a.p+"static/media/spinner.df87091a.gif"},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),o=(a(32),a(24)),u=a(9),i=a(1),l=a.n(i),p=a(4),m=a(3),f="https://rickandmortyapi.com/api";function h(){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(l.a.mark((function e(){var t,a,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,fetch("".concat(f,"/character/?page=").concat(t));case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/character/?name=").concat(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/character/?species=").concat(t));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=a(8),w=a.n(g);function j(e){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=a(13),x=a.n(C);function k(e){var t=e.url,a=Object(n.useState)(""),c=Object(m.a)(a,2),s=c[0],o=c[1],u=Object(n.useState)(""),i=Object(m.a)(u,2),f=i[0],h=i[1],v=Object(n.useState)(!0),d=Object(m.a)(v,2),b=d[0],_=d[1],E=Object(n.useState)(null),g=Object(m.a)(E,2),w=g[0],O=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:(a=e.sent).error?O(a.error):(o(a.name),h(a.episode));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(t),_(!1)}),[t]),w?r.a.createElement("div",{className:x.a.wrapper},w):b||""===s||""===f?r.a.createElement("div",{className:x.a.wrapper},"Loading..."):r.a.createElement("div",{className:x.a.wrapper},r.a.createElement("p",null,s,", ",f))}function N(e){var t=e.data,a=e.fetchBySpecies,c=Object(n.useState)(""),s=Object(m.a)(c,2),o=s[0],u=s[1];var i=Object(n.useCallback)((function(){u("")}),[]);return r.a.createElement("div",{className:w.a.wrapper},r.a.createElement("img",{src:t.image,alt:t.name,className:w.a.image}),r.a.createElement("p",{className:w.a.name},t.name),r.a.createElement("div",null,r.a.createElement("div",{className:w.a.species},r.a.createElement("p",{className:w.a.title},"Species:"),r.a.createElement("p",{onClick:function(){return a(t.species)}},"\xa0",t.species)),r.a.createElement("p",{className:w.a.title},"Episodes:"),r.a.createElement("div",{className:w.a.episode_wrapper},t.episode.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{onMouseEnter:function(){u(e)},onMouseLeave:i,className:w.a.episode},e.match(/\d*/gm)))})),o&&r.a.createElement(k,{url:o}))))}var y=a(21),S=a.n(y);function P(e){var t=e.handleCharacterSearch,a=e.fetchData,c=e.value,s=Object(n.useState)(""),o=Object(m.a)(s,2),u=o[0],i=o[1];Object(n.useEffect)((function(){i(c)}),[c]);var l=function(e){e.preventDefault(),a()},p=Object(n.useCallback)((function(e){i(e.target.value)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:S.a.wrapper,onSubmit:function(e){e.preventDefault(),console.log(u),t(u)},onReset:l},r.a.createElement("label",{htmlFor:"character"},"Search a character"),r.a.createElement("input",{"data-testid":"input",type:"text",id:"character","aria-label":"character",onChange:p,value:u}),r.a.createElement("button",{type:"reset",onClick:l},"Reset")))}var F=a(22),M=a.n(F),B=a(15),D=a.n(B),J=a(10),R=a.n(J),T=a(23),W=a.n(T);function L(e){var t=e.pageCount,a=e.currentPage,n=e.goToPage;return r.a.createElement("div",{className:R.a.pagination},a>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return n(a-1)},className:R.a.prev_next},"Previous"),r.a.createElement("button",{onClick:function(){return n(a-1)},className:R.a.pages},a-1)),r.a.createElement("p",{className:W()(R.a.pages,R.a.active)},a),a<t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return n(a+1)},className:R.a.pages},a+1),r.a.createElement("button",{onClick:function(){return n(a+1)},className:R.a.prev_next},"Next")))}function A(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),o=Object(m.a)(s,2),u=o[0],i=o[1],f=Object(n.useState)(1),v=Object(m.a)(f,2),b=v[0],E=v[1],g=Object(n.useState)(!0),w=Object(m.a)(g,2),j=w[0],O=w[1],C=Object(n.useState)(""),x=Object(m.a)(C,2),k=x[0],y=x[1],S=Object(n.useState)(null),F=Object(m.a)(S,2),B=F[0],J=F[1];function R(e){console.log("response",e),e.error?(J(e.error),c([])):(c(e.results),i(e.info.pages)),O(!1)}var T=Object(n.useCallback)(Object(p.a)(l.a.mark((function e(){var t,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,O(!0),y(""),J(null),E(t),console.log(t),e.next=8,h(t);case 8:R(e.sent),window.scrollTo({top:0,behavior:"smooth"});case 11:case"end":return e.stop()}}),e)}))),[]),W=Object(n.useCallback)((function(e){console.log("NAME",e),O(!0),y(e),function(){var t=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:R(t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),A=function(e){O(!0),function(){var t=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:R(t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()};function I(e){E(e),T(e)}return Object(n.useEffect)((function(){T()}),[T]),r.a.createElement("div",null,j?r.a.createElement("div",{className:D.a.spinner},r.a.createElement("img",{src:M.a,alt:"loading"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{value:k,handleCharacterSearch:W,fetchData:T}),B&&r.a.createElement("div",null,B),r.a.createElement("div",{className:D.a.characters_wrapper},a.map((function(e,t){return r.a.createElement(N,{key:t,data:e,fetchBySpecies:A})}))),r.a.createElement(L,{currentPage:b,pageCount:u,goToPage:I})))}var I=function(){return r.a.createElement(o.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/"},r.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={wrapper:"CharacterCard_wrapper__3L4Rl",image:"CharacterCard_image__1mK5-",name:"CharacterCard_name__1SykW",species:"CharacterCard_species__1_it3",title:"CharacterCard_title__vXM6N",episode_wrapper:"CharacterCard_episode_wrapper__1uMnD",episode:"CharacterCard_episode__SCtNq"}}},[[27,1,2]]]);
//# sourceMappingURL=main.f79c9cc6.chunk.js.map