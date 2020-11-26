import uuid from 'react-uuid';
// Get track time:
export const getTime = (time) => {
   let sec_num = parseInt(time, 10)
   let hours = Math.floor(sec_num / 3600) % 24
   let minutes = Math.floor(sec_num / 60) % 60
   let seconds = sec_num % 60
   return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i > 0)
      .join(":")
}

export const playSkipSong = async (state, audio) => {
   if (state) {
      try {
         const promise = await audio.current.play()
         audio.current.play()
      } catch (er) {
         console.log(er);
      }
   };
}





// Database:

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
         title: "Imagination",
         author: "Montell Fish",
         image: "https://chillhop.com/wp-content/uploads/2020/07/24bd0da848d9718fd19af104ff5c0b11f914cb25-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9332",
         color: ["#b48484", "#8e5360"],
         id: uuid(),
         active: false
      },
      {
         title: "Paraglider",
         author: "Kendall Miles, H E R B",
         image: "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9318",
         color: ["#b48484", "#af5332"],
         id: uuid(),
         active: false
      },
      {
         title: "Tumbling",
         author: "Swørn",
         image: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9225",
         color: ["#b48484", "#8b3965"],
         id: uuid(),
         active: false
      },
      {
         title: "Toft",
         author: "Felty, Ezzy",
         image: "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9312",
         color: ["#edd9404", "#185e92"],
         id: uuid(),
         active: false
      },
      {
         title: "Cruisin'",
         author: "Cloudchord, G Mills",
         image: "https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=8200",
         color: ["#00585c", "#715653"],
         id: uuid(),
         active: false
      },
      {
         title: "Slowdrive",
         author: "Aviino",
         image: "https://chillhop.com/wp-content/uploads/2020/07/aa103b43660077c66e65a1edc009844171bbd9c6-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=9484",
         color: ["#51688c", "#cf9cba"],
         id: uuid(),
         active: false
      },
      {
         title: "Onteora Lake",
         author: "Stan Forebee, Kyle McEvoy",
         image: "https://chillhop.com/wp-content/uploads/2020/07/38147ead546d4fcc613080507497fe5502a5a241-1024x1024.jpg",
         audio: "https://mp3.chillhop.com/serve.php/?mp3=8787",
         color: ["#ffd6ba", "#118084"],
         id: uuid(),
         active: false
      },

   ]
}

