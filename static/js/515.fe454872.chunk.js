"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[515],{713:function(e,t,r){var n=r(340).Z.create({baseURL:"https://api.themoviedb.org/3",language:"en-US"});n.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U2NGFiODE5MGJkZDBjOTkyMTExZjMwMGQ0Nzg3NCIsInN1YiI6IjY1OWFkODZlYzk5NWVlMDBlY2ZhYzUzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WZQy9rIvmjUGJiILYo0wHyKd1OFTLmjvuUWyJnQJ-C4",t.Z=n},812:function(e,t,r){r.d(t,{Z:function(){return s}});var n="LoadMoreBtn_button__wacIM",a=r(184),s=function(e){var t=e.fn;return(0,a.jsx)("button",{className:n,type:"button",onClick:t,children:"Load more"})}},562:function(e,t,r){r.d(t,{Z:function(){return c}});var n="Plug_plug__3hvc0",a="Plug_title__xPTDJ",s=r(184),c=function(e){var t=e.title;return(0,s.jsx)("div",{className:n,children:(0,s.jsx)("p",{className:a,children:t})})}},322:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(689),a=r(87),s=r(562),c=r(80),u="ProductCard_card__Fvveu",i="ProductCard_poster__ISWvY",o="ProductCard_img__M8sOj",l="ProductCard_title__4Ju2t",d="ProductCard_text__aThm0",h="ProductCard_rating__gS0uf",_=r(184),m=function(e){var t=e.data,r=t.id,m=t.poster_path,f=t.title,v=t.release_date,p=t.vote_average,x=(0,n.TH)(),j=new Date(v);return(0,_.jsx)("li",{className:u,children:(0,_.jsxs)(a.rU,{to:"/movies/".concat(r),state:x,children:[(0,_.jsxs)("div",{className:i,children:[m&&(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(m),alt:f,className:o}),!m&&(0,_.jsx)(s.Z,{title:f})]}),j&&(0,_.jsx)("p",{className:d,children:j.getFullYear()}),(0,_.jsx)(c.Z,{className:l,level:3,title:f}),p&&(0,_.jsx)("div",{className:h,children:p.toFixed(1)})]})})},f="ProductList_list__bk8G8",v=function(e){var t=e.data;return(0,_.jsx)("ul",{className:f,children:t.map((function(e){return(0,_.jsx)(m,{data:e},e.id)}))})}},866:function(e,t,r){r.d(t,{Z:function(){return s}});var n="Error_error__I8Vt2",a=r(184),s=function(e){var t=e.children;return(0,a.jsx)("div",{className:n,children:t})}},637:function(e,t,r){r.d(t,{Z:function(){return s}});var n="Section_section__Wxp7j",a=r(184),s=function(e){var t=e.children;return(0,a.jsx)("section",{className:n,children:t})}},80:function(e,t,r){var n=r(184);t.Z=function(e){var t=e.level,r=e.title,a=e.className,s=void 0===a?"":a,c="h".concat(t);return(0,n.jsx)(c,{className:s,children:r})}},515:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n=r(433),a=r(861),s=r(439),c=r(757),u=r.n(c),i=r(791),o=r(742),l=r(87),d=r(866),h="Searchbar_searchbar__0FWoU",_="Searchbar_descriptions__9LchU",m="Searchbar_title__jaMqM",f="Searchbar_subtitle__myeXV",v="Searchbar_form__D-hp5",p="Searchbar_input__19umw",x="Searchbar_button__nkcjk",j=r(184),Z=function(e){var t=e.submit,r=(0,l.lr)(),n=(0,s.Z)(r,2),a=n[0],c=n[1];return(0,i.useEffect)((function(){document.querySelector("input").value=a.get("query")}),[a]),(0,j.jsxs)("div",{className:h,children:[(0,j.jsxs)("div",{className:_,children:[(0,j.jsx)("p",{className:m,children:"Welcome"}),(0,j.jsx)("p",{className:f,children:"Millions of movies, TV shows and personalities. Explore now."})]}),(0,j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t();var r=e.target.elements.search.value;c({query:r})},className:v,children:[(0,j.jsx)("input",{className:p,name:"search",type:"text",autoFocus:!0,placeholder:"Search movies"}),(0,j.jsx)("button",{type:"submit",className:x,children:(0,j.jsx)("span",{children:"Search"})})]})]})},b=r(322),g=r(270),N=r(812),S=r(637),k=r(713),y=function(){var e=(0,a.Z)(u().mark((function e(t,r){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.Z)("/search/movie",{params:{query:t,page:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),w=y,I=function(){var e=(0,i.useState)(1),t=(0,s.Z)(e,2),r=t[0],c=t[1],h=(0,i.useState)([]),_=(0,s.Z)(h,2),m=_[0],f=_[1],v=(0,i.useState)(""),p=(0,s.Z)(v,2),x=p[0],k=p[1],y=(0,i.useState)(!1),I=(0,s.Z)(y,2),J=I[0],C=I[1],M=(0,i.useState)(!1),W=(0,s.Z)(M,2),L=W[0],P=W[1],U=(0,l.lr)(),F=(0,s.Z)(U,1)[0],D=(0,i.useCallback)(function(){var e=(0,a.Z)(u().mark((function e(t){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,o.Loading.circle(),k(""),e.next=7,w(t,r);case 7:a=e.sent,1===r&&f((0,n.Z)(a.results)),r>1&&f((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(a.results))})),r>=a.total_pages&&C(!0),a.total_results||P(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0.message),k(e.t0.message);case 18:return e.prev=18,o.Loading.remove(300),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[2,14,18,21]])})));return function(t){return e.apply(this,arguments)}}(),[r]);(0,i.useEffect)((function(){var e=F.get("query");D(e)}),[D,F]);return(0,j.jsxs)(j.Fragment,{children:[x&&(0,j.jsx)(d.Z,{children:x}),(0,j.jsx)(S.Z,{children:(0,j.jsxs)(g.Z,{children:[(0,j.jsx)(Z,{submit:function(){f([])}}),L&&(0,j.jsx)(d.Z,{children:"There is no results"}),0!==m.length&&(0,j.jsx)(b.Z,{data:m}),0!==m.length&&!J&&(0,j.jsx)(N.Z,{fn:function(){c((function(e){return e+1}))}})]})})]})}}}]);
//# sourceMappingURL=515.fe454872.chunk.js.map