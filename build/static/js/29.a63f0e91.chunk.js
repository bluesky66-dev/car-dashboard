(this["webpackJsonpcar-hoot-react-admin-dashboard"]=this["webpackJsonpcar-hoot-react-admin-dashboard"]||[]).push([[29],{117:function(e,t,a){"use strict";var r=a(0),n=a(6),l=a(1),c=a(20),o=a.n(c),s=a(161),i=(a(120),a(3)),u=function(e){var t,a=e.children,c=e.blocking,s=e.loader,u=e.className,d=e.tag,b=e.overlayColor,m=d;return Object(i.jsxs)(m,{className:o()("ui-loader",(t={},Object(n.a)(t,u,u),Object(n.a)(t,"show",c),t)),children:[a,c?Object(i.jsxs)(l.Fragment,{children:[Object(i.jsx)("div",Object(r.a)({className:"overlay"},c&&b?{style:{backgroundColor:b}}:{})),Object(i.jsx)("div",{className:"loader",children:s})]}):null]})};t.a=u,u.defaultProps={tag:"div",blocking:!1,loader:Object(i.jsx)(s.a,{color:"primary"})}},118:function(e,t,a){},120:function(e,t,a){},122:function(e,t,a){"use strict";var r=a(0),n=a(25),l=a(34),c=a(1),o=a(128),s=a(500),i=a(248),u=a(249),d=a(533),b=a(3),m=function(e){var t=e.type,a=e.error,m=(e.step,e.decimals),p=e.min,j=e.max,f=e.disabled,h=e.placeholder,g=(e.rows,e.label),O=e.name,v=e.defaultValue,x=void 0===v?"":v,y=e.onInputChange,N=e.children,w=e.required,C=void 0!==w&&w,P=e.autoComplete,S=void 0===P?"off":P,k=Object(l.a)(e,["type","error","step","decimals","min","max","disabled","placeholder","rows","label","name","defaultValue","onInputChange","children","required","autoComplete"]),L=Object(c.useState)(""),E=Object(n.a)(L,2),z=(E[0],E[1]),M=Object(c.useState)(!1),Y=Object(n.a)(M,2),D=(Y[0],Y[1]),T=Object(o.b)().register,I=function(e){y(e.target.name,e.target.value),D(!0),z(e.target.value)};if("number"===t){return Object(b.jsxs)(s.a,{children:[g&&Object(b.jsxs)(i.a,{className:"form-label",children:[g," ",C&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(u.a,Object(r.a)({autoComplete:"on",step:"step",min:p||0,max:j||null,pattern:"[0-9]",onInput:function(e){m||(e.target.value=e.target.value.replace(/[^0-9]*/g,""))},type:t,onChange:function(e){I(e)},disabled:f,name:O,value:x,placeholder:h,innerRef:T({required:C})},k)),Object(b.jsx)(d.a,{color:"danger",children:a&&a[0]})]})}return Object(b.jsxs)(s.a,{children:[g&&Object(b.jsxs)(i.a,{className:"form-label",children:[g," ",C&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(u.a,Object(r.a)(Object(r.a)({autoComplete:S,type:t,onChange:function(e){I(e)},disabled:f,name:O,value:x,placeholder:h,innerRef:T({required:C})},k),{},{children:N})),Object(b.jsx)(d.a,{color:"danger",children:a&&a[0]})]})};m.defaultProps={step:1,decimals:!0,rows:"4"},t.a=m},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",a="",r=e;r>0;--r)a+=t[Math.floor(Math.random()*t.length)];return a}},129:function(e,t,a){},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return i}));var r=function(e){return void 0!==e&&null!==e},n=function(e){if(!r)return"";var t=e.toString().replace(/\D/g,"").match(/(\d{3})(\d{3})(\d{3})(\d{3})/);return t.length<5?"":"+".concat(t[1]," ").concat(t[2]," ").concat(t[3]," ").concat(t[4])},l=function(e){if(!r)return"";var t=e.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");return"Ksh. ".concat(t)},c=a(144),o=a.n(c),s={Y:"YYYY",YM:"YYYY-MM",YMD:"YYYY-MM-DD",YMD_HMS:"YYYY-MM-DD hh:mm:ss"},i=function(e){if(!r)return"";var t=o()(e);return t.isValid()?t.fromNow(!0):""},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.YMD;if(!r)return"";var a=o()(e);return a.isValid()?a.format(t):""}},138:function(e,t,a){"use strict";var r=a(0),n=a(6),l=a(34),c=a(499),o=a(20),s=a.n(o),i=a(198),u=a(195),d=a(196),b=a(3);t.a=function(e){var t,a=e.width,o=e.open,m=e.toggleSidebar,p=e.size,j=e.bodyClassName,f=e.contentClassName,h=e.wrapperClassName,g=e.headerClassName,O=e.className,v=e.title,x=e.children,y=e.closeBtn,N=e.onOpened,w=void 0===N?function(){return null}:N,C=Object(l.a)(e,["width","open","toggleSidebar","size","bodyClassName","contentClassName","wrapperClassName","headerClassName","className","title","children","closeBtn","onOpened"]),P=y||Object(b.jsx)(c.a,{className:"cursor-pointer",size:15,onClick:m});return Object(b.jsxs)(i.a,Object(r.a)(Object(r.a)(Object(r.a)({isOpen:o,onOpened:w,toggle:m,contentClassName:s()(Object(n.a)({},f,f)),modalClassName:s()("modal-slide-in",Object(n.a)({},h,h)),className:s()((t={},Object(n.a)(t,O,O),Object(n.a)(t,"sidebar-lg","lg"===p),Object(n.a)(t,"sidebar-sm","sm"===p),t))},void 0!==a?{style:{width:String(a)+"px"}}:{}),C),{},{children:[Object(b.jsx)(u.a,{className:s()(Object(n.a)({},g,g)),toggle:m,close:P,tag:"div",children:Object(b.jsx)("h5",{className:"modal-title",children:Object(b.jsx)("span",{className:"align-middle",children:v})})}),Object(b.jsx)(d.a,{className:s()("flex-grow-1",Object(n.a)({},j,j)),children:x})]}))}},140:function(e,t,a){"use strict";var r=a(250),n=a(116),l=a(506),c=a(503),o=a(603),s=a(504),i=a(123),u=a(3),d=function(e){var t=e.actions;return Object(u.jsxs)(c.a,{children:[Object(u.jsx)(o.a,{tag:"div",className:"btn btn-sm",children:Object(u.jsx)(r.a,{size:14,className:"cursor-pointer"})}),Object(u.jsx)(s.a,{right:!0,children:t.map((function(e){var t=e.link,a=e.handler,r=e.label,c=e.icon;return Object(u.jsxs)(l.a,{tag:n.b,to:t,className:"w-100",onClick:a,children:[c,Object(u.jsx)("span",{className:"align-middle",children:r})]},Object(i.a)(32))}))})]})};t.a=d,d.defaultProps={actions:[]}},142:function(e,t,a){"use strict";var r=a(6),n=a(0),l=a(25),c=a(1),o=a(28),s=a(536),i=a(163),u=a.n(i),d=a(145),b=a(175),m=a(157),p=a(171),j=a(153),f=a(154),h=a(248),g=a(602),O=a(249),v=a(114),x=a(3),y=function(e){var t=e.toggleSidebar,a=e.handlePerPage,r=e.rowsPerPage,n=e.handleFilter,l=e.searchTerm,c=e.buttonLabel;return Object(x.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(f.a,{xl:"6",className:"d-flex align-items-center p-0",children:Object(x.jsxs)("div",{className:"d-flex align-items-center w-100",children:[Object(x.jsx)(h.a,{for:"rows-per-page",children:"Show"}),Object(x.jsxs)(g.a,{className:"form-control mx-50",type:"select",id:"rows-per-page",value:r,onChange:a,style:{width:"5rem",padding:"0 0.8rem",backgroundPosition:"calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0"},children:[Object(x.jsx)("option",{value:"10",children:"10"}),Object(x.jsx)("option",{value:"25",children:"25"}),Object(x.jsx)("option",{value:"50",children:"50"})]}),Object(x.jsx)(h.a,{for:"rows-per-page",children:"Entries"})]})}),Object(x.jsxs)(f.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[Object(x.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1",children:[Object(x.jsx)(h.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(x.jsx)(O.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:l,onChange:function(e){return n(e.target.value)}})]}),Object(x.jsx)(v.a.Ripple,{color:"primary",onClick:t,children:c})]})]})})},N=y;y.defaultProps={buttonLabel:"",searchTerm:"",rowsPerPage:10,handleFilter:function(){return!1},toggleSidebar:function(){return!1},handlePerPage:function(){return!1}};var w=a(148),C=a(123),P=a(139),S=function(e){var t=e.customTitle,a=e.filters;return a.length<1?null:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)(m.a,{tag:"h4",children:t})}),Object(x.jsx)(p.a,{children:Object(x.jsx)(j.a,{children:a.map((function(e){var t=e.options,a=e.value,r=e.onChange;return Object(x.jsx)(f.a,{md:"4",children:Object(x.jsx)(w.a,{theme:P.b,isClearable:!1,className:"react-select",classNamePrefix:"select",options:t,value:a,onChange:function(e){return r(e)}})},Object(C.a)(32))}))})})]})},k=S;S.defaultProps={customTitle:"Search Filter",filters:[]};var L=a(164),E=a.n(L),z=function(e){var t=e.currentPage,a=e.handlePagination,r=e.rowsPerPage,n=e.total,l=Number(Math.ceil(n/r));return Object(x.jsx)(E.a,{previousLabel:"",nextLabel:"",pageCount:l||1,activeClassName:"active",forcePage:0!==t?t-1:0,onPageChange:a,pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end my-2 pr-1"})},M=z;z.defaultProps={currentPage:1,rowsPerPage:10,total:0,handlePagination:function(e){return!1}};a(137),a(129);var Y=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),i=a[0],j=a[1],f=Object(c.useState)(1),h=Object(l.a)(f,2),g=h[0],O=h[1],v=Object(c.useState)(10),y=Object(l.a)(v,2),w=y[0],C=y[1],P=e.allData,S=e.data,L=e.columns,E=e.filters,z=e.getAllList,Y=e.getList,D=e.searchParams,T=e.total,I=e.headerActionHandler,q=e.headerActionLabel,R=e.customHeaderLabel,A=e.tableLabel,H=Object(o.useDispatch)();Object(c.useEffect)((function(){H(z()),H(Y(Object(n.a)(Object(n.a)({},D),{},{page:g,perPage:w,q:i})))}),[H]);return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)(k,{customTitle:R,filters:E.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{onChange:function(t){var a;e.onChange(t),O(1),H(Y(Object(n.a)(Object(n.a)({},D),{},(a={},Object(r.a)(a,e.key,t.value),Object(r.a)(a,"page",1),Object(r.a)(a,"perPage",w),Object(r.a)(a,"q",i),a))))}})}))}),Object(x.jsxs)(d.a,{children:[""!==A&&Object(x.jsx)(b.a,{children:Object(x.jsx)(m.a,{tag:"h4",children:A})}),Object(x.jsx)(p.a,{children:Object(x.jsx)(u.a,{noHeader:!0,pagination:!0,subHeader:!0,responsive:!0,paginationServer:!0,columns:L,sortIcon:Object(x.jsx)(s.a,{}),className:"react-dataTable",paginationComponent:function(){return Object(x.jsx)(M,{total:T,currentPage:g,rowsPerPage:w,handlePagination:function(e){return function(e){H(Y(Object(n.a)(Object(n.a)({},D),{},{page:e.selected+1,perPage:w,q:i}))),O(e.selected+1)}(e)}})},data:function(){var e=Object(n.a)(Object(n.a)({},D),{},{q:i}),t=Object.keys(e).some((function(t){return e[t].length>0}));return S.length>0?S:0===S.length&&t?[]:P.slice(0,w)}(),subHeaderComponent:Object(x.jsx)(N,{toggleSidebar:I,handlePerPage:function(e){var t=parseInt(e.currentTarget.value);H(Y(Object(n.a)(Object(n.a)({},D),{},{page:1,perPage:t,q:i}))),C(t),O(1)},rowsPerPage:w,searchTerm:i,handleFilter:function(e){j(e),O(1),H(Y(Object(n.a)(Object(n.a)({},D),{},{page:1,perPage:w,q:e})))},buttonLabel:q})})})]})]})};t.a=Y;Y.defaultProps={allData:[],data:[],columns:[],total:0,searchParams:{},filters:[],getList:function(e){return!1},getAllList:function(){return!1},headerActionHandler:function(){return!1},headerActionLabel:"",customHeaderLabel:"Search Filter",tableLabel:""}},143:function(e,t,a){"use strict";var r=a(116),n=a(43),l=a(3),c=function(e){var t=e.name,a=e.photo,r=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return void 0!==a&&a.length?Object(l.jsx)(n.a,{className:"mr-1",img:a,width:"32",height:"32"}):Object(l.jsx)(n.a,{color:r||"primary",className:"mr-1",content:t,initials:!0})},o=function(e){var t=e.name,a=e.photo,n=e.viewHandler,o=e.viewLink;return Object(l.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Object(l.jsx)(c,{name:t,photo:a}),Object(l.jsx)("div",{className:"d-flex flex-column",children:Object(l.jsx)(r.b,{to:o,className:"user-name text-truncate mb-0",onClick:n,children:Object(l.jsx)("span",{className:"font-weight-bold",children:t})})})]})};t.a=o,o.defaultProps={name:"",photo:"",viewLink:"",viewHandler:function(){return!1}}},222:function(e,t,a){"use strict";var r=a(1),n=a.n(r),l=a(2),c=a.n(l);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,c=void 0===l?24:l,i=s(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),n.a.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),n.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))}));i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.displayName="Bell",t.a=i},456:function(e,t,a){"use strict";var r=a(1),n=a.n(r),l=a(2),c=a.n(l);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,l=e.size,c=void 0===l?24:l,i=s(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),n.a.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}));i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.displayName="Star",t.a=i},586:function(e,t,a){"use strict";a.r(t);var r=a(25),n=a(1),l=a.n(n),c=a(28),o=a(138),s=a(122),i=a(117),u=a(20),d=a.n(u),b=(a(128),a(366)),m=a(500),p=a(114),j=a(151),f=a(3),h=function(e){var t=e.open,a=e.toggleSidebar,r=Object(n.useRef)(null),l=Object(c.useSelector)((function(e){return e.employees})),u=l.isLoading,h=l.formErrors,g=l.employeeFormData,O=Object(c.useDispatch)(),v=Object(c.useSelector)((function(e){return e.roles})).rolesConfig.employee,x=v.roles,y=(v.status,function(e,t){O(Object(j.employeeFormChange)(e,t))}),N=Object.keys(x).map((function(e){return Object(f.jsx)("option",{value:e,children:x[e]},e)}));return Object(f.jsx)(o.a,{size:"lg",open:t,title:"New Employee",headerClassName:"mb-1",contentClassName:"pt-0",toggleSidebar:a,children:Object(f.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),O(Object(j.addEmployee)())},innerRef:r,children:[Object(f.jsx)(s.a,{type:"text",label:"First Name",error:h.firstName,name:"firstName",placeholder:"First Name",onInputChange:function(e,t){y(e,t)},defaultValue:g.firstName,required:!0,className:d()({"is-invalid":h.firstName})}),Object(f.jsx)(s.a,{type:"text",label:"Last Name",error:h.lastName,name:"lastName",placeholder:"Last Name",onInputChange:function(e,t){y(e,t)},defaultValue:g.lastName,required:!0,className:d()({"is-invalid":h.lastName})}),Object(f.jsx)(s.a,{type:"text",label:"Username",error:h.userName,name:"userName",placeholder:"Username",onInputChange:function(e,t){y(e,t)},defaultValue:g.userName,required:!0,className:d()({"is-invalid":h.userName})}),Object(f.jsx)(s.a,{type:"email",label:"Email",error:h.email,name:"email",placeholder:"Email",onInputChange:function(e,t){y(e,t)},defaultValue:g.email,required:!0,className:d()({"is-invalid":h.email})}),Object(f.jsxs)(s.a,{type:"select",label:"Country Code",error:h.countryCode,name:"countryCode",onInputChange:function(e,t){y(e,t)},defaultValue:g.countryCode,required:!0,className:d()({"is-invalid":h.countryCode}),children:[Object(f.jsx)("option",{value:"",children:"Select Country Code"}),Object(f.jsx)("option",{value:"254",children:"+254 Kenya"})]}),Object(f.jsx)(s.a,{type:"number",label:"Phone Number",error:h.phoneNumber,name:"phoneNumber",placeholder:"Contact",onInputChange:function(e,t){y(e,t)},defaultValue:g.phoneNumber,required:!0,className:d()({"is-invalid":h.phoneNumber})}),Object(f.jsxs)(s.a,{type:"select",label:"Employee Role",error:h.role,name:"role",onInputChange:function(e,t){y(e,t)},defaultValue:g.role,className:d()({"is-invalid":h.role}),children:[Object(f.jsx)("option",{value:"",children:"Select Role"}),N]}),Object(f.jsxs)(m.a,{row:!0,className:"mr-0 ml-0",children:[Object(f.jsx)(i.a,{blocking:u,className:"mr-1",children:Object(f.jsx)(p.a,{type:"submit",color:"primary",children:"Submit"})}),Object(f.jsx)(p.a,{type:"reset",color:"secondary",outline:!0,onClick:a,children:"Cancel"})]})]})})},g=a(143),O=a(140),v=a(47),x=a(112),y=a(2),N=a.n(y);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var P=Object(n.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,c=void 0===n?24:n,o=C(e,["color","size"]);return l.a.createElement("svg",w({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),l.a.createElement("path",{d:"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}))}));P.propTypes={color:N.a.string,size:N.a.oneOfType([N.a.string,N.a.number])},P.displayName="Gitlab";var S=P;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var E=Object(n.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,c=void 0===n?24:n,o=L(e,["color","size"]);return l.a.createElement("svg",k({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),l.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.a.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),l.a.createElement("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}))}));E.propTypes={color:N.a.string,size:N.a.oneOfType([N.a.string,N.a.number])},E.displayName="Globe";var z=E;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var D=Object(n.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,c=void 0===n?24:n,o=Y(e,["color","size"]);return l.a.createElement("svg",M({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),l.a.createElement("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}))}));D.propTypes={color:N.a.string,size:N.a.oneOfType([N.a.string,N.a.number])},D.displayName="Shield";var T=D,I=a(456),q=a(222),R=a(534),A=a(535),H=a(132),V={pending:"light-warning",active:"light-success",deactivated:"light-secondary",deleted:"light-danger"},F=[{name:"Employee",minWidth:"297px",selector:"fullName",sortable:!0,cell:function(e){return Object(f.jsx)(g.a,{name:"".concat(e.firstName," ").concat(e.lastName),photo:e.profilePictureURL,viewHandler:function(){return v.a.dispatch(Object(j.getEmployee)(e._id))},viewLink:"/employees/view/".concat(e._id)})}},{name:"Email",minWidth:"229px",selector:"email",sortable:!0,cell:function(e){return e.email}},{name:"Phone Number",minWidth:"229px",selector:"phoneNumber",sortable:!0,cell:function(e){return Object(f.jsx)("span",{className:"text-capitalize",children:Object(H.c)(e.phoneNumberStr)})}},{name:"Role",minWidth:"172px",selector:"role",sortable:!0,cell:function(e){return function(e){var t={tech_admin:{class:"text-danger",icon:S},admin:{class:"text-primary",icon:z},operations:{class:"text-primary",icon:T},agent:{class:"text-primary",icon:I.a}},a=Object(c.useSelector)((function(e){return e.roles})).rolesConfig.employee.roles,r=t[e.role]?t[e.role].icon:q.a;return Object(f.jsxs)("span",{className:"text-truncate text-capitalize align-middle",children:[Object(f.jsx)(r,{size:18,className:"".concat(t[e.role]?t[e.role].class:""," mr-50")}),a[e.role]]})}(e)}},{name:"Status",minWidth:"138px",selector:"status",sortable:!0,cell:function(e){var t=Object(c.useSelector)((function(e){return e.roles})).rolesConfig.employee.status;return Object(f.jsx)(x.a,{className:"text-capitalize",color:V[e.status],pill:!0,children:t[e.status]})}},{name:"Actions",minWidth:"100px",cell:function(e){var t=[{link:"/employees/view/".concat(e._id),handler:function(){return v.a.dispatch(Object(j.getEmployee)(e._id))},label:"Details",icon:Object(f.jsx)(R.a,{size:14,className:"mr-50"})},{link:"/employees/edit/".concat(e._id),handler:function(){return v.a.dispatch(Object(j.getEmployee)(e._id))},label:"Edit",icon:Object(f.jsx)(A.a,{size:14,className:"mr-50"})}];return Object(f.jsx)(O.a,{actions:t})}}],W=a(142);a(137),a(129),a(118),t.default=function(){var e=Object(n.useState)({value:"",label:"Select Role"}),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({value:"",label:"Select Status",number:0}),s=Object(r.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),m=b[0],p=b[1],g=Object(c.useSelector)((function(e){return e.employees})),O=g.allData,v=g.data,x=g.total,y=Object(c.useSelector)((function(e){return e.roles})).rolesConfig.employee,N=y.roles,w=y.status,C=[{value:"",label:"Select Role"}];for(var P in N)C.push({value:P,label:N[P]});var S=[{value:"",label:"Select Status"}];for(var k in w)S.push({value:k,label:w[k]});var L=function(){return p(!m)};return Object(f.jsxs)("div",{className:"app-user-list",children:[Object(f.jsx)(W.a,{allData:O,data:v,total:x,columns:F,filters:[{key:"role",options:C,value:a,onChange:l},{key:"status",options:S,value:i,onChange:u}],searchParams:{role:a.value,status:i.value},getList:j.getEmployeeList,getAllList:j.getAllEmployees,headerActionHandler:L,headerActionLabel:"Add New Employee"}),Object(f.jsx)(h,{open:m,toggleSidebar:L})]})}}}]);
//# sourceMappingURL=29.a63f0e91.chunk.js.map