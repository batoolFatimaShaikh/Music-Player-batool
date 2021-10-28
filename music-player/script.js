 // getting elements which is needed       
        const music = document.querySelector("audio")
        const img =document.querySelector("img")
        const play =document.getElementById("play");
        const artist =document.getElementById("artist");
        const title =document.getElementById("title");
        const prev =document.getElementById("prev");
        const next =document.getElementById("next");

//data
const songs = [
    {
        name:"icon1" ,
        title:"Stereo" ,
        artist:"gym class" ,
    },
    {
        name:"icon2" ,
        title: "Who says",
        artist:"Selena" ,
    },
    {
        name:"icon3" ,
        title: "Alone",
        artist:"Alan Walker" ,
    },
    {
        name:"icon4" ,
        title: "Arabian Night",
        artist:"Riposta" ,
    },
    {
        name:"icon5" ,
        title: "Astronaut",
        artist:"Masked Wolf" ,
    },
    {
        name:"icon6" ,
        title: "August Diaries",
        artist:"Dharia" ,
    },
    {
        name:"icon7" ,
        title: "Believer",
        artist:"Imagine Dragons" ,
    },
    {
        name:"icon8" ,
        title: "Bella Ciao ",
        artist:"Manu pilas" ,
    },
    {
        name:"icon9" ,
        title: "Darkside",
        artist:"Alan Walker" ,
    },
    {
        name:"icon10" ,
        title: "Dust",
        artist:"Hans Zimmer" ,
    },
    {
        name:"icon11" ,
        title: "Faded",
        artist:"Alan Walker" ,
    },
    {
        name:"icon12" ,
        title: "I'd Love To",
        artist:"Jetta" ,
    },
    {
        name:"icon13" ,
        title: "Ignite",
        artist:"K-391" ,
    },
    {
        name:"icon14" ,
        title: "In The End",
        artist:"Tomme Profiit" ,
    },
    {
        name:"icon15" ,
        title: "Legends",
        artist:"Legue of Legend" ,
    },
    {
        name:"icon16" ,
        title: "Let Me ",
        artist:"Alec Benjamin" ,
    },
    {
        name:"icon17" ,
        title: "Lily",
        artist:"Alan Walker" ,
    },
    {
        name:"icon18" ,
        title: "On My Way",
        artist:"Alan Walker" ,
    },
    {
        name:"icon19" ,
        title: "Pirates",
        artist:"Liu&Genx" ,
    },
    {
        name:"icon20" ,
        title: "Queen of Hearts ",
        artist:"Starla Edney" ,
    },
    {
        name:"icon21" ,
        title: "Rabbit Hole",
        artist:"Gabry Ponte" ,
    },
    {
        name:"icon22" ,
        title: "S.T.A.Y.",
        artist:"Hans Zimmer" ,
    },
    {
        name:"icon23" ,
        title: "Señorita",
        artist:"shawn Mendes" ,
    },
    {
        name:"icon24" ,
        title: "Sing Me",
        artist:"Alan Walker" ,
    },  
    {
        name:"icon25" ,
        title: "Sugar & Brownies",
        artist:"DHARIA" ,
    }, 
    {
        name:"icon26" ,
        title: "Tara Rita ",
        artist:"DHARIA" ,
    },
    {
        name:"icon27" ,
        title: "Tokyo Drift",
        artist:"Teriyaki Boyz" ,
    },
    {
        name:"icon28" ,
        title: "U Do",
        artist:"TRFN" ,
    },
    {
        name:"icon29" ,
        title: "Unstoppable",
        artist:"sia" ,
    },
    {
        name:"icon30" ,
        title: "Going",
        artist:"Hans Zimmer" ,
    },
    {
        name:"icon31" ,
        title: "Worth It",
        artist:"Fifth Harmony" ,
    },
];
// playing music
let isPlaying = false;
 //for playing
        const playMusic = () => {
               isPlaying = true;
               music.play();
               play.classList.replace("fa-play","fa-pause")
               img.classList.add("amine");
        };
//for pause
        const pauseMusic = () => {
               isPlaying = false;
               music.pause();
               play.classList.replace("fa-pause" , "fa-play")
               img.classList.remove("amine");
        };
// adding click event
        play.addEventListener( "click" , () => {
            if(isPlaying){
                pauseMusic();
            }
            else{
                playMusic();
            }
        });

//changing tilte artist song and img by using provided data.
        const loadSong = (songs)=>{
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src = "music/" + songs.name + ".mp3";
            img.src = "img/" + songs.name + ".jpg"
        };
        songsIndex =0;
//func for nextsong
        const nextSong = () => {
            songsIndex = (songsIndex + 1)% songs.length;
            loadSong(songs[songsIndex]);
            playMusic();
        };
//func for prevsong
        const prevSong = () => {
            songsIndex = (songsIndex - 1 + songs.length)% songs.length;
            loadSong(songs[songsIndex]);
            playMusic();
        };   
        
//adding funct of next & prev in clickevent
         next.addEventListener("click", nextSong);
         prev.addEventListener("click", prevSong);
