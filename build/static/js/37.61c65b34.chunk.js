(this["webpackJsonpcar-hoot-react-admin-dashboard"]=this["webpackJsonpcar-hoot-react-admin-dashboard"]||[]).push([[37],{127:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/toolbox.f21fb737.svg"},145:function(e,t,r){"use strict";var a=r(14),s=r(16),n=r(1),o=r.n(n),c=r(2),i=r.n(c),l=r(33),u=r.n(l),d=r(24),p={tag:d.t,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b=function(e){var t=e.className,r=e.cssModule,n=e.color,c=e.body,i=e.inverse,l=e.outline,p=e.tag,b=e.innerRef,m=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.p)(u()(t,"card",!!i&&"text-white",!!c&&"card-body",!!n&&(l?"border":"bg")+"-"+n),r);return o.a.createElement(p,Object(a.a)({},m,{className:f,ref:b}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},150:function(e,t,r){},153:function(e,t,r){"use strict";var a=r(14),s=r(16),n=r(1),o=r.n(n),c=r(2),i=r.n(c),l=r(33),u=r.n(l),d=r(24),p=i.a.oneOfType([i.a.number,i.a.string]),b={tag:d.t,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,r=e.cssModule,n=e.noGutters,c=e.tag,i=e.form,l=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];l.forEach((function(t,r){var a=e[t];if(delete p[t],a){var s=!r;b.push(s?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var m=Object(d.p)(u()(t,n?"no-gutters":null,i?"form-row":"row",b),r);return o.a.createElement(c,Object(a.a)({},p,{className:m}))};f.propTypes=b,f.defaultProps=m,t.a=f},154:function(e,t,r){"use strict";var a=r(14),s=r(16),n=r(1),o=r.n(n),c=r(2),i=r.n(c),l=r(33),u=r.n(l),d=r(24),p=i.a.oneOfType([i.a.number,i.a.string]),b=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),m={tag:d.t,xs:b,sm:b,md:b,lg:b,xl:b,className:i.a.string,cssModule:i.a.object,widths:i.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,r){return!0===r||""===r?e?"col":"col-"+t:"auto"===r?e?"col-auto":"col-"+t+"-auto":e?"col-"+r:"col-"+t+"-"+r},j=function(e){var t=e.className,r=e.cssModule,n=e.widths,c=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];n.forEach((function(t,a){var s=e[t];if(delete i[t],s||""===s){var n=!a;if(Object(d.n)(s)){var o,c=n?"-":"-"+t+"-",p=h(n,t,s.size);l.push(Object(d.p)(u()(((o={})[p]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o)),r))}else{var b=h(n,t,s);l.push(b)}}})),l.length||l.push("col");var p=Object(d.p)(u()(t,l),r);return o.a.createElement(c,Object(a.a)({},i,{className:p}))};j.propTypes=m,j.defaultProps=f,t.a=j},182:function(e,t,r){"use strict";var a=r(1),s=r.n(a),n=r(2),o=r.n(n);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,o=void 0===n?24:n,l=i(e,["color","size"]);return s.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),s.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Edit",t.a=l},187:function(e,t,r){"use strict";var a=r(14),s=r(16),n=r(1),o=r.n(n),c=r(2),i=r.n(c),l=r(33),u=r.n(l),d=r(24),p={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:d.t,responsiveTag:d.t,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},b=function(e){var t=e.className,r=e.cssModule,n=e.size,c=e.bordered,i=e.borderless,l=e.striped,p=e.dark,b=e.hover,m=e.responsive,f=e.tag,h=e.responsiveTag,j=e.innerRef,g=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),O=Object(d.p)(u()(t,"table",!!n&&"table-"+n,!!c&&"table-bordered",!!i&&"table-borderless",!!l&&"table-striped",!!p&&"table-dark",!!b&&"table-hover"),r),v=o.a.createElement(f,Object(a.a)({},g,{ref:j,className:O}));if(m){var y=Object(d.p)(!0===m?"table-responsive":"table-responsive-"+m,r);return o.a.createElement(h,{className:y},v)}return v};b.propTypes=p,b.defaultProps={tag:"table",responsiveTag:"div"},t.a=b},189:function(e,t,r){},250:function(e,t,r){"use strict";var a=r(1),s=r.n(a),n=r(2),o=r.n(n);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,o=void 0===n?24:n,l=i(e,["color","size"]);return s.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),s.a.createElement("circle",{cx:"12",cy:"5",r:"1"}),s.a.createElement("circle",{cx:"12",cy:"19",r:"1"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="MoreVertical",t.a=l},269:function(e,t,r){"use strict";var a=r(1),s=r.n(a),n=r(2),o=r.n(n);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,o=void 0===n?24:n,l=i(e,["color","size"]);return s.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polyline",{points:"3 6 5 6 21 6"}),s.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Trash",t.a=l},373:function(e,t,r){"use strict";var a=r(1),s=r.n(a),n=r(2),o=r.n(n);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=Object(a.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,n=e.size,o=void 0===n?24:n,l=i(e,["color","size"]);return s.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),s.a.createElement("polyline",{points:"17 18 23 18 23 12"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="TrendingDown",t.a=l},614:function(e,t,r){"use strict";r.r(t);r(1);var a=r(153),s=r(154),n=(r(43),r(112)),o=r(503),c=r(603),i=r(504),l=r(506),u=r(145),d=r(187),p=r(521),b=r(373),m=r(250),f=r(182),h=r(269),j=r(3),g=function(){var e=[{img:r(127).default,name:"Dixons",phoneNumber:"+254 722 123 456",carhootAgent:"Brian B.",requestType:"Towing",cost:"7,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"James",phoneNumber:"+254 722 903 456",carhootAgent:"Nyambura G.",requestType:"Jump Start",cost:"1,500",requestDate:"3rd April",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Mercy",phoneNumber:"+254 772 156 498",carhootAgent:"Ronald B.",requestType:"Car Lockout",cost:"2,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Sharon",phoneNumber:"+254 722 123 456",carhootAgent:"Brenda K.",requestType:"Fuel Delivery",cost:"3,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Mercy",phoneNumber:"+254 790 123 506",carhootAgent:"Brian B.",requestType:"Towing",cost:"9,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Moses",phoneNumber:"+254 722 123 456",carhootAgent:"Moses K.",requestType:"Towing",cost:"7,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Ken",phoneNumber:"+254 722 123 456",carhootAgent:"Moses K.",requestType:"Towing",cost:"7,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Tina",phoneNumber:"+254 722 123 456",carhootAgent:"Brian B.",requestType:"Towing",cost:"7,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Alex",phoneNumber:"+254 722 123 456",carhootAgent:"Brian B.",requestType:"Tyre Change",cost:"1,000",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"},{img:r(127).default,name:"Pauline",phoneNumber:"+254 725 663 456",carhootAgent:"Isaac O.",requestType:"Towing",cost:"4,300",requestDate:"3rd March",timeSinceLastUpdate:"30 Minutes",status:"In Progress"}];return Object(j.jsx)(u.a,{className:"card-company-table",children:Object(j.jsxs)(d.a,{responsive:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Customer"}),Object(j.jsx)("th",{children:"Carhoot Agent"}),Object(j.jsx)("th",{children:"Request Type"}),Object(j.jsx)("th",{children:"Request Date"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:e.map((function(e){return e.salesUp?p.a:b.a,Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)("div",{className:"avatar rounded",children:Object(j.jsx)("div",{className:"avatar-content",children:Object(j.jsx)("img",{src:e.img,alt:e.name})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"font-weight-bolder",children:e.name}),Object(j.jsx)("div",{className:"font-small-2 text-muted",children:e.phoneNumber})]})]})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center",children:Object(j.jsx)("span",{children:e.carhootAgent})})}),Object(j.jsx)("td",{className:"text-nowrap",children:Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("span",{className:"font-weight-bolder mb-25",children:e.requestType}),Object(j.jsxs)("span",{className:"font-small-2 text-muted",children:["Ksh. ",e.cost]})]})}),Object(j.jsx)("td",{className:"text-nowrap",children:Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("span",{className:"font-weight-bolder mb-25",children:e.requestDate}),Object(j.jsx)("span",{className:"font-small-2 text-muted",children:e.timeSinceLastUpdate})]})}),Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center",children:Object(j.jsx)(n.a,{pill:!0,color:"light-primary",className:"mr-1",children:e.status})})}),Object(j.jsx)("td",{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(c.a,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(j.jsx)(m.a,{size:15})}),Object(j.jsxs)(i.a,{right:!0,children:[Object(j.jsxs)(l.a,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(j.jsx)(f.a,{className:"mr-50",size:15})," ",Object(j.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(j.jsxs)(l.a,{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(j.jsx)(h.a,{className:"mr-50",size:15})," ",Object(j.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]})})]},e.name)}))})]})})};r(150),r(189),t.default=function(){return Object(j.jsx)("div",{id:"dashboard-ecommerce",children:Object(j.jsx)(a.a,{className:"match-height",children:Object(j.jsx)(s.a,{lg:"12",xs:"12",children:Object(j.jsx)(g,{})})})})}}}]);
//# sourceMappingURL=37.61c65b34.chunk.js.map