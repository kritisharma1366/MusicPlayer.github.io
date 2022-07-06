
        const music = document.querySelector("audio");
        const img = document.querySelector("img");
        const play = document.getElementById("play");
        const artist = document.getElementById("artist");
        const title = document.getElementById("title");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");

        const songs=[
        {
            name:"song1",
            title:"Myntra",
            artist:"Myntra",
        },
        {
            name:"song2",
            title:"STAY",
            artist:"Justin Beiber",
        },
        {
            name:"song3",
            title:"Thunder",
            artist:"Imagine Dragons",
        },
       
        ]


        let isPlaying = false;
        //for play function
           const playMusic= ()=>{
         
            music.play();
            isPlaying = true;
            play.classList.replace("fa-play", "fa-pause");
            img.classList.add("anime")
        };

        //for pause function
        const pauseMusic= ()=>{
            music.pause();
            isPlaying = false;
            play.classList.replace("fa-pause", "fa-play");
            img.classList.remove("anime")
        };

        play.addEventListener("click",()=>{
           
            isPlaying ? pauseMusic() : playMusic();
        });

        const loadSong =(songs)=>{
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src="music/" + songs.name + ".mp3";
            img.src="images/" + songs.name + ".jpg";

        };
        songIndex=0;

        const nextSong = () => {
            songIndex = (songIndex+1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        };

        const prevSong = () => {
            songIndex = (songIndex-1 + songs.length) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        };

        next.addEventListener("click",nextSong);
        prev.addEventListener("click",prevSong);
  