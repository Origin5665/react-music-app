import uuid from 'react-uuid';

export const getTime = (time) => {
   let sec_num = parseInt(time, 10)
   let hours = Math.floor(sec_num / 3600) % 24
   let minutes = Math.floor(sec_num / 60) % 60
   let seconds = sec_num % 60
   return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i > 0)
      .join(":")
   // if (time < 3600) {
   //    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
   // } else {
   //    return Math.floor(time / 3600) % 24 + ":" + Math.floor(time / 60) % 60 + ":" + ("0" + Math.floor(time % 60)).slice(-2)
   // }

}

export const chilhop = () => {
   return [
      {
         title: "Slim Bobby",
         author: "Aviino",
         image: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=10454",
         color: ["#b48484", "#506fc2"],
         id: uuid(),
         active: false
      },
      {
         title: "Going Back",
         author: "Swørn",
         image: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
         color: ["#b48484", "#61708c"],
         id: uuid(),
         active: false
      },
      {
         title: "Serendipity",
         author: "Philanthrope, The Field Tapes",
         image: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=10251",
         color: ["#b48484", "#b35935"],
         id: uuid(),
         active: false
      },
      {
         title: "Serendipity",
         author: "Philanthrope, The Field Tapes",
         image: "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
         color: ["#b48484", "#24887c"],
         id: uuid(),
         active: false
      }
   ]
}

