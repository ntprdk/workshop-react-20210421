(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},16:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var c=e(1),o=e.n(c),i=e(7),r=e.n(i),u=(e(13),e(6)),a=e(8),d=e(4),l=(e(14),e(0));var j=function(t){var n=Object(c.useState)(""),e=Object(d.a)(n,2),o=e[0],i=e[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"text",value:o,onChange:function(t){i(t.target.value)}}),Object(l.jsx)("button",{onClick:function(){console.log("Click add",o),""!=o.trim()?(t.addTodo({text:o,done:!1}),i("")):alert("empty text!")},children:"Add"})]})};e(16);var s=function(t){return Object(l.jsx)("div",{onClick:t.onClick,className:t.item.done?"is-done":"",children:t.item.text})};var b=function(){var t=Object(c.useState)([]),n=Object(d.a)(t,2),e=n[0],o=n[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{addTodo:function(t){o((function(n){return[].concat(Object(a.a)(n),[t])}))}}),Object(l.jsx)("div",{children:function(){console.log("called getcount");var t=0;return e.forEach((function(n){n.done||t++})),Object(l.jsxs)("div",{children:[t," remaining out of ",e.length]})}()}),Object(l.jsx)("ul",{children:e.map((function(t,n){return Object(l.jsx)("li",{children:Object(l.jsx)(s,{onClick:function(){return function(t){var n=e.map((function(n,e){return e===t?Object(u.a)(Object(u.a)({},n),{},{done:!n.done}):n}));o(n)}(n)},item:t})},n)}))})]})},f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),c(t),o(t),i(t),r(t)}))};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.7f7b55ec.chunk.js.map