(this["webpackJsonpcar-hoot-react-admin-dashboard"]=this["webpackJsonpcar-hoot-react-admin-dashboard"]||[]).push([[44],{117:function(e,t,a){"use strict";var r=a(0),n=a(6),c=a(1),s=a(20),i=a.n(s),o=a(161),l=(a(120),a(3)),u=function(e){var t,a=e.children,s=e.blocking,o=e.loader,u=e.className,d=e.tag,p=e.overlayColor,b=d;return Object(l.jsxs)(b,{className:i()("ui-loader",(t={},Object(n.a)(t,u,u),Object(n.a)(t,"show",s),t)),children:[a,s?Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("div",Object(r.a)({className:"overlay"},s&&p?{style:{backgroundColor:p}}:{})),Object(l.jsx)("div",{className:"loader",children:o})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(o.a,{color:"primary"})}},118:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){"use strict";var r=a(0),n=a(25),c=a(34),s=a(1),i=a(128),o=a(500),l=a(248),u=a(249),d=a(533),p=a(3),b=function(e){var t=e.type,a=e.error,b=(e.step,e.decimals),f=e.min,j=e.max,g=e.disabled,m=e.placeholder,v=(e.rows,e.label),y=e.name,O=e.defaultValue,h=void 0===O?"":O,x=e.onInputChange,C=e.children,S=e.required,w=void 0!==S&&S,N=e.autoComplete,P=void 0===N?"off":N,q=Object(c.a)(e,["type","error","step","decimals","min","max","disabled","placeholder","rows","label","name","defaultValue","onInputChange","children","required","autoComplete"]),k=Object(s.useState)(""),D=Object(n.a)(k,2),I=(D[0],D[1]),E=Object(s.useState)(!1),T=Object(n.a)(E,2),A=(T[0],T[1]),M=Object(i.b)().register,R=function(e){x(e.target.name,e.target.value),A(!0),I(e.target.value)};if("number"===t){return Object(p.jsxs)(o.a,{children:[v&&Object(p.jsxs)(l.a,{className:"form-label",children:[v," ",w&&Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(u.a,Object(r.a)({autoComplete:"on",step:"step",min:f||0,max:j||null,pattern:"[0-9]",onInput:function(e){b||(e.target.value=e.target.value.replace(/[^0-9]*/g,""))},type:t,onChange:function(e){R(e)},disabled:g,name:y,value:h,placeholder:m,innerRef:M({required:w})},q)),Object(p.jsx)(d.a,{color:"danger",children:a&&a[0]})]})}return Object(p.jsxs)(o.a,{children:[v&&Object(p.jsxs)(l.a,{className:"form-label",children:[v," ",w&&Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(u.a,Object(r.a)(Object(r.a)({autoComplete:P,type:t,onChange:function(e){R(e)},disabled:g,name:y,value:h,placeholder:m,innerRef:M({required:w})},q),{},{children:C})),Object(p.jsx)(d.a,{color:"danger",children:a&&a[0]})]})};b.defaultProps={step:1,decimals:!0,rows:"4"},t.a=b},124:function(e,t,a){"use strict";var r=a(14),n=a(16),c=a(119),s=a(1),i=a.n(s),o=a(2),l=a.n(o),u=a(33),d=a.n(u),p=a(152),b=a(24);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=j(j({},p.Transition.propTypes),{},{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:b.t,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),m=j(j({},p.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function v(e){var t=e.tag,a=e.baseClass,c=e.baseClassActive,s=e.className,o=e.cssModule,l=e.children,u=e.innerRef,f=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),j=Object(b.r)(f,b.c),g=Object(b.q)(f,b.c);return i.a.createElement(p.Transition,j,(function(e){var n="entered"===e,p=Object(b.p)(d()(s,a,n&&c),o);return i.a.createElement(t,Object(r.a)({className:p},g,{ref:u}),l)}))}v.propTypes=g,v.defaultProps=m,t.a=v},153:function(e,t,a){"use strict";var r=a(14),n=a(16),c=a(1),s=a.n(c),i=a(2),o=a.n(i),l=a(33),u=a.n(l),d=a(24),p=o.a.oneOfType([o.a.number,o.a.string]),b={tag:d.t,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,a=e.cssModule,c=e.noGutters,i=e.tag,o=e.form,l=e.widths,p=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];l.forEach((function(t,a){var r=e[t];if(delete p[t],r){var n=!a;b.push(n?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var f=Object(d.p)(u()(t,c?"no-gutters":null,o?"form-row":"row",b),a);return s.a.createElement(i,Object(r.a)({},p,{className:f}))};j.propTypes=b,j.defaultProps=f,t.a=j},154:function(e,t,a){"use strict";var r=a(14),n=a(16),c=a(1),s=a.n(c),i=a(2),o=a.n(i),l=a(33),u=a.n(l),d=a(24),p=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),f={tag:d.t,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},m=function(e){var t=e.className,a=e.cssModule,c=e.widths,i=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];c.forEach((function(t,r){var n=e[t];if(delete o[t],n||""===n){var c=!r;if(Object(d.n)(n)){var s,i=c?"-":"-"+t+"-",p=g(c,t,n.size);l.push(Object(d.p)(u()(((s={})[p]=n.size||""===n.size,s["order"+i+n.order]=n.order||0===n.order,s["offset"+i+n.offset]=n.offset||0===n.offset,s)),a))}else{var b=g(c,t,n);l.push(b)}}})),l.length||l.push("col");var p=Object(d.p)(u()(t,l),a);return s.a.createElement(i,Object(r.a)({},o,{className:p}))};m.propTypes=f,m.defaultProps=j,t.a=m},156:function(e,t,a){"use strict";a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return f})),a.d(t,"f",(function(){return j})),a.d(t,"h",(function(){return g})),a.d(t,"g",(function(){return m})),a.d(t,"a",(function(){return v})),a.d(t,"i",(function(){return y})),a.d(t,"d",(function(){return O})),a.d(t,"e",(function(){return h}));var r=a(0),n=a(125),c=a.n(n),s=a(126),i=a(45),o=a.n(i),l=a(46),u=a(8),d=a(134),p=a(135),b=function(e,t){var a={};return a[e]=t,{type:u.f,payload:a}},f=function(e,t){var a={};return a[e]=t,{type:u.d,payload:a}},j=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/autoServiceCategories").then((function(e){t({type:u.h,data:e.data.autoServiceCategories})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/autoServiceCategories",{params:e}).then((function(t){a({type:u.i,data:t.data.autoServiceCategories,totalPages:t.data.total,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/autoServiceCategories/".concat(e)).then((function(e){a({type:u.g,selectedData:e.data.autoServiceCategory})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n,s,i,b,f;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={serviceName:"required",serviceCategory:"required",serviceSubCategory:"required",serviceIconUrl:"required",basePrice:"required"},n=a().autoServiceCategories.formData,s=Object(p.a)(n,r,{"required.serviceName":"Service name is required.","required.serviceCategory":"Category is required.","required.serviceSubCategory":"Subcategory is required.","required.serviceIconUrl":"Icon Url is required.","required.basePrice":"Base price is required."}),i=s.isValid,b=s.errors,i){e.next=5;break}return e.abrupt("return",t({type:u.k,payload:b}));case 5:return t({type:u.m,payload:!0}),t({type:u.l,payload:!0}),e.prev=7,e.next=10,o.a.post("/api/autoServiceCategories",n);case 10:e.sent,t({type:u.a,autoServiceCategory:n}),t({type:u.j,payload:{}}),t(g(a().autoServiceCategories.params)),t(j()),f={title:"The autoServiceCategory has been added successfully!",position:"tr",autoDismiss:1},t(Object(l.success)(f)),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(7),"We were not able to create the autoServiceCategory. Please try again.",Object(d.a)(e.t0,t,"We were not able to create the autoServiceCategory. Please try again.");case 23:return e.prev=23,t({type:u.m,payload:!1}),t({type:u.l,payload:!1}),e.finish(23);case 27:case"end":return e.stop()}}),e,null,[[7,19,23,27]])})));return function(t,a){return e.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a,n){var s,i,b,f,j,g;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s={serviceName:"required",serviceCategory:"required",serviceSubCategory:"required",serviceIconUrl:"required",basePrice:"required"},i=Object(r.a)({},n().autoServiceCategories.selectedData),b=Object(p.a)(i,s,{"required.serviceName":"Service name is required.","required.serviceCategory":"Category is required.","required.serviceSubCategory":"Subcategory is required.","required.serviceIconUrl":"Icon Url is required.","required.basePrice":"Base price is required."}),f=b.isValid,j=b.errors,f){t.next=5;break}return t.abrupt("return",a({type:u.k,payload:j}));case 5:return a({type:u.m,payload:!0}),a({type:u.l,payload:!0}),t.prev=7,delete i._id,delete i.createdAt,delete i.updatedAt,delete i.userInfo,delete i.__v,t.next=15,o.a.put("/api/autoServiceCategories/".concat(e),i);case 15:a({type:u.j,payload:{}}),g={title:"AutoServiceCategory information was updated successfully!",position:"tr",autoDismiss:1},a(Object(l.success)(g)),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(7),"We were not able to update the autoServiceCategory. Please try again.",Object(d.a)(t.t0,a,"We were not able to update the autoServiceCategory. Please try again.");case 24:return t.prev=24,a({type:u.m,payload:!1}),a({type:u.l,payload:!1}),t.finish(24);case 28:case"end":return t.stop()}}),t,null,[[7,20,24,28]])})));return function(e,a){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a,r){var n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/api/autoServiceCategories/".concat(e,"/deactivate"));case 3:!0===(n=t.sent).data.success&&(s={title:"".concat(n.data.message),position:"tr",autoDismiss:1},a(Object(l.success)(s)),a({type:u.b})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),"We were not able to delete the autoServiceCategory. Please try again.",Object(d.a)(t.t0,a,"We were not able to delete the autoServiceCategory. Please try again.");case 11:return t.prev=11,a({type:u.m,payload:!1}),a({type:u.l,payload:!1}),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,7,11,15]])})));return function(e,a){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a,r){var n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.delete("/api/autoServiceCategories/".concat(e));case 3:!0===(n=t.sent).data.success&&(s={title:"".concat(n.data.message),position:"tr",autoDismiss:1},a(Object(l.success)(s)),a({type:u.c})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),"We were not able to delete the autoServiceCategory. Please try again.",Object(d.a)(t.t0,a,"We were not able to delete the autoServiceCategory. Please try again.");case 11:return t.prev=11,a({type:u.m,payload:!1}),a({type:u.l,payload:!1}),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,7,11,15]])})));return function(e,a){return t.apply(this,arguments)}}()}},159:function(e,t,a){"use strict";var r=a(14),n=a(16),c=a(119),s=a(1),i=a.n(s),o=a(2),l=a.n(o),u=a(33),d=a.n(u),p=a(24),b=a(124);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:p.t,transition:l.a.shape(b.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:j(j({},b.a.defaultProps),{},{unmountOnExit:!0})};function v(e){var t=e.className,a=e.closeClassName,c=e.closeAriaLabel,s=e.cssModule,o=e.tag,l=e.color,u=e.isOpen,f=e.toggle,g=e.children,m=e.transition,v=e.fade,y=e.innerRef,O=Object(n.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),h=Object(p.p)(d()(t,"alert","alert-"+l,{"alert-dismissible":f}),s),x=Object(p.p)(d()("close",a),s),C=j(j(j({},b.a.defaultProps),m),{},{baseClass:v?m.baseClass:"",timeout:v?m.timeout:0});return i.a.createElement(b.a,Object(r.a)({},O,C,{tag:o,className:h,in:u,role:"alert",innerRef:y}),f?i.a.createElement("button",{type:"button",className:x,"aria-label":c,onClick:f},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}v.propTypes=g,v.defaultProps=m,t.a=v},161:function(e,t,a){"use strict";var r=a(14),n=a(16),c=a(1),s=a.n(c),i=a(2),o=a.n(i),l=a(33),u=a.n(l),d=a(24),p={tag:d.t,type:o.a.string,size:o.a.string,color:o.a.string,className:o.a.string,cssModule:o.a.object,children:o.a.string},b=function(e){var t=e.className,a=e.cssModule,c=e.type,i=e.size,o=e.color,l=e.children,p=e.tag,b=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(d.p)(u()(t,!!i&&"spinner-"+c+"-"+i,"spinner-"+c,!!o&&"text-"+o),a);return s.a.createElement(p,Object(r.a)({role:"status"},b,{className:f}),l&&s.a.createElement("span",{className:Object(d.p)("sr-only",a)},l))};b.propTypes=p,b.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=b},620:function(e,t,a){"use strict";a.r(t);var r=a(25),n=a(1),c=a(149),s=a(116),i=a(28),o=a(20),l=a.n(o),u=a(122),d=a(153),p=a(154),b=a(366),f=a(114),j=a(156),g=a(3),m=function(e){var t=e.selectedData,a=Object(i.useSelector)((function(e){return e.autoServiceCategories})),r=(a.isLoading,a.isSubmitting,a.formErrors),n=Object(i.useDispatch)(),c=function(e,t){n(Object(j.b)(e,t))};return Object(g.jsx)(d.a,{children:Object(g.jsx)(p.a,{sm:"12",children:Object(g.jsx)(b.a,{onSubmit:function(e){e.preventDefault(),n(Object(j.i)(t._id))},children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(p.a,{md:"4",sm:"12",children:Object(g.jsx)(u.a,{type:"text",label:"Service Name",error:r.serviceName,name:"serviceName",placeholder:"Service Name",onInputChange:function(e,t){c(e,t)},defaultValue:t.serviceName,required:!0,className:l()({"is-invalid":r.serviceName})})}),Object(g.jsx)(p.a,{md:"4",sm:"12",children:Object(g.jsx)(u.a,{type:"text",label:"Category",error:r.serviceCategory,name:"serviceCategory",placeholder:"Service Category",onInputChange:function(e,t){c(e,t)},defaultValue:t.serviceCategory,required:!0,className:l()({"is-invalid":r.serviceCategory})})}),Object(g.jsx)(p.a,{md:"4",sm:"12",children:Object(g.jsx)(u.a,{type:"text",label:"Subcategory",error:r.serviceSubCategory,name:"serviceSubCategory",placeholder:"Subcategory",onInputChange:function(e,t){c(e,t)},defaultValue:t.serviceSubCategory,required:!0,className:l()({"is-invalid":r.serviceSubCategory})})}),Object(g.jsx)(p.a,{md:"4",sm:"12",children:Object(g.jsx)(u.a,{type:"text",label:"Icon Url",error:r.serviceIconUrl,name:"serviceIconUrl",placeholder:"Icon Url",onInputChange:function(e,t){c(e,t)},defaultValue:t.serviceIconUrl,required:!0,className:l()({"is-invalid":r.serviceIconUrl})})}),Object(g.jsx)(p.a,{md:"4",sm:"12",children:Object(g.jsx)(u.a,{type:"number",label:"Price",error:r.basePrice,name:"basePrice",placeholder:"Price",onInputChange:function(e,t){c(e,t)},defaultValue:t.basePrice,required:!0,className:l()({"is-invalid":r.basePrice})})}),Object(g.jsxs)(p.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(g.jsx)(f.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(g.jsx)(f.a.Ripple,{color:"secondary",outline:!0,children:"Reset"})]})]})})})})},v=a(145),y=a(171),O=a(159),h=a(117);a(118),t.default=function(){var e=Object(n.useState)("1"),t=Object(r.a)(e,2),a=(t[0],t[1],Object(i.useSelector)((function(e){return e.autoServiceCategories}))),o=a.isLoading,l=a.selectedData,u=Object(i.useDispatch)(),b=Object(c.i)().id;return Object(n.useEffect)((function(){u(Object(j.g)(b))}),[u]),null!==l&&void 0!==l?Object(g.jsx)(h.a,{blocking:o,children:Object(g.jsx)(d.a,{className:"app-user-edit",children:Object(g.jsx)(p.a,{sm:"12",children:Object(g.jsx)(v.a,{children:Object(g.jsx)(y.a,{className:"pt-2",children:Object(g.jsx)(m,{selectedData:l})})})})})}):Object(g.jsxs)(O.a,{color:"danger",children:[Object(g.jsx)("h4",{className:"alert-heading",children:"AutoServiceCategory not found"}),Object(g.jsxs)("div",{className:"alert-body",children:["AutoServiceCategory with id: ",b," doesn't exist. Check list of all autoServiceCategories: ",Object(g.jsx)(s.b,{to:"/AutoServiceCategory/list",children:"AutoServiceCategories List"})]})]})}}}]);
//# sourceMappingURL=44.a8e692ed.chunk.js.map