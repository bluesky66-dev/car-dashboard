(this["webpackJsonpcar-hoot-react-admin-dashboard"]=this["webpackJsonpcar-hoot-react-admin-dashboard"]||[]).push([[30],{117:function(e,t,a){"use strict";var n=a(0),r=a(6),c=a(1),s=a(20),l=a.n(s),i=a(162),o=(a(121),a(3)),d=function(e){var t,a=e.children,s=e.blocking,i=e.loader,d=e.className,j=e.tag,b=e.overlayColor,u=j;return Object(o.jsxs)(u,{className:l()("ui-loader",(t={},Object(r.a)(t,d,d),Object(r.a)(t,"show",s),t)),children:[a,s?Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("div",Object(n.a)({className:"overlay"},s&&b?{style:{backgroundColor:b}}:{})),Object(o.jsx)("div",{className:"loader",children:i})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(o.jsx)(i.a,{color:"primary"})}},118:function(e,t,a){},121:function(e,t,a){},123:function(e,t,a){"use strict";var n=a(0),r=a(25),c=a(34),s=a(1),l=a(130),i=a(499),o=a(245),d=a(246),j=a(532),b=a(3),u=function(e){var t=e.type,a=e.error,u=(e.step,e.decimals),m=e.min,h=e.max,p=e.disabled,O=e.placeholder,x=(e.rows,e.label),f=e.name,g=e.defaultValue,y=void 0===g?"":g,v=e.onInputChange,N=e.children,k=e.required,w=void 0!==k&&k,C=e.autoComplete,E=void 0===C?"off":C,S=Object(c.a)(e,["type","error","step","decimals","min","max","disabled","placeholder","rows","label","name","defaultValue","onInputChange","children","required","autoComplete"]),z=Object(s.useState)(""),P=Object(r.a)(z,2),T=(P[0],P[1]),I=Object(s.useState)(!1),L=Object(r.a)(I,2),R=(L[0],L[1]),M=Object(l.b)().register,V=function(e){v(e.target.name,e.target.value),R(!0),T(e.target.value)};if("number"===t){return Object(b.jsxs)(i.a,{children:[x&&Object(b.jsxs)(o.a,{className:"form-label",children:[x," ",w&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(d.a,Object(n.a)({autoComplete:"on",step:"step",min:m||0,max:h||null,pattern:"[0-9]",onInput:function(e){u||(e.target.value=e.target.value.replace(/[^0-9]*/g,""))},type:t,onChange:function(e){V(e)},disabled:p,name:f,value:y,placeholder:O,innerRef:M({required:w})},S)),Object(b.jsx)(j.a,{color:"danger",children:a&&a[0]})]})}return Object(b.jsxs)(i.a,{children:[x&&Object(b.jsxs)(o.a,{className:"form-label",children:[x," ",w&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(d.a,Object(n.a)(Object(n.a)({autoComplete:E,type:t,onChange:function(e){V(e)},disabled:p,name:f,value:y,placeholder:O,innerRef:M({required:w})},S),{},{children:N})),Object(b.jsx)(j.a,{color:"danger",children:a&&a[0]})]})};u.defaultProps={step:1,decimals:!0,rows:"4"},t.a=u},141:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(14),r=a(16),c=a(1),s=a.n(c),l=a(2),i=a.n(l),o=a(33),d=a.n(o),j=a(24),b={body:i.a.bool,bottom:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,heading:i.a.bool,left:i.a.bool,list:i.a.bool,middle:i.a.bool,object:i.a.bool,right:i.a.bool,tag:j.t,top:i.a.bool},u=function(e){var t,a=e.body,c=e.bottom,l=e.className,i=e.cssModule,o=e.heading,b=e.left,u=e.list,m=e.middle,h=e.object,p=e.right,O=e.tag,x=e.top,f=Object(r.a)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);t=o?"h4":f.href?"a":f.src||h?"img":u?"ul":"div";var g=O||t,y=Object(j.p)(d()(l,{"media-body":a,"media-heading":o,"media-left":b,"media-right":p,"media-top":x,"media-bottom":c,"media-middle":m,"media-object":h,"media-list":u,media:!a&&!o&&!b&&!p&&!x&&!c&&!m&&!h&&!u}),i);return s.a.createElement(g,Object(n.a)({},f,{className:y}))};u.propTypes=b,t.a=u},182:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(2),s=a.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,s=void 0===c?24:c,o=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.displayName="Edit",t.a=o},183:function(e,t,a){"use strict";var n=a(125),r=a.n(n),c=a(126),s=a(45),l=a.n(s),i=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"avatar",(n=new FormData).append("files",t),n.append("path",a),e.prev=4,e.next=7,l.a.post("/api/files",n,{headers:{"Content-Type":"multipart/form-data"}});case 7:return c=e.sent,e.abrupt("return",c.data.url);case 11:throw e.prev=11,e.t0=e.catch(4),new Error("Please try again");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();t.a=i},187:function(e,t,a){"use strict";var n=a(14),r=a(16),c=a(1),s=a.n(c),l=a(2),i=a.n(l),o=a(33),d=a.n(o),j=a(24),b={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:j.t,responsiveTag:j.t,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},u=function(e){var t=e.className,a=e.cssModule,c=e.size,l=e.bordered,i=e.borderless,o=e.striped,b=e.dark,u=e.hover,m=e.responsive,h=e.tag,p=e.responsiveTag,O=e.innerRef,x=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),f=Object(j.p)(d()(t,"table",!!c&&"table-"+c,!!l&&"table-bordered",!!i&&"table-borderless",!!o&&"table-striped",!!b&&"table-dark",!!u&&"table-hover"),a),g=s.a.createElement(h,Object(n.a)({},x,{ref:O,className:f}));if(m){var y=Object(j.p)(!0===m?"table-responsive":"table-responsive-"+m,a);return s.a.createElement(p,{className:y},g)}return g};u.propTypes=b,u.defaultProps={tag:"table",responsiveTag:"div"},t.a=u},190:function(e,t,a){"use strict";var n=a(43),r=a(117),c=a(157),s=a(114),l=a(245),i=a(182),o=a(1),d=a.n(o),j=a(2),b=a.n(j);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=Object(o.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,c=void 0===r?24:r,s=m(e,["color","size"]);return d.a.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),d.a.createElement("polyline",{points:"3 6 5 6 21 6"}),d.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),d.a.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),d.a.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"}))}));h.propTypes={color:b.a.string,size:b.a.oneOfType([b.a.string,b.a.number])},h.displayName="Trash2";var p=h,O=a(3),x=function(e){var t=e.imgLoading,a=e.name,c=e.photo;if(void 0===c||""===c){var s=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return Object(O.jsx)(r.a,{blocking:t,children:Object(O.jsx)(n.a,{initials:!0,color:s,className:"rounded mr-2 my-25",content:a,contentStyles:{borderRadius:0,fontSize:"calc(36px)",width:"100%",height:"100%"},style:{height:"90px",width:"90px"}})})}return Object(O.jsx)(r.a,{blocking:t,children:Object(O.jsx)("img",{className:"user-avatar rounded mr-2 my-25 cursor-pointer",src:c,alt:"user profile avatar",height:"90",width:"90"})})},f=function(e){var t=e.imgLoading,a=e.name,n=e.photo,o=e.onChangeAvatar;return Object(O.jsxs)(c.a,{className:"mb-2",children:[Object(O.jsx)(x,{imgLoading:t,name:a,photo:n}),Object(O.jsxs)(c.a,{className:"mt-50",body:!0,children:[Object(O.jsxs)("h4",{children:[a," "]}),Object(O.jsxs)("div",{className:"d-flex flex-wrap mt-1 px-0",children:[Object(O.jsx)(r.a,{blocking:t,className:"mr-75",children:Object(O.jsxs)(s.a.Ripple,{id:"change-img",tag:l.a,className:"mb-0",color:"primary",children:[Object(O.jsx)("span",{className:"d-none d-sm-block",children:"Change"}),Object(O.jsx)("span",{className:"d-block d-sm-none",children:Object(O.jsx)(i.a,{size:14})}),Object(O.jsx)("input",{type:"file",hidden:!0,id:"change-img",onChange:o,accept:"image/*"})]})}),Object(O.jsxs)(s.a.Ripple,{color:"secondary",outline:!0,children:[Object(O.jsx)("span",{className:"d-none d-sm-block",children:"Remove"}),Object(O.jsx)("span",{className:"d-block d-sm-none",children:Object(O.jsx)(p,{size:14})})]})]})]})]})};t.a=f;f.defaultProps={imgLoading:!1,name:"",photo:"",onChangeAvatar:function(){return!1}}},213:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(2),s=a.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,s=void 0===c?24:c,o=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),r.a.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.displayName="Lock";var d=o,j=a(187),b=a(600),u=a(3);t.a=function(e){return Object(u.jsxs)("div",{className:"permissions border mt-1",children:[Object(u.jsxs)("h6",{className:"py-1 mx-1 mb-0 font-medium-2",children:[Object(u.jsx)(d,{size:18,className:"mr-25"}),Object(u.jsx)("span",{className:"align-middle",children:"Permissions"})]}),Object(u.jsxs)(j.a,{borderless:!0,striped:!0,responsive:!0,children:[Object(u.jsx)("thead",{className:"thead-light",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Module"}),Object(u.jsx)("th",{children:"Read"}),Object(u.jsx)("th",{children:"Write"}),Object(u.jsx)("th",{children:"Create"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Admin"}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"admin-1",label:"",defaultChecked:!0})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"admin-2",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"admin-3",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"admin-4",label:""})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Staff"}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"staff-1",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"staff-2",label:"",defaultChecked:!0})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"staff-3",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"staff-4",label:""})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Author"}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"author-1",label:"",defaultChecked:!0})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"author-2",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"author-3",label:"",defaultChecked:!0})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"author-4",label:""})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Contributor"}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"contributor-1",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"contributor-2",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"contributor-3",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"contributor-4",label:""})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Employee"}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"employee-1",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"employee-2",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"employee-3",label:""})}),Object(u.jsx)("td",{children:Object(u.jsx)(b.a,{type:"checkbox",id:"employee-4",label:"",defaultChecked:!0})})]})]})]})]})}},223:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(2),s=a.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,s=void 0===c?24:c,o=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.displayName="Info",t.a=o},253:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(2),s=a.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,s=void 0===c?24:c,o=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("circle",{cx:"18",cy:"5",r:"3"}),r.a.createElement("circle",{cx:"6",cy:"12",r:"3"}),r.a.createElement("circle",{cx:"18",cy:"19",r:"3"}),r.a.createElement("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),r.a.createElement("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.displayName="Share2",t.a=o},590:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(1),c=a(149),s=a(116),l=a(365),i=a(153),o=a(154),d=a(245),j=a(499),b=a(249),u=a(250),m=a(181),h=a(246),p=a(114),O=a(28),x=a(443),f=a(444),g=a(536),y=a(117),v=a(151),N=a(3),k=function(){var e=Object(O.useDispatch)(),t=Object(O.useSelector)((function(e){return e.employees})),a=(t.formErrors,t.isLoading),n=t.selectedEmployee,r=function(t,a){e(Object(v.employeeEditChange)(t,a))},c=n.twitter,s=n.facebook,k=n.instagram;return Object(N.jsx)(l.a,{onSubmit:function(t){t.preventDefault(),e(Object(v.updateEmployee)(n._id))},children:Object(N.jsxs)(i.a,{children:[Object(N.jsxs)(o.a,{lg:"4",md:"6",sm:"12",children:[Object(N.jsx)(d.a,{for:"twitter",children:"Twitter"}),Object(N.jsxs)(j.a,{tag:b.a,className:"input-group-merge",children:[Object(N.jsx)(u.a,{addonType:"prepend",children:Object(N.jsx)(m.a,{children:Object(N.jsx)(x.a,{size:17})})}),Object(N.jsx)(h.a,{id:"twitter",placeholder:"https://www.twitter.com/",type:"text",name:"twitter",onChange:function(e){r(e.target.name,e.target.value)},value:c||"https://www.twitter.com/"})]})]}),Object(N.jsxs)(o.a,{lg:"4",md:"6",sm:"12",children:[Object(N.jsx)(d.a,{for:"facebook",children:"Facebook"}),Object(N.jsxs)(j.a,{tag:b.a,className:"input-group-merge",children:[Object(N.jsx)(u.a,{addonType:"prepend",children:Object(N.jsx)(m.a,{children:Object(N.jsx)(f.a,{size:17})})}),Object(N.jsx)(h.a,{id:"facebook",placeholder:"https://www.facebook.com/",type:"text",name:"facebook",onChange:function(e){r(e.target.name,e.target.value)},value:s||"https://www.facebook.com/"})]})]}),Object(N.jsxs)(o.a,{lg:"4",md:"6",sm:"12",children:[Object(N.jsx)(d.a,{for:"instagram",children:"Instagram"}),Object(N.jsxs)(j.a,{tag:b.a,className:"input-group-merge",children:[Object(N.jsx)(u.a,{addonType:"prepend",children:Object(N.jsx)(m.a,{children:Object(N.jsx)(g.a,{size:17})})}),Object(N.jsx)(h.a,{id:"instagram",placeholder:"https://www.instagram.com/",type:"text",name:"instagram",onChange:function(e){r(e.target.name,e.target.value)},value:k||"https://www.instagram.com/"})]})]}),Object(N.jsx)(o.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:Object(N.jsx)(y.a,{blocking:a,children:Object(N.jsx)(p.a,{className:"mb-1 mb-sm-0 mr-0",color:"primary",children:"Save Changes"})})})]})})},w=a(125),C=a.n(w),E=a(126),S=a(20),z=a.n(S),P=a(190),T=a(213),I=a(123),L=a(183),R=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(O.useDispatch)(),d=Object(O.useSelector)((function(e){return e.employees})),j=d.formErrors,b=d.isLoading,u=d.selectedEmployee,m=Object(O.useSelector)((function(e){return e.roles})).rolesConfig,h=function(e,t){s(Object(v.employeeEditChange)(e,t))},x=function(){var e=Object(E.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files,c(!0),e.prev=2,e.next=5,Object(L.a)(a[0]);case 5:n=e.sent,h("profilePictureURL",n),c(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),c(!1);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),f=m.employee,g=f.roles,k=f.status,w=Object.keys(g).map((function(e){return Object(N.jsx)("option",{value:e,children:g[e]},e)})),S=Object.keys(k).map((function(e){return Object(N.jsx)("option",{value:e,children:k[e]},e)}));return Object(N.jsxs)(i.a,{children:[Object(N.jsx)(o.a,{sm:"12",children:Object(N.jsx)(P.a,{imgLoading:a,name:"".concat(u.firstName," ").concat(u.lastName),photo:u.profilePictureURL,onChangeAvatar:x})}),Object(N.jsx)(o.a,{sm:"12",children:Object(N.jsx)(l.a,{onSubmit:function(e){e.preventDefault(),s(Object(v.updateEmployee)(u._id))},children:Object(N.jsxs)(i.a,{children:[Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsx)(I.a,{type:"text",label:"First Name",error:j.firstName,name:"firstName",placeholder:"First Name",onInputChange:function(e,t){h(e,t)},defaultValue:u.firstName,required:!0,className:z()({"is-invalid":j.firstName})})}),Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsx)(I.a,{type:"text",label:"Last Name",error:j.lastName,name:"lastName",placeholder:"Last Name",onInputChange:function(e,t){h(e,t)},defaultValue:u.lastName,required:!0,className:z()({"is-invalid":j.lastName})})}),Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsx)(I.a,{type:"text",label:"Username",error:j.userName,name:"userName",placeholder:"Username",onInputChange:function(e,t){h(e,t)},defaultValue:u.userName,required:!0,className:z()({"is-invalid":j.userName})})}),Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsx)(I.a,{type:"text",label:"Email",error:j.email,name:"email",placeholder:"Email",onInputChange:function(e,t){h(e,t)},defaultValue:u.email,required:!0,className:z()({"is-invalid":j.email})})}),Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsxs)(I.a,{type:"select",label:"Country Code",error:j.countryCode,name:"countryCode",onInputChange:function(e,t){h(e,t)},defaultValue:u.countryCode,required:!0,className:z()({"is-invalid":j.countryCode}),children:[Object(N.jsx)("option",{value:"",children:"Select Country Code"}),Object(N.jsx)("option",{value:"254",children:"+254 Kenya"})]})}),Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsx)(I.a,{type:"number",label:"Phone Number",error:j.phoneNumber,name:"phoneNumber",placeholder:"Phone Number",onInputChange:function(e,t){h(e,t)},defaultValue:u.phoneNumber,required:!0,className:z()({"is-invalid":j.phoneNumber})})}),Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsxs)(I.a,{type:"select",label:"Employee Role",error:j.role,name:"role",onInputChange:function(e,t){h(e,t)},defaultValue:u.role,required:!0,className:z()({"is-invalid":j.role}),children:[Object(N.jsx)("option",{value:"agent",children:"Select Role"}),w]})}),Object(N.jsx)(o.a,{md:"4",sm:"12",children:Object(N.jsxs)(I.a,{type:"select",label:"Status",error:j.status,name:"status",onInputChange:function(e,t){h(e,t)},defaultValue:u.status,className:z()({"is-invalid":j.status}),children:[Object(N.jsx)("option",{value:"",children:"Select Status"}),S]})}),Object(N.jsx)(o.a,{sm:"12",children:Object(N.jsx)(T.a,{})}),Object(N.jsxs)(o.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(N.jsx)(y.a,{blocking:b,className:"mr-sm-1",children:Object(N.jsx)(p.a.Ripple,{className:"mb-1 mb-sm-0 mr-0",type:"submit",color:"primary",children:"Save Changes"})}),Object(N.jsx)(p.a.Ripple,{color:"secondary",outline:!0,children:"Reset"})]})]})})})]})},M=a(172),V=a.n(M),A=a(506),D=a(514),q=(a(222),a(130)),F=a(600),W=(a(141),function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=(t[0],t[1],Object(O.useSelector)((function(e){return e.employees}))),c=Object(O.useDispatch)(),s=a.selectedEmployee,b=a.formErrors,u=a.isLoading,m=(a.isSubmitting,Object(q.b)({defaultValues:{gender:"gender-female",dob:null}})),h=(m.register,m.errors),x=m.handleSubmit,f=m.control,g=(m.setValue,m.trigger,function(e,t){c(Object(v.employeeEditChange)(e,t))}),k=function(e){var t=s.contactOptions;if(void 0!==t){var a=t.indexOf(e);a>-1?t.splice(a,1):t.push(e)}else t=[e];g("contactOptions",t)},w=function(){var e=s.birthday;return void 0===e?new Date:new Date(1e3*e)},C=s.physicalAddress,E=s.estate,S=s.county,P=s.country;s.birthday;return Object(N.jsxs)(l.a,{onSubmit:x((function(e){c(Object(v.updateEmployee)(s._id))})),children:[Object(N.jsxs)(i.a,{className:"mt-1",children:[Object(N.jsx)(o.a,{sm:"12",children:Object(N.jsxs)("h4",{className:"mb-1",children:[Object(N.jsx)(A.a,{size:20,className:"mr-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Personal Information"})]})}),Object(N.jsx)(o.a,{lg:"4",md:"6",children:Object(N.jsxs)(j.a,{children:[Object(N.jsx)(d.a,{className:"d-block",for:"dob",children:"Date of birth"}),Object(N.jsx)(q.a,{id:"dob",name:"dob",control:f,render:function(e){return Object(N.jsx)(V.a,{name:e.name,placeholder:"YYYY-MM-DD",options:{dateFormat:"Y-m-d"},className:z()("form-control",{"is-invalid":h.dob}),value:w(),onChange:function(e){g("birthday",Math.round(e[0].getTime()/1e3))}})}})]})}),Object(N.jsx)(o.a,{lg:"4",md:"6",children:Object(N.jsxs)(j.a,{children:[Object(N.jsx)("label",{className:"d-block mb-1",children:"Gender"}),Object(N.jsxs)(j.a,{children:[Object(N.jsx)(q.a,{name:"gender",control:f,render:function(e){return Object(N.jsx)(F.a,{inline:!0,type:"radio",label:"Male",value:"Male",id:"gender-male",name:e.name,defaultChecked:void 0!==s.gender&&"male"===s.gender,invalid:void 0===s.gender||null===s.gender,onChange:function(){g("gender","male")}})}}),Object(N.jsx)(q.a,{name:"gender",control:f,render:function(e){return Object(N.jsx)(F.a,{inline:!0,type:"radio",label:"Female",value:"Female",id:"gender-female",name:e.name,defaultChecked:void 0!==s.gender&&"female"===s.gender,invalid:void 0===s.gender||null===s.gender,onChange:function(){g("gender","female")}})}})]})]})}),Object(N.jsx)(o.a,{lg:"4",md:"6",children:Object(N.jsxs)(j.a,{children:[Object(N.jsx)("label",{className:"d-block mb-1",children:"Contact Options"}),Object(N.jsxs)(j.a,{children:[Object(N.jsx)(F.a,{inline:!0,type:"checkbox",name:"terms",id:"emailTerms",value:"Email",label:"Email",defaultChecked:void 0!==s.contactOptions&&s.contactOptions.includes("email"),onChange:function(){k("email")}}),Object(N.jsx)(F.a,{inline:!0,type:"checkbox",name:"terms",id:"msgTerms",value:"Messages",label:"Messages",defaultChecked:void 0!==s.contactOptions&&s.contactOptions.includes("message"),onChange:function(){k("message")}}),Object(N.jsx)(F.a,{inline:!0,type:"checkbox",name:"terms",id:"phoneTerms",value:"Phone",label:"Phone",defaultChecked:void 0!==s.contactOptions&&s.contactOptions.includes("phone"),onChange:function(){k("phone")}})]})]})})]}),Object(N.jsxs)(i.a,{children:[Object(N.jsx)(o.a,{sm:"12",children:Object(N.jsxs)("h4",{className:"mb-1 mt-2",children:[Object(N.jsx)(D.a,{size:20,className:"mr-50"}),Object(N.jsx)("span",{className:"align-middle",children:"Address"})]})}),Object(N.jsx)(o.a,{lg:"12",md:"12",children:Object(N.jsx)(I.a,{type:"text",label:"Physical Address",error:b.physicalAddress,name:"physicalAddress",placeholder:"Avalon apartments, Nairobi",onInputChange:function(e,t){g(e,t)},defaultValue:C,className:z()({"is-invalid":b.physicalAddress})})}),Object(N.jsx)(o.a,{lg:"4",md:"6",children:Object(N.jsx)(I.a,{type:"text",label:"Estate",error:b.estate,name:"estate",placeholder:"Garden Estate",onInputChange:function(e,t){g(e,t)},defaultValue:E,className:z()({"is-invalid":b.estate})})}),Object(N.jsx)(o.a,{lg:"4",md:"6",children:Object(N.jsx)(I.a,{type:"text",label:"County",error:b.county,name:"county",placeholder:"Nairobi",onInputChange:function(e,t){g(e,t)},defaultValue:S,className:z()({"is-invalid":b.county})})}),Object(N.jsx)(o.a,{lg:"4",md:"6",children:Object(N.jsx)(I.a,{type:"text",label:"Country",error:b.country,name:"country",placeholder:"Kenya",onInputChange:function(e,t){g(e,t)},defaultValue:P,className:z()({"is-invalid":b.country})})}),Object(N.jsx)(o.a,{className:"d-flex flex-sm-row flex-column mt-2",children:Object(N.jsx)(y.a,{blocking:u,children:Object(N.jsx)(p.a,{type:"submit",color:"primary",className:"mb-1 mb-sm-0 mr-0",children:"Save Changes"})})})]})]})}),B=a(223),Y=a(253),U=a(145),_=a(171),G=a(252),H=a(510),J=a(511),K=a(254),Q=a(255),X=a(158);a(118),t.default=function(){var e=Object(r.useState)("1"),t=Object(n.a)(e,2),a=t[0],l=t[1],d=Object(O.useDispatch)(),j=Object(O.useSelector)((function(e){return e.employees})),b=(j.isLoading,j.selectedEmployee),u=Object(c.i)().id,m=function(e){return l(e)};return Object(r.useEffect)((function(){d(Object(v.getEmployee)(u))}),[d]),null!==b&&void 0!==b?Object(N.jsx)(i.a,{className:"app-user-edit",children:Object(N.jsx)(o.a,{sm:"12",children:Object(N.jsx)(U.a,{children:Object(N.jsxs)(_.a,{className:"pt-2",children:[Object(N.jsxs)(G.a,{pills:!0,children:[Object(N.jsx)(H.a,{children:Object(N.jsxs)(J.a,{active:"1"===a,onClick:function(){return m("1")},children:[Object(N.jsx)(A.a,{size:14}),Object(N.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Account"})]})}),Object(N.jsx)(H.a,{children:Object(N.jsxs)(J.a,{active:"2"===a,onClick:function(){return m("2")},children:[Object(N.jsx)(B.a,{size:14}),Object(N.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Information"})]})}),Object(N.jsx)(H.a,{children:Object(N.jsxs)(J.a,{active:"3"===a,onClick:function(){return m("3")},children:[Object(N.jsx)(Y.a,{size:14}),Object(N.jsx)("span",{className:"align-middle d-none d-sm-block",children:"Social"})]})})]}),Object(N.jsxs)(K.a,{activeTab:a,children:[Object(N.jsx)(Q.a,{tabId:"1",children:Object(N.jsx)(R,{selectedEmployee:b})}),Object(N.jsx)(Q.a,{tabId:"2",children:Object(N.jsx)(W,{})}),Object(N.jsx)(Q.a,{tabId:"3",children:Object(N.jsx)(k,{})})]})]})})})}):Object(N.jsxs)(X.a,{color:"danger",children:[Object(N.jsx)("h4",{className:"alert-heading",children:"Employee not found"}),Object(N.jsxs)("div",{className:"alert-body",children:["Employee with id: ",u," doesn't exist. Check list of all Employees: ",Object(N.jsx)(s.b,{to:"/employees/list",children:"Employees List"})]})]})}}}]);