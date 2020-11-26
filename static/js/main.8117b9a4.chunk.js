(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),i=a.n(c),r=a(14),o=a.n(r),s=a(4),l=a.n(s),u=a(6),p=a(3),d=a(10),h=a(7),b=a.n(h),m=a(5),j=a.n(m),g=function(e){var t=parseInt(e,10);return[Math.floor(t/3600)%24,Math.floor(t/60)%60,t%60].map((function(e){return e<10?"0"+e:e})).filter((function(e,t){return"00"!==e||t>0})).join(":")},f=function(e){var t=e.setSongs,a=e.songs,c=e.isPlaying,i=e.image,r=e.id,o=e.active,s=e.title,d=e.author,h=e.setCurrentSong,m=e.audioStream,j=function(){var e=Object(u.a)(l.a.mark((function e(){var n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.filter((function(e){return e.id===r})),e.next=3,h(n[0]);case 3:c&&m.current.play(),i=a.map((function(e){return e.id===r?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})})),t(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("li",{onClick:function(e){return j(e)},className:b()("song",o&&"song_active"),children:[Object(n.jsx)("img",{className:"song__image",alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u0430\u043b\u044c\u0431\u043e\u043c\u0430",src:i}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"song__title",children:s}),Object(n.jsx)("p",{className:"song__author",children:d})]})]})},v=function(e){var t=e.songs,a=e.isPushed,c=e.setSongs,i=e.isPlaying,r=e.setIsPlaying,o=e.setCurrentSong,s=e.audioStream,l=t.map((function(e){return Object(n.jsx)(f,{setSongs:c,active:e.active,audioStream:s,songs:t,setCurrentSong:o,image:e.image,author:e.author,title:e.title,id:e.id,isPlaying:i,setIsPlaying:r},e.id)}));return Object(n.jsxs)("div",{className:b()("library",a&&"library_active"),children:[Object(n.jsx)("h2",{className:"library__title",children:"\u041f\u0435\u0441\u043d\u0438"}),Object(n.jsx)("ul",{className:"library__list",children:l})]})},x=a(8),O=a(9),_=function(e){var t=e.songs,a=e.setSongs,c=e.currentSong,r=e.setCurrentSong,o=e.setIsPlaying,s=e.isPlaying,d=e.audioStream,h=e.setSongInfo,b=e.songInfo,m=e.setIsPaused;i.a.useEffect((function(){var e=t.map((function(e){return e.id===c.id?Object(p.a)(Object(p.a)({},e),{},{active:!0}):Object(p.a)(Object(p.a)({},e),{},{active:!1})}));a(e)}),[c]);var j={transform:"translateX(".concat(b.animatinPercent,"%)")},f={background:"linear-gradient(to right, ".concat(c.color[0],", ").concat(c.color[1],")")},v=function(e){var n=t.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{active:!0}):Object(p.a)(Object(p.a)({},t),{},{active:!1})}));a(n)},_=function(){var e=Object(u.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.findIndex((function(e){return e.id===c.id})),"forward"!==a){e.next=5;break}return e.next=4,r(t[(n+1)%t.length]);case 4:v(t[(n+1)%t.length]);case 5:if("back"!==a){e.next=15;break}if((n-1)%t.length!==-1){e.next=12;break}return e.next=9,r(t[t.length-1]);case 9:return v(t[t.length-1]),s&&d.current.play(),e.abrupt("return");case 12:return e.next=14,r(t[(n-1)%t.length]);case 14:v(t[t.length-1]);case 15:s&&d.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"player__wrapper",children:[Object(n.jsxs)("div",{className:"timeControll",children:[Object(n.jsx)("p",{children:b.duration?g(b.currentTime):"--:--"}),Object(n.jsxs)("div",{style:f,className:"timeControll__track",children:[Object(n.jsx)("input",{value:b.currentTime,step:"1",onChange:function(e){return function(e){d.current.currentTime=e.target.value,h(Object(p.a)(Object(p.a)({},b),{},{currentTime:e.target.value}))}(e)},min:0,max:b.duration||100,className:"timeControll__input",type:"range",name:"",id:""}),Object(n.jsx)("div",{style:j,className:"timeControll__animate-track"})]}),Object(n.jsx)("p",{children:b.duration?g(b.duration):"--:--"})]}),Object(n.jsxs)("div",{className:"playControll",children:[Object(n.jsx)(x.a,{onClick:function(){return _("back")},icon:O.a,size:"3x",className:"playControll__skipBack"}),s?Object(n.jsx)(x.a,{onClick:function(){d.current.pause(),o(!1),m(!0)},icon:O.d,size:"3x",className:"playControll__play"}):Object(n.jsx)(x.a,{onClick:function(){d.current.play(),o(!0),m(!1)},icon:O.e,size:"3x",className:"playControll__play"}),Object(n.jsx)(x.a,{onClick:function(){return _("forward")},icon:O.b,size:"3x",className:"playControll__skipForward"})]})]})},y=function(e){var t=e.currentSong,a=e.isPlaying,c=e.isPaused,i=t.image,r=t.title,o=t.author;return Object(n.jsxs)("div",{className:"cover",children:[Object(n.jsx)("img",{className:b()("cover__image",a&&"cover__image_play",c&&"cover__image_paused"),src:i,alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430 \u0430\u043b\u044c\u0431\u043e\u043c\u0430"}),Object(n.jsx)("h2",{className:"cover__title",children:r}),Object(n.jsx)("h3",{className:"cover__artist",children:o})]})},S=(a(26),function(e){var t=e.isPushed,a=e.setIsPushed;return Object(n.jsxs)("nav",{className:"navigate",children:[Object(n.jsx)("h1",{className:"navigate__title",children:"Chilhop club"}),Object(n.jsxs)("button",{onClick:function(){console.log("yo"),a(!t)},className:b()("navigate__button",t&&"navigate__button_active"),children:["\u041f\u0435\u0441\u043d\u0438",Object(n.jsx)(x.a,{icon:O.c})]})]})}),P=function(){var e=i.a.useState(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],r=i.a.useState(!1),o=Object(d.a)(r,2),s=o[0],h=o[1],b=i.a.useState(!1),m=Object(d.a)(b,2),g=m[0],f=m[1],x=i.a.useState([{title:"Slim Bobby",author:"Aviino",image:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10454",color:["#b48484","#506fc2"],id:j()(),active:!1},{title:"Going Back",author:"Sw\xf8rn",image:"https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10310",color:["#b48484","#61708c"],id:j()(),active:!1},{title:"Serendipity",author:"Philanthrope, The Field Tapes",image:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10251",color:["#b48484","#b35935"],id:j()(),active:!1},{title:"Imagination",author:"Montell Fish",image:"https://chillhop.com/wp-content/uploads/2020/07/24bd0da848d9718fd19af104ff5c0b11f914cb25-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9332",color:["#b48484","#8e5360"],id:j()(),active:!1},{title:"Paraglider",author:"Kendall Miles, H E R B",image:"https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9318",color:["#b48484","#af5332"],id:j()(),active:!1},{title:"Tumbling",author:"Sw\xf8rn",image:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9225",color:["#b48484","#8b3965"],id:j()(),active:!1},{title:"Toft",author:"Felty, Ezzy",image:"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9312",color:["#edd9404","#185e92"],id:j()(),active:!1},{title:"Cruisin'",author:"Cloudchord, G Mills",image:"https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=8200",color:["#00585c","#715653"],id:j()(),active:!1},{title:"Slowdrive",author:"Aviino",image:"https://chillhop.com/wp-content/uploads/2020/07/aa103b43660077c66e65a1edc009844171bbd9c6-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9484",color:["#51688c","#cf9cba"],id:j()(),active:!1},{title:"Onteora Lake",author:"Stan Forebee, Kyle McEvoy",image:"https://chillhop.com/wp-content/uploads/2020/07/38147ead546d4fcc613080507497fe5502a5a241-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=8787",color:["#ffd6ba","#118084"],id:j()(),active:!1}]),O=Object(d.a)(x,2),P=O[0],w=O[1],C=i.a.useState(P[0]),N=Object(d.a)(C,2),k=N[0],I=N[1],T=i.a.useState({currentTime:0,duration:0,animatinPercent:0}),M=Object(d.a)(T,2),z=M[0],E=M[1],B=i.a.useRef(null),F=function(e){var t=e.target.currentTime,a=e.target.duration,n=Math.round(t),c=Math.round(a),i=Math.round(n/c*100);console.log(n,c,i),E(Object(p.a)(Object(p.a)({},z),{},{currentTime:t,duration:a,animatinPercent:i}))},A=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=P.findIndex((function(e){return e.id===k.id})),e.next=3,I(P[(t+1)%P.length]);case 3:g&&B.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(S,{isPushed:a,setIsPushed:c}),Object(n.jsx)(y,{isPlaying:g,isPaused:s,currentSong:k}),Object(n.jsx)(_,{setSongs:w,currentSong:k,setCurrentSong:I,songs:P,songInfo:z,setSongInfo:E,audioStream:B,isPlaying:g,setIsPlaying:f,setIsPaused:h}),Object(n.jsx)(v,{isPushed:a,setSongs:w,audioStream:B,setIsPlaying:f,isPlaying:g,setCurrentSong:I,songs:P}),Object(n.jsx)("audio",{onEnded:A,preload:"true",onLoadedMetadata:F,onTimeUpdate:F,ref:B,src:k.audio})]})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8117b9a4.chunk.js.map