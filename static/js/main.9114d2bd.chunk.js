(this.webpackJsonparaotz=this.webpackJsonparaotz||[]).push([[0],{33:function(n,e,t){n.exports=t(45)},38:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(25),o=t.n(i),c=(t(38),t(15)),l=t(26),m=t(17),u=t(3),d=t(1),h=t(16),s=t(10);function f(){var n=Object(u.a)(["\n  display: inline-block;\n  position: relative;\n  z-index: 100;\n  a {\n    font-size: 1.3rem;\n    text-decoration: none;\n    padding: 0.5rem 3rem;\n    display: block;\n\n    -webkit-transition: all 0.2s ease-in-out 0s;\n    -moz-transition: all 0.2s ease-in-out 0s;\n    -o-transition: all 0.2s ease-in-out 0s;\n    -ms-transition: all 0.2s ease-in-out 0s;\n    transition: all 0.2s ease-in-out 0s;\n    color: ",";\n    background: ",";\n    &.active,\n    &:hover {\n      color: black;\n      background: white;\n    }\n    @media (max-width: 768px) {\n      font-size: 0.6rem;\n      font-weight: 200;\n      padding: 0.5rem 0.8rem;\n    }\n    @media (min-width: 1920px) {\n      font-size: 3rem;\n      padding: 0.5rem 8rem;\n    }\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: block;\n  padding: 0;\n  margin: 0 auto;\n"]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n  margin-top: 5rem;\n  text-align: center;\n  @media (max-width: 768px) {\n    margin-top: 2rem;\n  }\n  @media (min-width: 1920px) {\n    margin-top: 15rem;\n  }\n"]);return g=function(){return n},n}var b=d.a.div(g()),x=d.a.ul(p()),v=d.a.li(f(),(function(n){return"active"===n.className?"black":"white"}),(function(n){return"active"===n.className?"white":""})),w=function(n){var e=n.items;return r.a.createElement(b,null,r.a.createElement(x,null,e.map((function(n,e){return r.a.createElement(v,{key:e},r.a.createElement(h.b,{to:n.path,activeClassName:"active",exact:!0},n.text))}))))},E=t(8),k=t(21),z=t.n(k),j=t(31),O=function(n,e){return"https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=".concat("987cce2bcde185c36a6bec65b4bc9014","&extras=").concat(e,"&format=json&nojsoncallback=true&method=flickr.photosets.getPhotos&photoset_id=").concat(n)},y={url:"url_n",width:"width_n",height:"height_n"},C={url:"url_l",width:"width_l",height:"height_l"};function A(){return(A=Object(j.a)(z.a.mark((function n(e,t){var a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(O(e,t));case 2:if(!(a=n.sent)||!a.ok){n.next=9;break}return n.next=6,a.json();case 6:n.t0=n.sent.photoset.photo,n.next=10;break;case 9:n.t0={Error:"Error while reading photoset=".concat(e)};case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var _={getPhotos:function(n,e){return A.apply(this,arguments)}},S=t(32),N=y,P=C,F="".concat(N.url,",").concat(P.url),R=function(n){var e=n.photosetId,t=n.photos,i=void 0===t?[]:t,o=n.setPhotos,c=n.configurations;Object(a.useEffect)((function(){i&&i.length||_.getPhotos(e,F).then((function(n){return o(e,l(n))}),(function(n){return console.log("error ="+n)}))}));var l=function(n){return n.map((function(n){return{src:n[N.url],width:n[N.width],height:n[N.height],bigSrc:n[P.url]}}))};return r.a.createElement(S.a,{photos:i,configurations:c})};function U(){var n=Object(u.a)(['\n  &:hover {\n    cursor: pointer;\n  }\n  :not(:first-child):before {\n    content: " | ";\n  }\n  list-style-type: none;\n  display: inline;\n  opacity: ',";\n  font-weight: ",";\n"]);return U=function(){return n},n}function I(){var n=Object(u.a)(["\n  margin: 0;\n  padding: 0;\n  text-align: right;\n"]);return I=function(){return n},n}function J(){var n=Object(u.a)(["\n  width: 50%;\n  margin: 0 auto;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  font-size: 0.8rem;\n  @media (max-width: 768px) {\n    font-size: 0.7rem;\n    width: 80%;\n    height: 1.5rem;\n    line-height: 1.5rem;\n  }\n\n  @media (max-width: 768px) {\n    width: 70%;\n  }\n  @media (min-width: 1920px) {\n    width: 60%;\n    font-size: 2.5rem;\n    height: 4.4rem;\n    line-height: 4.4rem;\n  }\n"]);return J=function(){return n},n}var W=d.a.div(J()),B=d.a.ul(I()),L=d.a.li(U(),(function(n){return n.active?"1":"0.8"}),(function(n){return n.active?"600":"unset"})),T=function(n){var e=n.language,t=n.handleLanguageClick;return r.a.createElement(W,null,r.a.createElement(B,null,r.a.createElement(L,{active:"EU"===e,title:"euskara",onClick:function(){return t("EU")}},"EU"),r.a.createElement(L,{active:"ES"===e,title:"castellano",onClick:function(){return t("ES")}},"ES"),r.a.createElement(L,{active:"EN"===e,title:"english",onClick:function(){return t("EN")}},"EN"),r.a.createElement(L,{active:"FR"===e,title:"fran\xe7ais",onClick:function(){return t("FR")}},"FR"),r.a.createElement(L,{active:"CA"===e,title:"catal\xe0",onClick:function(){return t("CA")}},"CA")))};T.defaultProps={language:"EU"};var q=T;function D(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: white;\n"]);return D=function(){return n},n}function H(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  line-height: 2rem;\n  @media (max-width: 768px) {\n    font-size: 0.6rem;\n    flex-direction: column;\n    line-height: 1.2rem;\n  }\n  @media (min-width: 1920px) {\n    font-size: 3rem;\n    line-height: 11.5rem;\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  @media (max-width: 768px) {\n    font-size: 0.85rem;\n    margin-bottom: 0.5rem;\n  }\n  @media (min-width: 1920px) {\n    font-size: 3rem;\n    margin-bottom: 3rem;\n    font-weight: 600;\n  }\n"]);return K=function(){return n},n}function M(){var n=Object(u.a)(["\n  background: #808080;\n  border-top: 1px solid black;\n  padding: 1.5rem 2rem;\n  text-align: center;\n  @media (max-width: 768px) {\n    padding: 1rem 0;\n  }\n  @media (min-width: 1920px) {\n    padding: 6rem 6rem;\n  }\n"]);return M=function(){return n},n}function $(){var n=Object(u.a)(['\n  text-align: left;\n  font-family: "Raleway", sans-serif;\n  font-size: 1rem;\n  p {\n    margin-bottom: 1.5rem;\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  span {\n    margin-bottom: 2rem;\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    font-size: 0.6rem;\n    p {\n      margin-bottom: 1.1rem;\n      margin-left: 0.9rem;\n      margin-right: 0.9rem;\n    }\n  }\n  @media (min-width: 1920px) {\n    padding: 2rem 4rem 6rem;\n    font-size: 3rem;\n  }\n']);return $=function(){return n},n}function G(){var n=Object(u.a)(["\n  width: 50%;\n  margin: 0 auto;\n  border: 1px solid white;\n  @media (max-width: 768px) {\n    width: 70%;\n    padding-top: 1rem;\n  }\n  @media (min-width: 1920px) {\n    width: 60%;\n  }\n"]);return G=function(){return n},n}function Q(){var n=Object(u.a)(["\n  margin-top: 0.2rem;\n  padding-top: 2rem;\n  height: 100%;\n  background-color: black;\n  @media (min-width: 1920px) {\n    padding-top: 12rem;\n  }\n"]);return Q=function(){return n},n}var V=d.a.div(Q()),X=d.a.div(G()),Y=d.a.div($()),Z=d.a.div(M()),nn=d.a.div(K()),en=d.a.div(H()),tn=d.a.a(D()),an=function(){var n=E.b.more,e=Object(a.useState)("EU"),t=Object(m.a)(e,2),i=t[0],o=t[1];return r.a.createElement(V,null,r.a.createElement(q,{language:i,handleLanguageClick:function(n){return o(n)}}),r.a.createElement(X,null,r.a.createElement(Y,null,E.b[i].text.map((function(n,e){return r.a.createElement("p",{key:"paragraph".concat(e)},n)}))),r.a.createElement(Z,null,r.a.createElement(nn,null,E.b[i].contact.title),r.a.createElement(en,null,r.a.createElement("div",null,n.name),r.a.createElement("div",null,n.phone)),r.a.createElement(en,null,r.a.createElement("div",null,E.b[i].contact.mail,":"," ",r.a.createElement(tn,{href:"mailto:".concat(n.mail),target:"_top"},n.mail)),r.a.createElement("div",null,r.a.createElement(tn,{href:n.site,target:"_blank",rel:"noopener noreferrer"},"Flickr"))))))};function rn(){var n=Object(u.a)(["\n  width: 100%;\n  float: left;\n  margin: 0 auto;\n  background-color: white;\n"]);return rn=function(){return n},n}function on(){var n=Object(u.a)(['\n  height: 5rem;\n  padding: 0.5rem 0;\n  content: url("./araotz.png");\n  margin: 0 auto;\n  :before {\n    height: 4rem;\n    width: 241px;\n    padding: 0.5rem 0;\n    background-image: url("./araotz.png");\n    background-size: auto 4rem;\n    display: inline-block;\n    content: "";\n    margin: 0 auto;\n    background-repeat: no-repeat;\n  }\n  @media (max-width: 768px) {\n    height: 2.8rem;\n    :before {\n      height: 2.8rem;\n      width: 108px;\n      background-size: auto 1.8rem;\n    }\n  }\n  @media (min-width: 1920px) {\n    height: 15rem;\n    :before {\n      height: 15rem;\n      width: 422px;\n      background-size: auto 15rem;\n    }\n  }\n']);return on=function(){return n},n}function cn(){var n=Object(u.a)(["\n  width: 100%;\n  margin: 0 auto;\n  text-align: center;\n  &:hover {\n    cursor: pointer;\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n    font-size: 0.8rem;\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(u.a)(["\n  padding-top: 1.25rem;\n  background-color: black;\n  height: 13.4rem;\n  @media (max-width: 768px) {\n    padding-top: 0.8rem;\n    height: 7.5rem;\n  }\n  @media (min-width: 1920px) {\n    padding-top: 10rem;\n    height: 35.4rem;\n  }\n"]);return ln=function(){return n},n}function mn(){var n=Object(u.a)(['\n  color: white;\n  background-color: black;\n  font-family: "Raleway", sans-serif;\n']);return mn=function(){return n},n}var un=d.a.div(mn()),dn=d.a.div(ln()),hn=d.a.div(cn()),sn=d.a.div(on()),fn=d.a.div(rn()),pn=[{minWidth:480,cols:7,margin:1},{maxWidth:479,cols:4,margin:1}],gn=function(){var n=Object(a.useState)({}),e=Object(m.a)(n,2),t=e[0],i=e[1],o=function(n,e){i(Object(l.a)({},t,Object(c.a)({},n,e)))};return r.a.createElement(h.a,null,r.a.createElement(un,null,r.a.createElement(dn,null,r.a.createElement(hn,null,r.a.createElement(sn,null)),r.a.createElement(w,{items:E.c})),r.a.createElement(fn,null,r.a.createElement(s.a,{exact:!0,path:E.c[0].path,render:function(){return r.a.createElement(R,{photosetId:E.a,photos:t[E.a],setPhotos:o,configurations:pn})}}),r.a.createElement(s.a,{path:E.c[1].path,component:an}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(gn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},8:function(n){n.exports=JSON.parse('{"a":"72157713926881598","c":[{"id":"home","text":"Hasiera","path":"/","home":true},{"id":"info","text":"Info","path":"/info"}],"b":{"EU":{"text":["Araotz, horixe da proiektu honen izena. Araotzeko Familiak erretratu bilduma bat da"],"contact":{"title":"Kontaktua","mail":"e-posta"}},"ES":{"text":["Araotz, ese es el nombre de este proyecto. Araotzeko familiak es una colecci\xf3n de retratos"],"contact":{"title":"Contacto","mail":"e-mail"}},"EN":{"text":["This project is called Araotz, it is a of portraits of families from Araotz"],"contact":{"title":"Contact","mail":"email"}},"FR":{"text":["Araotz est le nom de ce projet, qui est une collection de portraits des familles de Araotz"],"contact":{"title":"Contact","mail":"email"}},"CA":{"text":["Araotz"],"contact":{"title":"Contacte","mail":"e-mail"}},"more":{"name":"Joxefe Diaz de Tuesta","phone":"+34 677 536 846","mail":"arrasateargitan@gmail.com","site":"https://www.flickr.com/photos/atauri"}}}')}},[[33,1,2]]]);
//# sourceMappingURL=main.9114d2bd.chunk.js.map