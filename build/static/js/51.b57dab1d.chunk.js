(this["webpackJsonpcar-hoot-react-admin-dashboard"]=this["webpackJsonpcar-hoot-react-admin-dashboard"]||[]).push([[51],{117:function(e,t,a){"use strict";var r=a(0),n=a(6),s=a(1),c=a(20),o=a.n(c),l=a(162),i=(a(121),a(3)),d=function(e){var t,a=e.children,c=e.blocking,l=e.loader,d=e.className,u=e.tag,b=e.overlayColor,j=u;return Object(i.jsxs)(j,{className:o()("ui-loader",(t={},Object(n.a)(t,d,d),Object(n.a)(t,"show",c),t)),children:[a,c?Object(i.jsxs)(s.Fragment,{children:[Object(i.jsx)("div",Object(r.a)({className:"overlay"},c&&b?{style:{backgroundColor:b}}:{})),Object(i.jsx)("div",{className:"loader",children:l})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(i.jsx)(l.a,{color:"primary"})}},121:function(e,t,a){},123:function(e,t,a){"use strict";var r=a(0),n=a(25),s=a(34),c=a(1),o=a(130),l=a(499),i=a(245),d=a(246),u=a(532),b=a(3),j=function(e){var t=e.type,a=e.error,j=(e.step,e.decimals),p=e.min,m=e.max,h=e.disabled,O=e.placeholder,f=(e.rows,e.label),g=e.name,v=e.defaultValue,x=void 0===v?"":v,y=e.onInputChange,N=e.children,w=e.required,C=void 0!==w&&w,k=e.autoComplete,E=void 0===k?"off":k,P=Object(s.a)(e,["type","error","step","decimals","min","max","disabled","placeholder","rows","label","name","defaultValue","onInputChange","children","required","autoComplete"]),M=Object(c.useState)(""),S=Object(n.a)(M,2),z=(S[0],S[1]),I=Object(c.useState)(!1),L=Object(n.a)(I,2),T=(L[0],L[1]),q=Object(o.b)().register,D=function(e){y(e.target.name,e.target.value),T(!0),z(e.target.value)};if("number"===t){return Object(b.jsxs)(l.a,{children:[f&&Object(b.jsxs)(i.a,{className:"form-label",children:[f," ",C&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(d.a,Object(r.a)({autoComplete:"on",step:"step",min:p||0,max:m||null,pattern:"[0-9]",onInput:function(e){j||(e.target.value=e.target.value.replace(/[^0-9]*/g,""))},type:t,onChange:function(e){D(e)},disabled:h,name:g,value:x,placeholder:O,innerRef:q({required:C})},P)),Object(b.jsx)(u.a,{color:"danger",children:a&&a[0]})]})}return Object(b.jsxs)(l.a,{children:[f&&Object(b.jsxs)(i.a,{className:"form-label",children:[f," ",C&&Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)(d.a,Object(r.a)(Object(r.a)({autoComplete:E,type:t,onChange:function(e){D(e)},disabled:h,name:g,value:x,placeholder:O,innerRef:q({required:C})},P),{},{children:N})),Object(b.jsx)(u.a,{color:"danger",children:a&&a[0]})]})};j.defaultProps={step:1,decimals:!0,rows:"4"},t.a=j},160:function(e,t,a){"use strict";var r=a(14),n=a(16),s=a(1),c=a.n(s),o=a(2),l=a.n(o),i=a(33),d=a.n(i),u=a(24),b={tag:u.t,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,s=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.p)(d()(t,"card-title"),a);return c.a.createElement(s,Object(r.a)({},o,{className:l}))};j.propTypes=b,j.defaultProps={tag:"div"},t.a=j},162:function(e,t,a){"use strict";var r=a(14),n=a(16),s=a(1),c=a.n(s),o=a(2),l=a.n(o),i=a(33),d=a.n(i),u=a(24),b={tag:u.t,type:l.a.string,size:l.a.string,color:l.a.string,className:l.a.string,cssModule:l.a.object,children:l.a.string},j=function(e){var t=e.className,a=e.cssModule,s=e.type,o=e.size,l=e.color,i=e.children,b=e.tag,j=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),p=Object(u.p)(d()(t,!!o&&"spinner-"+s+"-"+o,"spinner-"+s,!!l&&"text-"+l),a);return c.a.createElement(b,Object(r.a)({role:"status"},j,{className:p}),i&&c.a.createElement("span",{className:Object(u.p)("sr-only",a)},i))};j.propTypes=b,j.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=j},173:function(e,t,a){"use strict";var r=a(14),n=a(16),s=a(1),c=a.n(s),o=a(2),l=a.n(o),i=a(33),d=a.n(i),u=a(24),b={tag:u.t,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,s=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.p)(d()(t,"card-text"),a);return c.a.createElement(s,Object(r.a)({},o,{className:l}))};j.propTypes=b,j.defaultProps={tag:"p"},t.a=j},211:function(e,t,a){},454:function(e,t,a){"use strict";var r=a(1),n=a.n(r),s=a(2),c=a.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,s=e.size,c=void 0===s?24:s,i=l(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),n.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.displayName="ChevronLeft",t.a=i},556:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a(149),s=a(116),c=a(454),o=a(145),l=a(171),i=a(160),d=a(173),u=a(365),b=a(114),j=(a(211),a(123)),p=a(117),m=a(343),h=a(3);t.default=function(e){var t=Object(r.useSelector)((function(e){return e.authentication})).authenticated,a=Object(r.useSelector)((function(e){return e.forgotPassword})),O=a.forgotFormData,f=a.formErrors,g=a.isLoading,v=Object(r.useDispatch)();if(t)return Object(h.jsx)(n.a,{to:"/dashboard"});return Object(h.jsx)(p.a,{blocking:g,children:Object(h.jsx)("div",{className:"auth-wrapper auth-v1 px-2",children:Object(h.jsx)("div",{className:"auth-inner py-2",children:Object(h.jsx)(o.a,{className:"mb-0",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(s.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:Object(h.jsx)("h2",{className:"brand-text text-primary ml-1",children:"Carhoot"})}),Object(h.jsx)(i.a,{tag:"h4",className:"mb-1",children:"Forgot Password? \ud83d\udd12"}),Object(h.jsx)(d.a,{className:"mb-2",children:"Enter your email and we'll send you instructions to reset your password"}),Object(h.jsxs)(u.a,{className:"auth-reset-password-form mt-2",onSubmit:function(e){e.preventDefault(),v(Object(m.forgotPassowrd)())},children:[Object(h.jsx)(j.a,{type:"email",label:"Email Address",error:f.email,name:"email",defaultValue:O.email,placeholder:"Please Enter Your Email",onInputChange:function(e,t){!function(e,t){v(Object(m.forgotPasswordChange)(e,t))}(e,t)}}),Object(h.jsx)(b.a.Ripple,{color:"primary",block:!0,type:"submit",children:"Send Email"})]}),Object(h.jsx)("p",{className:"text-center mt-2",children:Object(h.jsxs)(s.b,{to:"/login",children:[Object(h.jsx)(c.a,{className:"mr-25",size:14}),Object(h.jsx)("span",{className:"align-middle",children:"Back to login"})]})})]})})})})})}}}]);
//# sourceMappingURL=51.b57dab1d.chunk.js.map