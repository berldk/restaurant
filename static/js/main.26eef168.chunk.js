(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,a,t){e.exports=t(42)},36:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(27),c=t.n(r),m=(t(36),t(1)),i=t(2),s=t(4),o=t(3),u=t(14),E=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-inverse"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("img",{src:"images/logo.png",style:{width:"100%"},alt:""}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},l.a.createElement("ul",{className:"nav navbar-nav nav-links"},l.a.createElement(u.b,{to:"/alamaison"},l.a.createElement("li",null,"Home")),l.a.createElement(u.b,{to:"/alamaison/story"},l.a.createElement("li",null,"Our story")),l.a.createElement(u.b,{to:"/alamaison/contact"},l.a.createElement("li",null,"Contact")),l.a.createElement(u.b,{to:"/alamaison/reservation"},l.a.createElement("li",null,"Reservation"))))))}}]),t}(n.Component),d=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"container-fluid myfooter"},l.a.createElement("p",null,"\xa9 2020 Alamaison"))}}]),t}(n.Component),p=t(30),v=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Table reservation"),l.a.createElement(p.a,{initialValues:{people:"",email:"",date:"",time:""},validate:function(e){var a={};return e.people||(a.people="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),400)}},(function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,c=e.handleBlur,m=e.handleSubmit,i=e.isSubmitting;return l.a.createElement("form",{onSubmit:m},"Number of people",l.a.createElement("br",null),l.a.createElement("input",{type:"number",name:"people",onChange:r,onBlur:c,value:a.people}),t.people&&n.people&&t.people,l.a.createElement("br",null),"Email",l.a.createElement("br",null),l.a.createElement("input",{type:"email",name:"email",onChange:r,onBlur:c,value:a.email}),t.email&&n.email&&t.email,l.a.createElement("br",null),"Date",l.a.createElement("br",null),l.a.createElement("input",{type:"date",name:"date",onChange:r,onBlur:c,value:a.date}),t.date&&n.date&&t.date,l.a.createElement("br",null),"Time",l.a.createElement("br",null),l.a.createElement("input",{type:"time",name:"time",onChange:r,onBlur:c,value:a.time}),t.time&&n.time&&t.time,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",disabled:i},"Submit"))})))},b=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"CONTACT PAGE")}}]),t}(n.Component),h=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"STORY PAGE")}}]),t}(n.Component),f=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"jumbotron"})}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",null,"Bienvenu alamaison"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),l.a.createElement("div",{className:"col-sm-4 contact"},l.a.createElement("h2",null,"Contact"),l.a.createElement("div",null,"1234 Rue Street, Columbus"),l.a.createElement("div",null,"OH, 43215"))))}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"exploremenu"},l.a.createElement("div",{className:"container-fluid bg-3 text-center"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Explore our menu")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/shareable.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"shareables")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/salad.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Soup & Salads")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/main.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Main dishes")))),l.a.createElement("br",null)),l.a.createElement("div",{className:"exploremenu-2"},l.a.createElement("div",{className:"container-fluid bg-3 text-center"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/desserts.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Desserts")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/drinks.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Drinks")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/specials.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Specials")))),l.a.createElement("br",null)))}}]),t}(n.Component),O=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid bg-3"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("h2",null,"Our favorites")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/favorite1.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("img",{src:"images/favorite2.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h4",null,"Macaroni au boeuf"),l.a.createElement("em",null,"Pipe rigate served with beef cooked in spicy tomato sauce")),l.a.createElement("div",{className:"col-sm-6  text-center"},"$17")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h4",null,"Riz Creole aux champignons"),l.a.createElement("em",null,"Rice cooked with fried vermicelli served with saute mushrooms")),l.a.createElement("div",{className:"col-sm-6  text-center"},"$13")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h4",null,"Riz Creole aux champignons"),l.a.createElement("em",null,"Rice cooked with fried vermicelli served with saute mushrooms")),l.a.createElement("div",{className:"col-sm-6  text-center"},"$13"))))),l.a.createElement("br",null)))}}]),t}(n.Component),y=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(N,null),l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),j=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"DAILY MENU PAGE")}}]),t}(n.Component),w=t(5),C=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/alamaison",exact:!0,component:y}),l.a.createElement(w.a,{path:"/alamaison/story",component:h}),l.a.createElement(w.a,{path:"/alamaison/contact",component:b}),l.a.createElement(w.a,{path:"/alamaison/reservation",component:v}),l.a.createElement(w.a,{path:"/alamaison/menu",component:j})),l.a.createElement(d,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.26eef168.chunk.js.map