"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[578],{578:function(e,s,n){n.r(s),n.d(s,{default:function(){return Q}});var a=n(861),r=n(439),t=n(757),c=n.n(t),i=n(791),l=n(689),o=n(742),d=n(10),u=n(87),_=n(700),v="Movie_wrap__3Qyy+",h="Movie_card__KTxm8",m="Movie_bg__zkVSQ",x="Movie_content__TZWZo",p="Movie_img__WUHrV",j="Movie_name__+qs7c",f="Movie_info__SbDWC",g="Movie_item__pbGQr",N="Movie_genres__y-BLu",b="Movie_genre__3GRFG",k="Movie_subtitle__VOgv7",M="Movie_text__WOUue",w="Movie_score__wlM4F",Z="Movie_nav__fMGO4",G="Movie_link__eChTL",C="GoBackBtn_button__9TCJQ",O=n(184),y=function(e){var s=e.handlerGoBack;return(0,O.jsx)("button",{className:C,onClick:s,type:"button",children:"Go back"})},L=function(e){var s=e.data,n=s.title,a=s.poster_path,r=s.vote_average,t=s.overview,c=s.genres,i=s.release_date,o=s.runtime,d=s.backdrop_path,C=(0,l.TH)().state,L=null!==C&&void 0!==C?C:"/",B=(0,l.s0)(),F=new Date(i),T=Number.parseInt(o/60),Q=Number.parseInt(o-60*T);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(y,{handlerGoBack:function(){B(L)}}),(0,O.jsxs)("div",{className:v,children:[(0,O.jsx)("div",{className:h,children:(0,O.jsx)(_.Z,{children:(0,O.jsxs)("div",{className:x,children:[(0,O.jsx)("div",{children:a&&(0,O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:n,className:p})}),(0,O.jsxs)("div",{children:[(0,O.jsx)("h3",{className:j,children:n}),(0,O.jsxs)("div",{className:f,children:[i&&(0,O.jsx)("div",{className:g,children:F.getFullYear()}),0!==c.length&&(0,O.jsx)("div",{className:g,children:(0,O.jsx)("p",{className:N,children:c.map((function(e){return(0,O.jsx)("span",{className:b,children:e.name},e.id)}))})}),o&&(0,O.jsx)("div",{className:g,children:(0,O.jsxs)("p",{children:[(0,O.jsx)("span",{children:0!==T&&"".concat(T," h")})," ",(0,O.jsx)("span",{children:Q&&"".concat(Q," min")})]})})]}),(0,O.jsx)("p",{className:w,children:r.toFixed(1)}),(0,O.jsx)("p",{className:k,children:"Overview"}),(0,O.jsx)("p",{className:M,children:t}),(0,O.jsx)("nav",{children:(0,O.jsxs)("ul",{className:Z,children:[(0,O.jsx)("li",{className:G,children:(0,O.jsx)(u.OL,{to:"credits",state:C,children:"Cast"})}),(0,O.jsx)("li",{className:G,children:(0,O.jsx)(u.OL,{to:"reviews",state:C,children:"Reviews"})})]})})]})]})})}),d&&(0,O.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(d),alt:n,className:m})]}),(0,O.jsx)(_.Z,{children:(0,O.jsx)(l.j3,{})})]})},B=n(111),F=n(472),T=function(){var e=(0,a.Z)(c().mark((function e(s){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.Z)("/movie/".concat(s));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),Q=function(){var e=(0,l.UO)().movieId,s=(0,i.useState)(null),n=(0,r.Z)(s,2),t=n[0],u=n[1],_=(0,i.useState)(""),v=(0,r.Z)(_,2),h=v[0],m=v[1];return(0,i.useEffect)((function(){var s=function(){var s=(0,a.Z)(c().mark((function s(){var n;return c().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,o.Loading.circle(),m(""),s.next=5,T(e);case 5:n=s.sent,u(n),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(0),console.log(s.t0.message),m(s.t0.message);case 13:return s.prev=13,o.Loading.remove(300),s.finish(13);case 16:case"end":return s.stop()}}),s,null,[[0,9,13,16]])})));return function(){return s.apply(this,arguments)}}();s()}),[e]),(0,O.jsxs)(B.Z,{children:[h&&(0,O.jsx)(d.Z,{children:h}),t&&(0,O.jsx)(L,{data:t})]})}}}]);
//# sourceMappingURL=578.40ea45a0.chunk.js.map