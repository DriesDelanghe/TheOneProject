(this["webpackJsonppublic-api-project"]=this["webpackJsonppublic-api-project"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),s=n.n(a),o=(n(34),n(35),n(21)),i=n(2),u=n(45),l=n(51),j=n(1),b=function(){return Object(j.jsxs)(u.a,{fluid:!0,className:"p-2 py-3 bg-dark m-0 d-flex justify-content-between position-sticky top-0",children:[Object(j.jsx)(d,{title:"The One API",url:"/"}),Object(j.jsxs)(l.a,{className:"justify-content-end",children:[Object(j.jsx)(d,{title:"Characters",url:"/characters"}),Object(j.jsx)(d,{title:"Movies",url:"/movies"}),Object(j.jsx)(d,{title:"Books",url:"/books"})]})]})},d=function(e){var t=e.title,n=e.url;return Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(o.b,{to:n,className:"text-light header-link nav-link",children:t})})},h=function(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(u.a,{className:"shadow-lg bg-light minh-100",children:t})]})},f=function(){return Object(j.jsx)(h,{children:Object(j.jsx)("p",{children:"This is the homepage"})})},O=n(3),p=n(4),x=n(14),v=n.n(x),m=n(17),k=function(e,t,n,r){var a=Object(c.useCallback)((function(){var c=JSON.parse(localStorage.getItem(e))||t;return n?n(c):c}),[n,e,t]),s=Object(c.useState)(a),o=Object(p.a)(s,2),i=o[0],u=o[1],l=Object(c.useCallback)((function(t){var n=r?r(t):t;localStorage.setItem(e,JSON.stringify(n)),u(t)}),[u,r,e]);return Object(c.useEffect)((function(){var t=function(t){return t.key===e&&u(a())};return window.addEventListener("storage",t),function(){return window.removeEventListener("storage",t)}}),[e,a,u]),[i,l]},g=function(e,t){var n=k(t,{}),r=Object(p.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),i=Object(p.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){console.log("start use Effect");var t=function(){var t=Object(m.a)(v.a.mark((function t(){var n,c,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===a||void 0===a?void 0:a.docs)){t.next=3;break}return l(!0),t.abrupt("return");case 3:return l(!1),n={method:"GET",authorization:"Authorization: Bearer 26hqMsTSLxvOpsUW8ORK",headers:{"Content-Type":"application/json"}},console.log("fetching response"),t.next=8,fetch("https://the-one-api.dev/v2".concat(e),n);case 8:return c=t.sent,t.next=11,c.json();case 11:r=t.sent,console.log("response data: ",r),s(r),l(!0);case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().then((function(){return console.log("data has been fetched!")}))}),[e]),{data:a,loaded:u}},w=n(47),y=n(48),C=n(49),N=n(50),S="AIzaSyAMghpajjVfZaDebDhYWJc7UKfFZ6B17cQ",E=n(46),T=n(52),B=function(){return Object(j.jsx)(h,{children:Object(j.jsx)(D,{children:Object(j.jsx)(L,{})})})},I=Object(c.createContext)(),D=function(e){var t=e.children,n=g("/book","books"),r=n.data,a=n.loaded,s=Object(c.useMemo)((function(){return{books:r.docs,loaded:a}}),[r,a]);return Object(j.jsx)(I.Provider,{value:s,children:t})},L=function(){var e=Object(c.useContext)(I),t=e.books;return e.loaded&&t.map((function(e){return Object(j.jsx)(A,{book:e},e._id)}))},A=function(e){var t=e.book,n=function(e){var t=Object(c.useRef)(e.replaceAll(" ","+")),n=k("".concat(t.current,"-cover"),""),r=Object(p.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),i=Object(p.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){var n=function(){var e=Object(m.a)(v.a.mark((function e(){var n,c,r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return l(!0),e.abrupt("return");case 3:return n="https://bookcoverapi.herokuapp.com/getBookCover",c={method:"GET"},console.log("".concat(n,"?bookTitle=").concat(t.current)),e.next=8,fetch("".concat(n,"?bookTitle=").concat(t.current),c);case 8:return r=e.sent,console.log("response: ",r),e.next=12,r.json();case 12:o=e.sent,console.log("response data: ",o),s(o.bookCoverUrl),l(!0);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n().then((function(){return console.log("fetching cover for ".concat(e," complete"))}))}),[]),{cover:a,loaded:u}}(t.name),r=n.cover,a=function(e){var t=Object(c.useRef)(e.replaceAll(" ","+")),n=k("".concat(t.current,"-data"),{}),r=Object(p.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),i=Object(p.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(m.a)(v.a.mark((function e(){var n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===a||void 0===a?void 0:a.title)){e.next=3;break}return l(!0),e.abrupt("return");case 3:return l(!1),console.log("KEY: ",S),n="q=".concat(t.current,"&orderBy=relevance&key=")+S,e.next=9,fetch("https://www.googleapis.com/books/v1/volumes?"+n);case 9:return c=e.sent,e.next=12,c.json();case 12:r=e.sent,s(r.items[0].volumeInfo),l(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(){return console.log("fetched data book from google api")}))}),[]),{bookData:a,loaded:u}}(t.name),s=a.bookData,o=g("/book/".concat(t._id,"/chapter"),"".concat(t.name,"-chapters")).data,i=k("".concat(t.name,"-show-chapters"),!1),u=Object(p.a)(i,2),l=u[0],b=u[1];return Object(j.jsx)(E.a,{children:Object(j.jsx)(T.a,{addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:"fade",children:l?Object(j.jsx)(M,{chapters:o.docs,setShowChapters:b}):Object(j.jsx)(J,{book:Object(O.a)(Object(O.a)({},t),{},{cover:r}),bookData:s,setShowChapters:b})},l?"cover":"chapters")})},F=function(e){var t=e.children;return Object(j.jsx)(u.a,{className:"mx-3 my-5 shadow-sm rounded-2 w-auto border d-flex justify-content-start p-3 bg-light",children:Object(j.jsx)(w.a,{className:"w-100",children:t})})},J=function(e){var t,n=e.book,c=e.bookData,r=e.setShowChapters;return Object(j.jsxs)(F,{children:[Object(j.jsx)(y.a,{xs:10,md:3,className:"py-3 mx-auto",children:Object(j.jsx)(C.a,{fluid:!0,src:n.cover})}),Object(j.jsxs)(y.a,{xs:12,md:9,className:"d-flex justify-content-start gap-3 flex-column pb-3",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"display-6 fs-4 m-0",children:n.name}),Object(j.jsx)("p",{className:"text-muted lead fs-6 m-0",children:null===c||void 0===c||null===(t=c.authors)||void 0===t?void 0:t[0]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:c.description}),Object(j.jsx)(N.a,{variant:"link",className:"me-0 ms-auto",onClick:function(){return r(!0)},children:"See Chapters"})]})]})]})},M=function(e){var t=e.chapters,n=e.setShowChapters;return Object(j.jsx)(F,{children:Object(j.jsxs)(y.a,{xs:10,className:"d-flex justify-content-between",children:[Object(j.jsx)("div",{children:Object(j.jsx)(N.a,{variant:"link",onClick:function(){return n(!1)},children:"Back To Overview"})}),Object(j.jsxs)(y.a,{xs:8,children:[Object(j.jsx)("h3",{className:"display-6 fs-4 mb-3",children:"Chapters:"}),t.map((function(e){return Object(j.jsx)("p",{className:"fs-6 lead fw-normal my-0 ms-3",children:e.chapterName},e.id)}))]})]})})},P=function(){return Object(j.jsx)(h,{children:Object(j.jsx)("p",{children:"This is the character page"})})},z=function(){return Object(j.jsx)(h,{children:Object(j.jsx)("p",{children:"this is the movie page"})})};var K=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{index:!0,element:Object(j.jsx)(f,{})}),Object(j.jsx)(i.a,{path:"books",element:Object(j.jsx)(B,{})}),Object(j.jsx)(i.a,{path:"characters",element:Object(j.jsx)(P,{})}),Object(j.jsx)(i.a,{path:"movies",element:Object(j.jsx)(z,{})})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root")),R()}},[[43,1,2]]]);
//# sourceMappingURL=main.9e367d51.chunk.js.map