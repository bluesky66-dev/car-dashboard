(this["webpackJsonpcar-hoot-react-admin-dashboard"]=this["webpackJsonpcar-hoot-react-admin-dashboard"]||[]).push([[28],{117:function(e,t,a){"use strict";var r=a(0),n=a(6),c=a(1),s=a(20),o=a.n(s),i=a(161),l=(a(120),a(3)),u=function(e){var t,a=e.children,s=e.blocking,i=e.loader,u=e.className,d=e.tag,b=e.overlayColor,p=d;return Object(l.jsxs)(p,{className:o()("ui-loader",(t={},Object(n.a)(t,u,u),Object(n.a)(t,"show",s),t)),children:[a,s?Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("div",Object(r.a)({className:"overlay"},s&&b?{style:{backgroundColor:b}}:{})),Object(l.jsx)("div",{className:"loader",children:i})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(i.a,{color:"primary"})}},118:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){"use strict";var r=a(0),n=a(25),c=a(34),s=a(1),o=a(128),i=a(500),l=a(248),u=a(249),d=a(533),b=a(3),p=function(e){var t=e.type,a=e.error,p=(e.step,e.decimals),m=e.min,j=e.max,f=e.disabled,g=e.placeholder,h=(e.rows,e.label),v=e.name,O=e.defaultValue,y=void 0===O?"":O,x=e.onInputChange,C=e.children,N=e.required,P=void 0!==N&&N,I=e.autoComplete,w=void 0===I?"off":I,S=Object(c.a)(e,["type","error","step","decimals","min","max","disabled","placeholder","rows","label","name","defaultValue","onInputChange","children","required","autoComplete"]),q=Object(s.useState)(""),k=Object(n.a)(q,2),D=(k[0],k[1]),A=Object(s.useState)(!1),L=Object(n.a)(A,2),E=(L[0],L[1]),R=Object(o.b)().register,V=function(e){x(e.target.name,e.target.value),E(!0),D(e.target.value)};if("number"===t){return Object(b.jsxs)(i.a,{children:[h&&Object(b.jsxs)(l.a,{className:"form-label",children:[h," ",P&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(u.a,Object(r.a)({autoComplete:"on",step:"step",min:m||0,max:j||null,pattern:"[0-9]",onInput:function(e){p||(e.target.value=e.target.value.replace(/[^0-9]*/g,""))},type:t,onChange:function(e){V(e)},disabled:f,name:v,value:y,placeholder:g,innerRef:R({required:P})},S)),Object(b.jsx)(d.a,{color:"danger",children:a&&a[0]})]})}return Object(b.jsxs)(i.a,{children:[h&&Object(b.jsxs)(l.a,{className:"form-label",children:[h," ",P&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(u.a,Object(r.a)(Object(r.a)({autoComplete:w,type:t,onChange:function(e){V(e)},disabled:f,name:v,value:y,placeholder:g,innerRef:R({required:P})},S),{},{children:C})),Object(b.jsx)(d.a,{color:"danger",children:a&&a[0]})]})};p.defaultProps={step:1,decimals:!0,rows:"4"},t.a=p},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",a="",r=e;r>0;--r)a+=t[Math.floor(Math.random()*t.length)];return a}},129:function(e,t,a){},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return l}));var r=function(e){return void 0!==e&&null!==e},n=function(e){if(!r)return"";var t=e.toString().replace(/\D/g,"").match(/(\d{3})(\d{3})(\d{3})(\d{3})/);return t.length<5?"":"+".concat(t[1]," ").concat(t[2]," ").concat(t[3]," ").concat(t[4])},c=function(e){if(!r)return"";var t=e.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");return"Ksh. ".concat(t)},s=a(144),o=a.n(s),i={Y:"YYYY",YM:"YYYY-MM",YMD:"YYYY-MM-DD",YMD_HMS:"YYYY-MM-DD hh:mm:ss"},l=function(e){if(!r)return"";var t=o()(e);return t.isValid()?t.fromNow(!0):""},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.YMD;if(!r)return"";var a=o()(e);return a.isValid()?a.format(t):""}},138:function(e,t,a){"use strict";var r=a(0),n=a(6),c=a(34),s=a(499),o=a(20),i=a.n(o),l=a(198),u=a(195),d=a(196),b=a(3);t.a=function(e){var t,a=e.width,o=e.open,p=e.toggleSidebar,m=e.size,j=e.bodyClassName,f=e.contentClassName,g=e.wrapperClassName,h=e.headerClassName,v=e.className,O=e.title,y=e.children,x=e.closeBtn,C=e.onOpened,N=void 0===C?function(){return null}:C,P=Object(c.a)(e,["width","open","toggleSidebar","size","bodyClassName","contentClassName","wrapperClassName","headerClassName","className","title","children","closeBtn","onOpened"]),I=x||Object(b.jsx)(s.a,{className:"cursor-pointer",size:15,onClick:p});return Object(b.jsxs)(l.a,Object(r.a)(Object(r.a)(Object(r.a)({isOpen:o,onOpened:N,toggle:p,contentClassName:i()(Object(n.a)({},f,f)),modalClassName:i()("modal-slide-in",Object(n.a)({},g,g)),className:i()((t={},Object(n.a)(t,v,v),Object(n.a)(t,"sidebar-lg","lg"===m),Object(n.a)(t,"sidebar-sm","sm"===m),t))},void 0!==a?{style:{width:String(a)+"px"}}:{}),P),{},{children:[Object(b.jsx)(u.a,{className:i()(Object(n.a)({},h,h)),toggle:p,close:I,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:Object(b.jsx)("span",{className:"align-middle",children:O})})}),Object(b.jsx)(d.a,{className:i()("flex-grow-1",Object(n.a)({},j,j)),children:y})]}))}},140:function(e,t,a){"use strict";var r=a(250),n=a(116),c=a(506),s=a(503),o=a(603),i=a(504),l=a(123),u=a(3),d=function(e){var t=e.actions;return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(o.a,{tag:"div",className:"btn btn-sm",children:Object(u.jsx)(r.a,{size:14,className:"cursor-pointer"})}),Object(u.jsx)(i.a,{right:!0,children:t.map((function(e){var t=e.link,a=e.handler,r=e.label,s=e.icon;return Object(u.jsxs)(c.a,{tag:n.b,to:t,className:"w-100",onClick:a,children:[s,Object(u.jsx)("span",{className:"align-middle",children:r})]},Object(l.a)(32))}))})]})};t.a=d,d.defaultProps={actions:[]}},142:function(e,t,a){"use strict";var r=a(6),n=a(0),c=a(25),s=a(1),o=a(28),i=a(536),l=a(163),u=a.n(l),d=a(145),b=a(175),p=a(157),m=a(171),j=a(153),f=a(154),g=a(248),h=a(602),v=a(249),O=a(114),y=a(3),x=function(e){var t=e.toggleSidebar,a=e.handlePerPage,r=e.rowsPerPage,n=e.handleFilter,c=e.searchTerm,s=e.buttonLabel;return Object(y.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(y.jsxs)(j.a,{children:[Object(y.jsx)(f.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(y.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(y.jsx)(g.a,{for:"rows-per-page",children:"Show"}),Object(y.jsxs)(h.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:r,onChange:a,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(y.jsx)("option",{value:"10",children:"10"}),Object(y.jsx)("option",{value:"25",children:"25"}),Object(y.jsx)("option",{value:"50",children:"50"})]}),Object(y.jsx)(g.a,{for:"rows-per-page",children:"Entries"})]})}),Object(y.jsxs)(f.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[Object(y.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1",children:[Object(y.jsx)(g.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(y.jsx)(v.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:c,onChange:function(e){return n(e.target.value)}})]}),Object(y.jsx)(O.a.Ripple,{color:"primary",onClick:t,children:s})]})]})})},C=x;x.defaultProps={buttonLabel:"",searchTerm:"",rowsPerPage:10,handleFilter:function(){return!1},toggleSidebar:function(){return!1},handlePerPage:function(){return!1}};var N=a(148),P=a(123),I=a(139),w=function(e){var t=e.customTitle,a=e.filters;return a.length<1?null:Object(y.jsxs)(d.a,{children:[Object(y.jsx)(b.a,{children:Object(y.jsx)(p.a,{tag:"h4",children:t})}),Object(y.jsx)(m.a,{children:Object(y.jsx)(j.a,{children:a.map((function(e){var t=e.options,a=e.value,r=e.onChange;return Object(y.jsx)(f.a,{md:"4",children:Object(y.jsx)(N.a,{theme:I.b,isClearable:!1,className:"react-select",classNamePrefix:"select",options:t,value:a,onChange:function(e){return r(e)}})},Object(P.a)(32))}))})})]})},S=w;w.defaultProps={customTitle:"Search Filter",filters:[]};var q=a(164),k=a.n(q),D=function(e){var t=e.currentPage,a=e.handlePagination,r=e.rowsPerPage,n=e.total,c=Number(Math.ceil(n/r));return Object(y.jsx)(k.a,{previousLabel:"",nextLabel:"",pageCount:c||1,activeClassName:"active",forcePage:0!==t?t-1:0,onPageChange:a,pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},A=D;D.defaultProps={currentPage:1,rowsPerPage:10,total:0,handlePagination:function(e){return!1}};a(137),a(129);var L=function(e){var t=Object(s.useState)(""),a=Object(c.a)(t,2),l=a[0],j=a[1],f=Object(s.useState)(1),g=Object(c.a)(f,2),h=g[0],v=g[1],O=Object(s.useState)(10),x=Object(c.a)(O,2),N=x[0],P=x[1],I=e.allData,w=e.data,q=e.columns,k=e.filters,D=e.getAllList,L=e.getList,E=e.searchParams,R=e.total,V=e.headerActionHandler,Y=e.headerActionLabel,M=e.customHeaderLabel,_=e.tableLabel,U=Object(o.useDispatch)();Object(s.useEffect)((function(){U(D()),U(L(Object(n.a)(Object(n.a)({},E),{},{page:h,perPage:N,q:l})))}),[U]);return Object(y.jsxs)(s.Fragment,{children:[Object(y.jsx)(S,{customTitle:M,filters:k.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{onChange:function(t){var a;e.onChange(t),v(1),U(L(Object(n.a)(Object(n.a)({},E),{},(a={},Object(r.a)(a,e.key,t.value),Object(r.a)(a,"page",1),Object(r.a)(a,"perPage",N),Object(r.a)(a,"q",l),a))))}})}))}),Object(y.jsxs)(d.a,{children:[""!==_&&Object(y.jsx)(b.a,{children:Object(y.jsx)(p.a,{tag:"h4",children:_})}),Object(y.jsx)(m.a,{children:Object(y.jsx)(u.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:q,sortIcon:Object(y.jsx)(i.a,{}),className:"react-dataTable",paginationComponent:function(){return Object(y.jsx)(A,{total:R,currentPage:h,rowsPerPage:N,handlePagination:function(e){return function(e){U(L(Object(n.a)(Object(n.a)({},E),{},{page:e.selected+1,perPage:N,q:l}))),v(e.selected+1)}(e)}})},data:function(){var e=Object(n.a)(Object(n.a)({},E),{},{q:l}),t=Object.keys(e).some((function(t){return e[t].length>0}));return w.length>0?w:0===w.length&&t?[]:I.slice(0,N)}(),subHeaderComponent:Object(y.jsx)(C,{toggleSidebar:V,handlePerPage:function(e){var t=parseInt(e.currentTarget.value);U(L(Object(n.a)(Object(n.a)({},E),{},{page:1,perPage:t,q:l}))),P(t),v(1)},rowsPerPage:N,searchTerm:l,handleFilter:function(e){j(e),v(1),U(L(Object(n.a)(Object(n.a)({},E),{},{page:1,perPage:N,q:e})))},buttonLabel:Y})})})]})]})};t.a=L;L.defaultProps={allData:[],data:[],columns:[],total:0,searchParams:{},filters:[],getList:function(e){return!1},getAllList:function(){return!1},headerActionHandler:function(){return!1},headerActionLabel:"",customHeaderLabel:"Search Filter",tableLabel:""}},143:function(e,t,a){"use strict";var r=a(116),n=a(43),c=a(3),s=function(e){var t=e.name,a=e.photo,r=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return void 0!==a&&a.length?Object(c.jsx)(n.a,{className:"mr-1",img:a,width:"32",height:"32"}):Object(c.jsx)(n.a,{color:r||"primary",className:"mr-1",content:t,initials:!0})},o=function(e){var t=e.name,a=e.photo,n=e.viewHandler,o=e.viewLink;return Object(c.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Object(c.jsx)(s,{name:t,photo:a}),Object(c.jsx)("div",{className:"d-flex flex-column",children:Object(c.jsx)(r.b,{to:o,className:"user-name text-truncate mb-0",onClick:n,children:Object(c.jsx)("span",{className:"font-weight-bold",children:t})})})]})};t.a=o,o.defaultProps={name:"",photo:"",viewLink:"",viewHandler:function(){return!1}}},155:function(e,t,a){"use strict";a.d(t,"h",(function(){return p})),a.d(t,"g",(function(){return m})),a.d(t,"d",(function(){return j})),a.d(t,"f",(function(){return f})),a.d(t,"e",(function(){return g})),a.d(t,"a",(function(){return h})),a.d(t,"i",(function(){return v})),a.d(t,"b",(function(){return O})),a.d(t,"c",(function(){return y}));var r=a(0),n=a(125),c=a.n(n),s=a(126),o=a(45),i=a.n(o),l=a(46),u=a(7),d=a(134),b=a(135),p=function(e,t){var a={};return a[e]=t,{type:u.f,payload:a}},m=function(e,t){var a={};return a[e]=t,{type:u.d,payload:a}},j=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/recoveryCategories").then((function(e){t({type:u.h,data:e.data.recoveryCategories})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/recoveryCategories",{params:e}).then((function(t){a({type:u.i,data:t.data.recoveryCategories,totalPages:t.data.total,params:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/recoveryCategories/".concat(e)).then((function(e){a({type:u.g,selectedRecoveryCategory:e.data.recoveryCategory})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t,a){var r,n,s,o,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={serviceName:"required",serviceCategory:"required",serviceSubCategory:"required",serviceIconUrl:"required",basePrice:"required"},n=a().recoveryCategories.recoveryCategoryFormData,s=Object(b.a)(n,r,{"required.serviceName":"Service name is required.","required.serviceCategory":"Category is required.","required.serviceSubCategory":"Subcategory is required.","required.serviceIconUrl":"Icon Url is required.","required.basePrice":"Base price is required."}),o=s.isValid,p=s.errors,o){e.next=5;break}return e.abrupt("return",t({type:u.k,payload:p}));case 5:return t({type:u.m,payload:!0}),t({type:u.l,payload:!0}),e.prev=7,e.next=10,i.a.post("/api/recoveryCategories",n);case 10:e.sent,t({type:u.a,recoveryCategory:n}),t({type:u.j,payload:{}}),t(f(a().recoveryCategories.params)),t(j()),m={title:"The recoveryCategory has been added successfully!",position:"tr",autoDismiss:1},t(Object(l.success)(m)),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(7),"We were not able to create the recoveryCategory. Please try again.",Object(d.a)(e.t0,t,"We were not able to create the recoveryCategory. Please try again.");case 23:return e.prev=23,t({type:u.m,payload:!1}),t({type:u.l,payload:!1}),e.finish(23);case 27:case"end":return e.stop()}}),e,null,[[7,19,23,27]])})));return function(t,a){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a,n){var s,o,p,m,j,f;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s={serviceName:"required",serviceCategory:"required",serviceSubCategory:"required",serviceIconUrl:"required",basePrice:"required"},o=Object(r.a)({},n().recoveryCategories.selectedRecoveryCategory),p=Object(b.a)(o,s,{"required.serviceName":"Service name is required.","required.serviceCategory":"Category is required.","required.serviceSubCategory":"Subcategory is required.","required.serviceIconUrl":"Icon Url is required.","required.basePrice":"Base price is required."}),m=p.isValid,j=p.errors,m){t.next=5;break}return t.abrupt("return",a({type:u.k,payload:j}));case 5:return a({type:u.m,payload:!0}),a({type:u.l,payload:!0}),t.prev=7,delete o._id,delete o.createdAt,delete o.updatedAt,delete o.userInfo,delete o.__v,t.next=15,i.a.put("/api/recoveryCategories/".concat(e),o);case 15:a({type:u.j,payload:{}}),f={title:"RecoveryCategory information was updated successfully!",position:"tr",autoDismiss:1},a(Object(l.success)(f)),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(7),"We were not able to update the recoveryCategory. Please try again.",Object(d.a)(t.t0,a,"We were not able to update the recoveryCategory. Please try again.");case 24:return t.prev=24,a({type:u.m,payload:!1}),a({type:u.l,payload:!1}),t.finish(24);case 28:case"end":return t.stop()}}),t,null,[[7,20,24,28]])})));return function(e,a){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a,r){var n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/api/recoveryCategories/".concat(e,"/deactivate"));case 3:!0===(n=t.sent).data.success&&(s={title:"".concat(n.data.message),position:"tr",autoDismiss:1},a(Object(l.success)(s)),a({type:u.b})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),"We were not able to delete the recoveryCategory. Please try again.",Object(d.a)(t.t0,a,"We were not able to delete the recoveryCategory. Please try again.");case 11:return t.prev=11,a({type:u.m,payload:!1}),a({type:u.l,payload:!1}),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,7,11,15]])})));return function(e,a){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(a,r){var n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.delete("/api/recoveryCategories/".concat(e));case 3:!0===(n=t.sent).data.success&&(s={title:"".concat(n.data.message),position:"tr",autoDismiss:1},a(Object(l.success)(s)),a({type:u.c})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),"We were not able to delete the recoveryCategory. Please try again.",Object(d.a)(t.t0,a,"We were not able to delete the recoveryCategory. Please try again.");case 11:return t.prev=11,a({type:u.m,payload:!1}),a({type:u.l,payload:!1}),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,7,11,15]])})));return function(e,a){return t.apply(this,arguments)}}()}},190:function(e,t,a){"use strict";var r=a(0),n=a(25),c=a(34),s=a(1),o=a(148),i=a(139),l=a(128),u=a(500),d=a(248),b=a(533),p=a(3);t.a=function(e){var t=e.error,a=e.disabled,m=(e.placeholder,e.label),j=e.name,f=e.defaultValue,g=void 0===f?"":f,h=e.onInputChange,v=e.required,O=void 0!==v&&v,y=(e.autoComplete,e.options),x=void 0===y?[]:y,C=Object(c.a)(e,["error","disabled","placeholder","label","name","defaultValue","onInputChange","required","autoComplete","options"]),N=Object(s.useState)(""),P=Object(n.a)(N,2),I=(P[0],P[1]),w=Object(s.useState)(!1),S=Object(n.a)(w,2),q=(S[0],S[1]);Object(l.b)().register;return Object(p.jsxs)(u.a,{children:[m&&Object(p.jsxs)(d.a,{className:"form-label",children:[m," ",O&&Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(o.a,Object(r.a)({theme:i.b,className:"react-select",classNamePrefix:"select",defaultValue:g,options:x,isDisabled:a,name:j,isClearable:!1,onChange:function(e,t){t.action,t.removedValue;h(j,e),q(!0),I(e)}},C)),Object(p.jsx)(b.a,{color:"danger",children:t&&t[0]})]})}},596:function(e,t,a){"use strict";a.r(t);var r=a(25),n=a(1),c=a(28),s=a(138),o=a(190),i=a(122),l=a(117),u=a(20),d=a.n(u),b=a(366),p=a(500),m=a(114),j=a(131),f=a(160),g=a(151),h=a(136),v=a(155),O=a(170),y=a(3),x=function(e){var t=e.open,a=e.toggleSidebar,r=Object(n.useRef)(null),u=Object(c.useSelector)((function(e){return e.users})),x=Object(c.useSelector)((function(e){return e.userCars})),C=Object(c.useSelector)((function(e){return e.employees})),N=Object(c.useSelector)((function(e){return e.vendors})),P=Object(c.useSelector)((function(e){return e.recoveries})),I=Object(c.useSelector)((function(e){return e.recoveryCategories})).allData,w=Object(c.useDispatch)(),S=u.allData,q=x.allData,k=C.allData,D=C.agents,A=N.allData,L=N.employeeAllData,E=P.recoveryFormData,R=P.formErrors,V=P.isLoading;P.isSubmitting;Object(n.useEffect)((function(){w(Object(j.getAllUsers)({perPage:30})),w(Object(g.getAllEmployees)({perPage:30})),w(Object(g.getAllAgents)({perPage:30})),w(Object(h.getAllVendors)({perPage:30})),w(Object(v.d)({perPage:30}))}),[w]),Object(n.useEffect)((function(){E.userId&&w(Object(f.getAllUserCars)({userId:E.userId.value,perPage:30}))}),[E.userId]),Object(n.useEffect)((function(){E.vendorId&&w(Object(h.getAllVendorEmployees)(E.vendorId.value,{perPage:30}))}),[E.vendorId]);var Y=function(e,t){w(Object(O.recoveryFormChange)(e,t))},M=S.map((function(e){return{value:e._id,label:"".concat(e.firstName," ").concat(e.lastName)}})),_=q.map((function(e){return{value:e._id,label:"".concat(e.carMake," ").concat(e.carModel," ").concat(e.engineCapacity)}})),U=k.map((function(e){return{value:e._id,label:"".concat(e.firstName," ").concat(e.lastName)}})),W=A.map((function(e){return{value:e._id,label:"".concat(e.vendorName)}})),H=L.map((function(e){return{value:e._id,label:"".concat(e.firstName," ").concat(e.lastName)}})),F=D.map((function(e){return{value:e._id,label:"".concat(e.firstName," ").concat(e.lastName)}})),T=I.map((function(e){return{value:e._id,label:"".concat(e.serviceName)}}));return Object(y.jsx)(s.a,{size:"lg",open:t,title:"New Recovery",headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:a,children:Object(y.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),w(Object(O.addRecovery)())},innerRef:r,children:[Object(y.jsx)(o.a,{label:"User",error:R.userId,name:"userId",onInputChange:function(e,t){Y(e,t)},defaultValue:E.userId,options:M,required:!0,className:d()({"is-invalid":R.userId})}),Object(y.jsx)(o.a,{label:"User Car",error:R.userCarId,name:"userCarId",onInputChange:function(e,t){Y(e,t)},defaultValue:E.userCarId,options:_,required:!0,className:d()({"is-invalid":R.userCarId})}),Object(y.jsx)(o.a,{label:"Carhoot Employee",error:R.carhootEmployeeId,name:"carhootEmployeeId",onInputChange:function(e,t){Y(e,t)},defaultValue:E.carhootEmployeeId,options:U,className:d()({"is-invalid":R.carhootEmployeeId})}),Object(y.jsx)(o.a,{label:"Field Agent",error:R.fieldAgentId,name:"fieldAgentId",onInputChange:function(e,t){Y(e,t)},defaultValue:E.fieldAgentId,options:F,className:d()({"is-invalid":R.fieldAgentId})}),Object(y.jsx)(o.a,{label:"Vendor",error:R.vendorId,name:"vendorId",onInputChange:function(e,t){Y(e,t)},defaultValue:E.vendorId,options:W,className:d()({"is-invalid":R.vendorId})}),Object(y.jsx)(o.a,{label:"Vendor Employee",error:R.vendorEmployeeId,name:"vendorEmployeeId",onInputChange:function(e,t){Y(e,t)},defaultValue:E.vendorEmployeeId,options:H,className:d()({"is-invalid":R.vendorEmployeeId})}),Object(y.jsx)(o.a,{label:"Category",error:R.orderCategoryId,name:"orderCategoryId",onInputChange:function(e,t){Y(e,t)},defaultValue:E.orderCategoryId,options:T,required:!0,className:d()({"is-invalid":R.orderCategoryId})}),Object(y.jsx)(i.a,{type:"number",label:"Order Price",error:R.orderPrice,name:"orderPrice",placeholder:"Order Price",onInputChange:function(e,t){Y(e,t)},defaultValue:E.orderPrice,required:!0,className:d()({"is-invalid":R.orderPrice})}),Object(y.jsxs)(p.a,{row:!0,className:"mr-0 ml-0",children:[Object(y.jsx)(l.a,{blocking:V,className:"mr-1",children:Object(y.jsx)(m.a,{type:"submit",color:"primary",children:"Submit"})}),Object(y.jsx)(m.a,{type:"reset",color:"secondary",outline:!0,onClick:a,children:"Cancel"})]})]})})},C=a(143),N=a(140),P=a(47),I=a(112),w=a(534),S=a(535),q=a(132),k=[{name:"User",minWidth:"230px",selector:"user",sortable:!0,cell:function(e){var t=e.userInfo?e.userInfo[0]:{firstName:"",lastName:""};return Object(y.jsx)(C.a,{name:"".concat(t.firstName," ").concat(t.lastName),photo:t.profilePictureURL,viewHandler:function(){return P.a.dispatch(Object(O.getRecovery)(e._id))},viewLink:"/recoveryRequest/view/".concat(e._id)})}},{name:"Employee Assigned",minWidth:"230px",selector:"carhootEmployee",sortable:!0,cell:function(e){var t=e.employeeInfo&&e.employeeInfo[0]?e.employeeInfo[0]:{firstName:"",lastName:""},a=t.firstName,r=t.lastName;return"".concat(a," ").concat(r)}},{name:"Request Type",minWidth:"172px",selector:"vendorEmployee",sortable:!0,cell:function(e){var t=e.categoryInfo?e.categoryInfo[0]:{serviceName:""};return Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("span",{className:"font-weight-bolder mb-25",children:t&&t.serviceName}),Object(y.jsx)("span",{className:"font-small-2 text-muted",children:Object(q.d)(e.orderPrice)})]})}},{name:"Request Date",minWidth:"138px",selector:"orderCategoryId",sortable:!0,cell:function(e){e.categoryInfo&&e.categoryInfo[0];return Object(y.jsxs)("div",{className:"d-flex flex-column",children:[Object(y.jsx)("span",{className:"font-weight-bolder mb-25",children:"Created Date"}),Object(y.jsx)("span",{className:"font-small-2 text-muted",children:Object(q.b)(e.createdAt,q.a.YMD_HMS)})]})}},{name:"Last Update",minWidth:"138px",selector:"orderStatus",sortable:!0,cell:function(e){return Object(y.jsx)("div",{className:"d-flex flex-column",children:Object(y.jsx)("span",{className:"mb-25",children:Object(q.e)(e.updatedAt)})})}},{name:"Status",minWidth:"138px",selector:"orderStatus",sortable:!0,cell:function(e){return Object(y.jsx)("div",{className:"d-flex align-items-center",children:Object(y.jsx)(I.a,{pill:!0,color:"light-primary",className:"mr-1",children:"In Progress"})})}},{name:"Actions",minWidth:"100px",cell:function(e){var t=[{link:"/recoveryRequest/view/".concat(e._id),handler:function(){return P.a.dispatch(Object(O.getRecovery)(e._id))},label:"Details",icon:Object(y.jsx)(w.a,{size:14,className:"mr-50"})},{link:"/recoveryRequest/edit/".concat(e._id),handler:function(){return P.a.dispatch(Object(O.getRecovery)(e._id))},label:"Edit",icon:Object(y.jsx)(S.a,{size:14,className:"mr-50"})}];return Object(y.jsx)(N.a,{actions:t})}}],D=a(142);a(137),a(129),a(118),t.default=function(){var e=Object(n.useState)({value:"",label:"Select User"}),t=Object(r.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)({value:"",label:"Select Order Category"}),i=Object(r.a)(o,2),l=i[0],u=i[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),p=b[0],m=b[1],f=Object(c.useSelector)((function(e){return e.recoveries})),g=f.allData,h=f.data,C=f.total,N=Object(c.useSelector)((function(e){return e.users})).allData,P=Object(c.useSelector)((function(e){return e.recoveryCategories})).allData,I=Object(c.useDispatch)(),w=[{value:"",label:"Select User"}];N.map((function(e){w.push({value:e._id,label:"".concat(e.firstName," ").concat(e.lastName)})}));var S=[{value:"",label:"Select Order Category"}];P.map((function(e){S.push({value:e._id,label:"".concat(e.serviceName)})})),Object(n.useEffect)((function(){I(Object(j.getAllUsers)({perPage:30})),I(Object(v.d)({perPage:30}))}),[I]);var q=function(){return m(!p)},A=[{key:"userId",options:w,value:a,onChange:s},{key:"orderCategoryId",options:S,value:l,onChange:u}],L={userId:a.value,orderCategoryId:l.value};return Object(y.jsxs)("div",{className:"app-user-list",children:[Object(y.jsx)(D.a,{allData:g,data:h,total:C,columns:k,filters:A,searchParams:L,getList:O.getRecoveryList,getAllList:O.getAllRecoveries,headerActionHandler:q,headerActionLabel:"Add Recovery Request"}),Object(y.jsx)(x,{open:p,toggleSidebar:q})]})}}}]);
//# sourceMappingURL=28.f5f49196.chunk.js.map