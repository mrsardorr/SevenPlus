let videos = document.querySelector(".video_box");
let youTube = document.querySelector(".you_tube_vid");
let youTubes = document.querySelector(".you_tube_divs");


youTube.style.display = "block";
videos.addEventListener("click", () => {
    youTube.style.transition = "1s";
    youTube.style.top = "30%";
    youTubes.addEventListener('click',()=>{
        youTube.style.top = "-1000px";
    })
});
