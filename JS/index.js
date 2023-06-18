window.onload = function(){
let button = document.getElementById("Intro_button");
let audio = document.getElementById("Intro_audio");
let image = document.getElementById("Intro_Image");
let video = document.querySelector('#Video');
window.onclick = function() {

    video.play();
};
button.onclick = function() {
    changeImage();
    togglepause();
};
function changeImage() {
    if (image.src.match("./img/sound_white.png")) {
        image.src = "./img/sound_white_pause.png";
    } else {
        image.src = "./img/sound_white.png";
    }
};
function togglepause(){
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
};
    };
    