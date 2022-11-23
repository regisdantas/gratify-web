"use strict";(self.webpackChunkgratify_web=self.webpackChunkgratify_web||[]).push([[966],{2999:function(n,e,t){t.d(e,{Z:function(){return u}});t(2791);var r,i,o=t(168),a=t(6444),s=a.ZP.span(r||(r=(0,o.Z)(["\n  display: block;\n  margin-top: 8px;\n  color: #04d361;\n  ","\n"])),(function(n){return"error"===n.type&&(0,a.iv)(i||(i=(0,o.Z)(["\n      color: #c53030;\n    "])))})),c=t(184),u=function(n){var e=n.status;return e?(0,c.jsx)(s,{type:null===e||void 0===e?void 0:e.type,children:(0,c.jsx)("strong",{children:null===e||void 0===e?void 0:e.message})}):(0,c.jsx)(c.Fragment,{})}},9123:function(n,e,t){t.d(e,{$:function(){return i}});var r=t(2791),i=function(n){return r.useState(n)}},5353:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,i,o,a,s,c,u,l=t(4165),d=t(2982),p=t(5861),f=t(885),x=t(2791),g=t(9880),h=t(168),v=t(6444),m=v.ZP.div(r||(r=(0,h.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  svg {\n    cursor: pointer;\n  }\n"]))),y=v.ZP.div(i||(i=(0,h.Z)(["\n  max-width: 400px;\n"]))),w=t(2999),j=(v.ZP.h1(o||(o=(0,h.Z)(["\n  font-size: 36px;\n  color: #3a3a3a;\n"]))),v.ZP.div(a||(a=(0,h.Z)(["\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 60px;\n    height: 64px;\n    border-radius: 50%;\n    margin: 0px 80px 0px 80px;\n  }\n  svg {\n    cursor: pointer;\n  }\n"])))),Z=(v.ZP.span(s||(s=(0,h.Z)(["\n  svg {\n    color: lightgrey;\n    cursor: default;\n  }\n"]))),t(3853)),b=t.p+"static/media/user.ae3a914be1e9f200b221.png",C=t(184),k=function(n){var e=n.user,t=n.handleLogout;return(0,C.jsxs)(j,{children:[(0,C.jsx)("img",{src:e.photoURL?e.photoURL:b,onError:function(n){var e=n.currentTarget;e.onerror=null,e.src=b},alt:"User photograph"}),(0,C.jsx)(Z.xqh,{size:30,onClick:function(){return t()}})]})},S=(v.ZP.h1(c||(c=(0,h.Z)(["\n  font-size: 36px;\n  color: #3a3a3a;\n"]))),v.ZP.div(u||(u=(0,h.Z)(["\n  max-width: 400px;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  padding: 0px;\n  margin: 10px 0px 0px 0px;\n\n  background-color: #eee;\n  border-radius: 5px;\n  border-left: 3px dashed lightgray;\n\n  div {\n    margin-left: 10px;\n    width: 100%;\n  }\n\n  .ContentContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    width: 100%;\n    border-radius: 5px 5px 0px 0px;\n    margin: 0;\n    background: #fff;\n\n    header {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n\n      svg {\n        margin: 10px;\n        cursor: pointer;\n      }\n    }\n    strong {\n      color: darkgray;\n      width: 100%;\n      padding: 10px;\n    }\n\n    span {\n      border: 0px;\n      padding: 10px;\n      width: 100%;\n      text-align: justify;\n\n      max-height: 200px;\n      overflow: hidden;\n    }\n\n    span:empty::before {\n      content: attr(data-placeholder);\n      color: lightgray;\n    }\n\n    span:focus {\n      outline: none;\n    }\n\n    .ActionContainer {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      margin: 4px;\n      p {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        * {\n          margin-right: 5px;\n        }\n      }\n    }\n  }\n"])))),P=function(n){var e=n.id,t=n.content,r=n.onDeleteCard,i=n.onChangeContent,o=x.useRef(null);return(0,C.jsx)(S,{children:(0,C.jsxs)("div",{className:"ContentContainer",children:[(0,C.jsxs)("header",{children:[(0,C.jsxs)("strong",{children:["id: ",e]}),(0,C.jsx)(Z.Ybf,{onClick:function(n){return r(e)}})]}),(0,C.jsx)("span",{ref:o,role:"textbox",contentEditable:!0,"data-placeholder":"What are you grateful for this day?",onBlur:function(n){return i(e,n.currentTarget.innerText)},suppressContentEditableWarning:!0,children:t})]})})},z=t(9123),D=t(6666),A=t.n(D),R=function(n){var e=n.user,t=(new Date).toISOString().split("T")[0],r=x.useState(t),i=(0,f.Z)(r,2),o=i[0],a=i[1],s=x.useState([]),c=(0,f.Z)(s,2),u=c[0],h=c[1],v=(0,z.$)(null),j=(0,f.Z)(v,2),b=j[0],S=(j[1],x.useRef(null)),D=function(n){var e=new Date(o);e.setDate(e.getDate()+n);var t=e.toISOString().split("T")[0];a(t),null!==S&&null!==S.current&&(S.current.value=t)},R=function(n){localStorage.setItem("gratify_entries",JSON.stringify(n)),h(n)};function T(){return(T=(0,p.Z)((0,l.Z)().mark((function n(e){var t,r;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t={id:A()(),content:"",date:o},r=[].concat((0,d.Z)(u),[t]),R(r);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}x.useEffect((function(){var n=localStorage.getItem("gratify_entries");try{if(n){var e=JSON.parse(n);e&&Array.isArray(e)&&h(e)}}catch(t){console.log(t)}}),[]);var E=function(n){var e=u.filter((function(e){return e.id!==n}));R(e)},I=function(n,e){var t=u.map((function(t){return t.id===n&&(t.content=e),t}));R(t)};return(0,C.jsxs)(g.we,{children:[(0,C.jsx)(k,{user:e}),(0,C.jsx)(w.Z,{status:b}),(0,C.jsxs)(m,{children:[(0,C.jsx)(Z.Ao2,{size:30,onClick:function(){return D(-1)}}),(0,C.jsx)("input",{ref:S,type:"date",defaultValue:t,onChange:function(n){a(n.target.value)}}),(0,C.jsx)(Z.Rgz,{size:30,onClick:function(){return D(1)}})]}),(0,C.jsx)(y,{children:u.map((function(n){return n.date===o?(0,C.jsx)(P,{id:n.id,content:n.content,onDeleteCard:E,onChangeContent:I}):(0,C.jsx)(C.Fragment,{})}))}),(0,C.jsx)("button",{onClick:function(n){return T.apply(this,arguments)},children:"Add New"})]})}}}]);
//# sourceMappingURL=dashboard.1975d824.chunk.js.map