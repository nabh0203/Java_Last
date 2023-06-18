window.onload = function() {
        let image = document.getElementById("can");

        setTimeout(function() {
            image.src = "./img/로고３.png";
            image.style.width = "231px";
            image.style.height = "218px";
        }, 5000);
        setTimeout(function() {
            document.getElementById("intro_text").classList.add("hidden");
        }, 5000);

        let changedImage = document.getElementById("can");

        // 이미지를 클릭하면 다른 HTML 페이지로 이동하고 노래를 자동으로 재생합니다.
        changedImage.onclick = function() {
        // 다른 HTML 페이지로 이동합니다.
        window.location.href = "Main.html";

        // 이동한 페이지에서 노래를 자동으로 재생합니다.
        window.onload = function() {
        let audio = document.getElementById("Intro_audio");
        audio.play();
        };
    };
};
