(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(2),s=a.n(i),n=a(11),r=a.n(n),o=a(3),l=function(e){var t=e.songs,a=e.image,i=e.id,s=e.title,n=e.author,r=e.setCurrentSong,o=e.setIsPlaying;return Object(c.jsxs)("li",{onClick:function(e){return function(){var e=t.filter((function(e){return e.id===i}));r(e[0]),o(!1)}()},className:"song",children:[Object(c.jsx)("img",{className:"song__image",alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u0430\u043b\u044c\u0431\u043e\u043c\u0430",src:a}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"song__title",children:s}),Object(c.jsx)("p",{className:"song__author",children:n})]})]})},u=function(e){var t=e.songs,a=e.setIsPlaying,i=e.setCurrentSong,s=t.map((function(e){return Object(c.jsx)(l,{songs:t,setCurrentSong:i,image:e.image,author:e.author,title:e.title,id:e.id,setIsPlaying:a},e.id)}));return Object(c.jsxs)("div",{className:"library",children:[Object(c.jsx)("h2",{className:"library__title",children:"\u041f\u0435\u0441\u043d\u0438"}),Object(c.jsx)("ul",{className:"library__list",children:s})]})},p=a(7),d=a(4),j=a.n(d),h=function(e){var t=parseInt(e,10);return[Math.floor(t/3600)%24,Math.floor(t/60)%60,t%60].map((function(e){return e<10?"0"+e:e})).filter((function(e,t){return"00"!==e||t>0})).join(":")},m=a(5),b=a(6),g=function(e){var t=e.currentSong,a=e.setIsPlaying,i=e.isPlaying,n=(e.isPaused,e.setIsPaused),r=t.audio,l=s.a.useRef(null),u=s.a.useRef(null),d=s.a.useState({currentTime:0,duration:0}),j=Object(o.a)(d,2),g=j[0],x=j[1],O=function(e){var t=e.target.currentTime,a=e.target.duration;x(Object(p.a)(Object(p.a)({},g),{},{currentTime:Math.trunc(t),duration:a}))};return Object(c.jsxs)("div",{className:"player__wrapper",children:[Object(c.jsx)("h2",{children:"\u041f\u043b\u0435\u0435\u0440"}),Object(c.jsxs)("div",{className:"timeControll",children:[Object(c.jsx)("p",{children:g.duration?h(g.currentTime):"--:--"}),Object(c.jsx)("input",{value:g.currentTime,step:"1",onChange:function(e){return function(e){l.current.currentTime=e.target.value,x(Object(p.a)(Object(p.a)({},g),{},{currentTime:e.target.value}))}(e)},ref:u,min:0,max:g.duration||100,className:"timeControll__input",type:"range",name:"",id:""}),Object(c.jsx)("p",{children:g.duration?h(g.duration):"--:--"})]}),Object(c.jsxs)("div",{className:"playControll",children:[Object(c.jsx)(m.a,{icon:b.a,size:"2x",className:"playControll__skipBack"}),i?Object(c.jsx)(m.a,{onClick:function(){l.current.pause(),a(!1),n(!0)},icon:b.c,size:"3x",className:"playControll__play"}):Object(c.jsx)(m.a,{onClick:function(){l.current.play(),a(!0),n(!1)},icon:b.d,size:"3x",className:"playControll__play"}),Object(c.jsx)(m.a,{icon:b.b,size:"2x",className:"playControll__skipForward"})]}),Object(c.jsx)("audio",{preload:"true",onLoadedMetadata:O,onTimeUpdate:O,ref:l,src:r})]})},x=a(12),O=a.n(x),f=function(e){var t=e.currentSong,a=e.isPlaying,i=e.isPaused,s=t.image,n=t.name,r=t.artist;return Object(c.jsxs)("div",{className:"cover",children:[Object(c.jsx)("img",{className:O()("cover__image",a&&"cover__image_play",i&&"cover__image_paused"),src:s,alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u0430\u043b\u044c\u0431\u043e\u043c\u0430"}),Object(c.jsx)("h2",{className:"cover__title",children:n}),Object(c.jsx)("h3",{className:"cover__artist",children:r})]})},v=(a(23),function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],n=s.a.useState(!1),r=Object(o.a)(n,2),l=r[0],p=r[1],d=s.a.useState([{title:"Slim Bobby",author:"Aviino",image:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10454",color:["#b48484","#506fc2"],id:j()(),active:!1},{title:"Going Back",author:"Sw\xf8rn",image:"https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10310",color:["#b48484","#61708c"],id:j()(),active:!1},{title:"Serendipity",author:"Philanthrope, The Field Tapes",image:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10251",color:["#b48484","#b35935"],id:j()(),active:!1},{title:"Serendipity",author:"Philanthrope, The Field Tapes",image:"https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9917",color:["#b48484","#24887c"],id:j()(),active:!1}]),h=Object(o.a)(d,2),m=h[0],b=(h[1],s.a.useState(m[1])),x=Object(o.a)(b,2),O=x[0],v=x[1];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(f,{isPlaying:l,isPaused:a,currentSong:O}),Object(c.jsx)(g,{isPlaying:l,setIsPlaying:p,isPaused:a,setIsPaused:i,currentSong:O}),Object(c.jsx)(u,{setIsPlaying:p,setCurrentSong:v,songs:m})]})});r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f082b9b5.chunk.js.map