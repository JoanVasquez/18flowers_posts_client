(this.webpackJsonpposts_client=this.webpackJsonpposts_client||[]).push([[0],{37:function(t,e,a){},65:function(t,e,a){"use strict";a.r(e);var n,c,s=a(0),r=a(1),i=a.n(r),o=a(12),l=a.n(o),d=(a(37),a(7)),u=a(5),b=a(11),j=a.n(b),p=a(19),O=a(14),h=a(15),f=a(20),g=a.n(f),m=function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return function(){for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];if(a.length===n.length){var s={type:t};return a.length&&n.length&&a.forEach((function(t,e){s[a[e]]=n[e]})),s}}},x="[POSTS] LOADING POSTS",v="[POSTS] GET POSTS",y="[POSTS] UPDATE POST",N="[POSTS] GET POSTS ERROR",_=new(function(){function t(){Object(O.a)(this,t),this.url="",this.url="https://us-central1-flowers-3e335.cloudfunctions.net/default"}return Object(h.a)(t,[{key:"list",value:function(){var t=Object(p.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("".concat(this.url,"/api/post"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),{data:t.t0.response.statusText,status:t.t0.response.status};case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(p.a)(j.a.mark((function t(e){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.put("".concat(this.url,"/api/post"),e);case 3:return a=t.sent,t.abrupt("return",a.data);case 7:throw t.prev=7,t.t0=t.catch(0),{data:t.t0.response.statusText,status:t.t0.response.status};case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}]),t}()),D="[PAGINATION] SET PAGINATION",S="[PAGINATION] RESET PAGINATION",T=a(8),k=a(10),w=a.n(k),E=new(function(){function t(){Object(O.a)(this,t)}return Object(h.a)(t,[{key:"setPagination",value:function(t,e){var a=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=new w.a(e,5).build(a.length,t),c=Object(T.a)(Array(n.last_page+1-n.first_page).keys()).map((function(t){return n.first_page+t}));return{paginatedData:a.slice(n.first_result,n.last_result+1),paginatorData:n,pages:c}}(t,5,e);return{pages:a.pages,paginatedData:a.paginatedData,paginatorData:a.paginatorData,totalData:e}}}]),t}()),P=function(t,e){var a=E.setPagination(t,e);return m(D,"payload")(a)},I=i.a.memo((function(t){var e=t.pages,a=t.onPagination,n=t.paginatorData;return Object(s.jsxs)("div",{className:"pagination mt-3",children:[Object(s.jsx)("a",{href:"/#",className:"".concat(n.has_previous_page?"":"disable"),onClick:function(t){t.preventDefault(),a(n.first_page)},children:"First"}),Object(s.jsx)("a",{href:"/#",className:"".concat(n.has_previous_page?"":"disable"),onClick:function(t){t.preventDefault(),a(n.first_page)},children:"\xab"}),e.map((function(t,e){return Object(s.jsx)("a",{href:"/#",className:"".concat(n.has_previous_page||n.has_next_page?"":"disable"," ").concat(n.current_page===t?"active":""),onClick:function(e){e.preventDefault(),a(t)},children:t},e)})),Object(s.jsx)("a",{href:"/#",className:" ".concat(n.has_next_page?"":"disable"),onClick:function(t){t.preventDefault(),a(n.next_page)},children:"\xbb"}),Object(s.jsx)("a",{href:"/#",className:"".concat(n.has_next_page?"":"disable"),onClick:function(t){t.preventDefault(),a(n.last_page)},children:"Last"})]})})),C=function(t){var e=t.post,a=Object(r.useState)(""),n=Object(d.a)(a,2),c=n[0],i=n[1],o=Object(r.useState)(""),l=Object(d.a)(o,2),b=l[0],j=l[1],p=Object(r.useState)(!1),O=Object(d.a)(p,2),h=O[0],f=O[1],g=Object(u.b)();Object(r.useEffect)((function(){i(e.title),j(e.body)}),[e,i,j]);return Object(s.jsxs)("form",{children:[h?Object(s.jsx)("div",{className:"alert alert-warning",children:"Title or body cannot be empty"}):null,Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(s.jsx)("input",{type:"email",className:"form-control",id:"title",onChange:function(t){return i(t.target.value)},value:c})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{htmlFor:"body",className:"form-label",children:"Body"}),Object(s.jsx)("textarea",{className:"form-control",id:"body",rows:6,onChange:function(t){return j(t.target.value)},value:b})]}),Object(s.jsx)("button",{onClick:function(){c.length&&b.length?(f(!1),e.title=c,e.body=b,g(function(t){return function(e){e(m(x,"payload")(!0)),_.update(t).then((function(t){e(m(y,"payload")(t)),e(m(x,"payload")(!1))})).catch((function(t){e(m(N,"payload")(t)),e(m(x,"payload")(!1))}))}}(e))):f(!0)},"data-bs-dismiss":"modal",className:"btn btn-primary",children:"Send"})]})},A=function(t){var e=t.title,a=t.children;return Object(s.jsx)("div",{className:"modal-dialog",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:e}),Object(s.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(s.jsx)("div",{className:"modal-body",children:a}),Object(s.jsx)("div",{className:"modal-footer",children:Object(s.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})},L=function(t){var e=t.posts,a=Object(r.useState)({id:0,userId:0,title:"",body:""}),n=Object(d.a)(a,2),c=n[0],i=n[1];return Object(s.jsxs)("div",{className:"table-responsive",children:[Object(s.jsxs)("table",{className:"table align-middle",children:[Object(s.jsx)("thead",{className:"text-center table-dark",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",className:"col-1",children:"ID"}),Object(s.jsx)("th",{scope:"col",className:"col-1",children:"USER ID"}),Object(s.jsx)("th",{scope:"col",className:"col-4",children:"TITLE"}),Object(s.jsx)("th",{scope:"col",className:"col-4",children:"BODY"}),Object(s.jsx)("th",{scope:"col",className:"2",children:"ACTIONS"})]})}),Object(s.jsx)("tbody",{className:"text-center",children:e.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:t.id}),Object(s.jsx)("th",{children:t.userId}),Object(s.jsx)("td",{children:t.title}),Object(s.jsx)("td",{children:t.body}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",onClick:function(){return i(t)},children:"Edit"})})]})}))})]}),Object(s.jsx)("div",{className:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",children:Object(s.jsx)(A,{title:"Edit Post",children:Object(s.jsx)(C,{post:c})})})]})},R=a.p+"static/media/loading.600cf2d1.svg",B=function(t){var e=t.onFilter;return Object(s.jsx)("input",{className:"form-control mb-3",type:"text",placeholder:"Search any post by the title",onChange:function(t){e("title",t.target.value)}})},G=function(){var t=Object(u.c)((function(t){return t.postReducer.posts})),e=Object(u.c)((function(t){return t.postReducer.isLoading})),a=Object(u.c)((function(t){return t.postReducer.error})),n=Object(u.c)((function(t){return t.paginationReducer.paginator})),c=Object(u.b)(),i=Object(r.useState)(1),o=Object(d.a)(i,2),l=o[0],b=o[1];Object(r.useEffect)((function(){c((function(t){t(m(x,"payload")(!0)),_.list().then((function(e){t(m(v,"payload")(e.result)),t(m(x,"payload")(!1))})).catch((function(e){t(m(N,"payload")(e)),t(m(x,"payload")(!1))}))}))}),[c]),Object(r.useEffect)((function(){c(P(1,t))}),[t,c]);var j=Object(r.useCallback)((function(e){c(P(e,t)),b(e)}),[c,t]),p=Object(r.useCallback)((function(e,a){if(a){var n=function(t,e,a,n){var c=new Set;n.forEach((function(a){a[e].toLowerCase().includes(t.toLowerCase())&&c.add(a)}));var s=Array.from(c),r=new w.a(a,7).build(s.length,1),i=Object(T.a)(Array(r.last_page+1-r.first_page).keys()).map((function(t){return r.first_page+t}));return{paginatedData:s.slice(r.first_result,r.last_result+1),paginatorData:r,pages:i,filteredData:s}}(a,e,5,t);c(P(1,n.filteredData))}else j(t)}),[t,l,c,j]);return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-12 bg-white mt-5 p-4",children:[Object(s.jsx)("h1",{children:"POSTS APLICATION"}),Object(s.jsx)("hr",{}),Object(s.jsx)(B,{onFilter:p}),a.data?Object(s.jsx)("div",{className:"alert alert-danger",children:a.data}):null,e?Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("img",{src:R})}):null,Object(s.jsx)(L,{posts:n.paginatedData}),Object(s.jsx)(I,{pages:n.pages,paginatorData:n.paginatorData,onPagination:j})]})})})},F=a(6),U=a(31),J=a(4),X=a(3),M=function(t,e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return e.hasOwnProperty(n.type)?e[n.type](a,n):a}},V=M({isLoading:!1,posts:[],isUpdated:!1,error:{}},(n={},Object(J.a)(n,v,(function(t,e){return Object(X.a)(Object(X.a)({},t),{},{posts:e.payload})})),Object(J.a)(n,y,(function(t,e){var a=t.posts.findIndex((function(t){return t.id===e.payload.result.id})),n=Object(T.a)(t.posts);return n[a]=e.payload.result,Object(X.a)(Object(X.a)({},t),{},{isUpdated:e.payload.success,posts:n})})),Object(J.a)(n,x,(function(t,e){return Object(X.a)(Object(X.a)({},t),{},{isLoading:e.payload})})),Object(J.a)(n,N,(function(t,e){return Object(X.a)(Object(X.a)({},t),{},{error:e.payload})})),n)),Y=M({paginator:{pages:[],paginatorData:{},paginatedData:[],totalData:[]}},(c={},Object(J.a)(c,D,(function(t,e){return Object(X.a)(Object(X.a)({},t),{},{paginator:e.payload})})),Object(J.a)(c,S,(function(t,e){return{paginator:{pages:[],paginatorData:{},paginatedData:[],totalData:[]}}})),c)),q=Object(F.c)({postReducer:V,paginationReducer:Y}),z=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,Object(F.e)(q,Object(F.a)(U.a)));l.a.render(Object(s.jsx)(u.a,{store:z,children:Object(s.jsx)(G,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e5b3a4ce.chunk.js.map