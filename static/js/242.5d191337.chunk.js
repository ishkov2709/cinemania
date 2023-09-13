"use strict";(self.webpackChunkcinemania=self.webpackChunkcinemania||[]).push([[242],{311:function(n,i,e){e.d(i,{Z:function(){return D}});var t,a,r,d,o,s,p,l=e(168),c=e(3081),h=c.Z.ul(t||(t=(0,l.Z)(["\n  width: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 24px;\n  column-gap: 20px;\n\n  margin: 0 auto 36px auto;\n\n  @media screen and (max-width: 389px) {\n    & {\n      justify-content: center;\n    }\n  }\n\n  @media screen and (min-width: 744px) {\n    & {\n      column-gap: 48px;\n      row-gap: 24px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      column-gap: 24px;\n      row-gap: 50px;\n\n      margin: 0 auto 51px auto;\n    }\n  }\n"]))),x=e(3433),u=e(9439),m=e(8820),f=e(2791),g=e(1087),w=c.Z.li(a||(a=(0,l.Z)(["\n  position: relative;\n\n  border-radius: 8px;\n"]))),v=(0,c.Z)(g.rU)(r||(r=(0,l.Z)(["\n  display: block;\n\n  position: relative;\n  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(",");\n  background-size: cover;\n\n  color: inherit;\n\n  width: 161px;\n  height: 221px;\n\n  border: 1px solid #828282;\n  border-radius: inherit;\n\n  overflow: hidden;\n\n  @media screen and (min-width: 744px) {\n    width: 272px;\n    height: 400px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 212px;\n    height: 300px;\n  }\n"])),(function(n){return n.urlbg})),b=c.Z.div(d||(d=(0,l.Z)(["\n  position: relative;\n\n  width: 100%;\n  height: 100%;\n\n  border-radius: inherit;\n\n  overflow: hidden;\n\n  &::before {\n    content: '';\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    background-color: ",";\n  }\n\n  transform: scale(1);\n\n  transition: transform 250ms ease-in-out 500ms;\n\n  .link-details:hover & {\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.loadImg?"rgba(0, 0, 0, 0.5)":"none"})),Z=c.Z.img(o||(o=(0,l.Z)(["\n  display: ",";\n"])),(function(n){return n.loadImg?"block":"none"})),j=c.Z.button(s||(s=(0,l.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n\n  width: 24px;\n  height: 24px;\n\n  padding: 0;\n\n  background: transparent;\n\n  border: none;\n\n  & .add {\n    color: #ffffff;\n\n    transition: color 250ms ease-in;\n  }\n\n  & .delete {\n    color: #881313;\n\n    transition: color 250ms ease-in;\n  }\n\n  &:hover .add,\n  &:hover .delete,\n  &:focus .add,\n  &:focus .delete {\n    color: rgba(136, 19, 19, 0.7);\n  }\n\n  @media screen and (min-width: 744px) {\n    & {\n      width: 40px;\n      height: 40px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      width: 30px;\n      height: 30px;\n    }\n  }\n"]))),k=c.Z.p(p||(p=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 100px;\n\n  font-size: 20px;\n\n  text-align: center;\n\n  @media screen and (min-width: 744px) {\n    & {\n      font-size: 28px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      font-size: 22px;\n    }\n  }\n"]))),y=e(7689),z=e(5442),I=e(9434),_=e(9488),C=e(4908),N=e.p+"static/media/img_poster.11eb114ab4cc8dafed7a.jpg",L=e(184),q=function(n){var i=n.id,e=n.poster_path,t=n.title,a=(0,I.v9)((function(n){return n.auth.isLoggedIn})),r=(0,I.v9)((function(n){return n.auth.favFilms})),d=(0,I.v9)((function(n){return n.auth.userId})),o=(0,I.v9)((function(n){return n.auth.email})),s=(0,I.I0)(),p=(0,y.TH)(),l=(0,f.useState)(!1),c=(0,u.Z)(l,2),h=c[0],g=c[1];return(0,L.jsx)(w,{children:(0,L.jsxs)(v,{className:"link-details",to:"/catalog/".concat(i),state:{from:p},children:[(0,L.jsxs)(b,{loadImg:h,children:[!h&&(0,L.jsx)(z.Z,{variant:"rectangular",animation:"wave",sx:{bgcolor:"rgba(121, 121, 121, 0.7)",width:"inherit",height:"inherit"}}),(0,L.jsx)(Z,{src:e?"".concat("https://image.tmdb.org/t/p/original").concat(e):N,alt:t,onLoad:function(){g(!0)},loadImg:h})]}),a&&!(null!==r&&void 0!==r&&r.find((function(n){return n.id===i})))&&(0,L.jsx)(j,{type:"button",onClick:function(n){n.preventDefault(),s((0,_.Tl)({id:i,poster_path:e,title:t})),"guest"!==o&&s((0,C.q)({userId:d,email:o,films:[].concat((0,x.Z)(r),[{id:i,poster_path:e,title:t}])}))},children:(0,L.jsx)(m.lo,{className:"add",style:{width:"inherit",height:"inherit"}})}),a&&(null===r||void 0===r?void 0:r.find((function(n){return n.id===i})))&&(0,L.jsx)(j,{type:"button",onClick:function(n){n.preventDefault(),s((0,_.ro)(i)),"guest"!==o&&s((0,C.q)({userId:d,email:o,films:(0,x.Z)(r.filter((function(n){return n.id!==i})))}))},children:(0,L.jsx)(m.M_L,{className:"delete",style:{width:"inherit",height:"inherit"}})}),(0,L.jsx)(k,{children:t})]})})},D=function(n){var i=n.films;return(0,L.jsx)(h,{children:i.map((function(n){var i=n.id,e=n.poster_path,t=n.title;return(0,L.jsx)(q,{id:i,poster_path:e,title:t},i)}))})}},9759:function(n,i,e){e.r(i),e.d(i,{default:function(){return Z}});var t,a,r,d,o,s,p=e(9434),l=e(168),c=e(3081),h=c.Z.section(t||(t=(0,l.Z)([""]))),x=c.Z.div(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media screen and (max-width: 743px) {\n    & {\n      max-width: 390px;\n    }\n  }\n\n  @media screen and (min-width: 744px) {\n    & {\n      gap: 140px;\n      max-width: none;\n      width: 744px;\n\n      padding: 0 74px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      gap: 90px;\n      width: 1440px;\n\n      padding: 0 142px;\n    }\n  }\n"]))),u=c.Z.h2(r||(r=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n\n  text-align: center;\n\n  margin-bottom: 46px;\n\n  @media screen and (min-width: 744px) {\n    & {\n      font-size: 40px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    & {\n      font-size: 32px;\n\n      margin-bottom: 0;\n    }\n  }\n"]))),m=c.Z.div(d||(d=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 18px;\n\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 744px) {\n    & {\n      gap: 26px;\n\n      margin-bottom: 100px;\n    }\n  }\n"]))),f=c.Z.div(o||(o=(0,l.Z)(["\n  width: 72px;\n  height: 72px;\n\n  @media screen and (min-width: 744px) {\n    & {\n      width: 96px;\n      height: 96px;\n    }\n  }\n"]))),g=c.Z.p(s||(s=(0,l.Z)(["\n  font-size: 18px;\n\n  @media screen and (min-width: 744px) {\n    & {\n      font-size: 26px;\n    }\n  }\n"]))),w=e(311),v=e(1578),b=e(184),Z=function(){var n=(0,p.v9)((function(n){return n.auth.favFilms}));return(0,b.jsx)(h,{children:(0,b.jsxs)(x,{className:"container",children:[(0,b.jsx)(u,{children:"\u0424\u0456\u043b\u044c\u043c\u0438 \u044f\u043a\u0456 \u0432\u0430\u043c \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u043b\u0438\u0441\u044f"}),(null===n||void 0===n?void 0:n.length)>0&&(0,b.jsx)(w.Z,{films:n}),!(null!==n&&void 0!==n&&n.length)&&(0,b.jsxs)(m,{children:[(0,b.jsx)(f,{children:(0,b.jsx)(v.gsC,{color:"#fff",style:{width:"inherit",height:"inherit"}})}),(0,b.jsx)(g,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0444\u0456\u043b\u044c\u043c\u0456\u0432 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439..."})]})]})})}}}]);
//# sourceMappingURL=242.5d191337.chunk.js.map