(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(n,t,e){},14:function(n,t,e){},16:function(n,t,e){},17:function(n,t,e){"use strict";e.r(t);var c=e(1),o=e.n(c),i=e(7),r=e.n(i),u=(e(13),e(6)),a=e(8),d=e(4),s=(e(14),e(0));var l=function(n){var t=Object(c.useState)(""),e=Object(d.a)(t,2),o=e[0],i=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"text",value:o,onChange:function(n){i(n.target.value)}}),Object(s.jsx)("button",{onClick:function(){console.log("Click add",o),n.addTodo({text:o,done:!1}),i("")},children:"Add"})]})};e(16);var j=function(n){return Object(s.jsx)("div",{onClick:n.onClick,className:n.item.done?"is-done":"",children:n.item.text})};var b=function(){var n=Object(c.useState)([{text:"assignment1",done:!1}]),t=Object(d.a)(n,2),e=t[0],o=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{addTodo:function(n){o((function(t){return[].concat(Object(a.a)(t),[n])}))}}),Object(s.jsx)("div",{children:function(){console.log("called getcount");var n=0;return e.forEach((function(t){t.done||n++})),Object(s.jsxs)("div",{children:[n," remaining out of ",e.length]})}()}),Object(s.jsx)("ul",{children:e.map((function(n,t){return Object(s.jsx)("li",{children:Object(s.jsx)(j,{onClick:function(){return function(n){var t=e.map((function(t,e){return e===n?Object(u.a)(Object(u.a)({},t),{},{done:!t.done}):t}));o(t)}(t)},item:n})},t)}))})]})},f=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(t){var e=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),c(n),o(n),i(n),r(n)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.24f7a71e.chunk.js.map