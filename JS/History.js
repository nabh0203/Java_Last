window.onload = function() {
    const button = document.querySelector('#imgbtn');
    const video = document.querySelector('#video');
    const audio = document.querySelector('#Canaudio');

    button.addEventListener('click', function() {
    audio.play();
    setTimeout(() => {
        video.style.display = 'block';
        button.style.display = "none"; 
        video.style.animation = "box_animation 2s linear forwards";
    }, 1000);
    });

    video.addEventListener('animationend', function() {
    video.style.display = 'block';
    video.play();
    button.style.display = "none"; 
    });
    // function updateSlides() {
    //     const slider = document.querySelector(".slider");
    //     const activeSlide = slider.querySelector(".slide.active") || slider.querySelector(".slide:nth-child(2)");
    //     const prevSlide = activeSlide.previousElementSibling || activeSlide.parentNode.querySelector(".slide:last-child");
    //     const nextSlide = activeSlide.nextElementSibling || activeSlide.parentNode.querySelector(".slide:first-child");

    //     document.querySelectorAll(".slider .slide").forEach((slide) => {
    //         slide.classList.remove("prev", "next", "active");
    //     });

    //     prevSlide.classList.add("prev");
    //     activeSlide.classList.add("active");
    //     nextSlide.classList.add("next");
    // }

    // function switchSlide(direction) {
    //     const activeSlide = document.querySelector(".slide.active");
    //     const prevSlide = activeSlide.previousElementSibling || activeSlide.parentNode.querySelector(".slide:last-child");
    //     const nextSlide = activeSlide.nextElementSibling || activeSlide.parentNode.querySelector(".slide:first-child");

    //     if (direction === "next") {
    //         nextSlide.style.zIndex = 1;
    //         activeSlide.style.zIndex = 2;
    //         setTimeout(() => {
    //             activeSlide.classList.remove("active");
    //             nextSlide.classList.add("active");
    //             nextSlide.style.zIndex = "";
    //             activeSlide.style.zIndex = "";
    //             updateSlides();
    //         }, 100);
    //     } else {
    //         activeSlide.style.zIndex = 1;
    //         prevSlide.style.zIndex = 2;
    //         setTimeout(() => {
    //             activeSlide.classList.remove("active");
    //             prevSlide.classList.add("active");
    //             prevSlide.style.zIndex = "";
    //             activeSlide.style.zIndex = "";
    //             updateSlides();
    //         }, 100);
    //     }
    // }

    // const prevBtn = document.querySelector(".prev-btn");
    // const nextBtn = document.querySelector(".next-btn");

    // prevBtn.addEventListener("click", () => {
    //     switchSlide("prev");
    // });
    // nextBtn.addEventListener("click", () => {
    //     switchSlide("next");
    // });

    // updateSlides();
    $(document).ready(function () {
        const $carousel_cells = $('#product-carousel li');
        const $carousel_dots = $('#carousel-dots li');
        const $carousel_nav = $('.carousel-nav');
        let selected_product_index = 0;

        function selectProduct(index) {
            selected_product_index = index % $carousel_cells.length;

            if (selected_product_index < 0) selected_product_index = $carousel_cells.length + selected_product_index;

            $carousel_cells.each(function (i) {
                let offset = i - selected_product_index;
                if (offset < 0) offset += $carousel_cells.length;

                let index;
                for (index = 0; index < $carousel_cells.length + 1; index++) {
                    $(this).removeClass('item-' + index).addClass('item-' + (offset + 1));
                }
            });

            $carousel_dots.eq(index).addClass('active').siblings('li').removeClass('active');
        };

        /* Arrow clicks */
        $carousel_nav.click(function () {
            const delta = $(this).hasClass('prev') ? -1 : 1;
            const $delta_product = $(`#product-carousel li:eq(${(selected_product_index + delta) % $carousel_cells.length})`);
            const delta_product_index = parseInt($delta_product.index());
            selectProduct(delta_product_index);
        });

        /* Can clicks */
        $carousel_cells.click(function () {
            selectProduct($(this).index());
        });

        /* Pagination */
        $carousel_dots.click(function (e) {
            selectProduct($(this).index());
            $(e.currentTarget).addClass('active').siblings('li').removeClass('active');
        });

        /* Left/Right key arrows */
        $(document).keydown(function (e) {
            const delta = e.keyCode == 37 ? -1 : 1;
            const $delta_product = $(`#product-carousel li:eq(${(selected_product_index + delta) % $carousel_cells.length})`);
            const delta_product_index = parseInt($delta_product.index());

            if ((e.keyCode == 37) || (e.keyCode == 39)) {
                selectProduct(delta_product_index);
                return false;
            }
        });

    });

    // let hoverMeImages = document.querySelectorAll('#hover-me'); // querySelectorAll 사용하여 모든 이미지 선택

    //     hoverMeImages.forEach((hoverMe, index) => {
    //         let text = document.querySelectorAll(`#Slogun > .text, #Slogun > .text1`);

    //         hoverMe.addEventListener("mouseover", () => showText(index));
    //         hoverMe.addEventListener("mouseout", () => hideText(index));
    //     });

    //     function showText(index) {
    //         let text = document.querySelectorAll('#Slogun > .text, #Slogun > .text1'); // 변경: querySelectorAll 사용
    //         text[index * 2].style.opacity = "1"; // 변경: 텍스트의 투명도를 1으로 설정
    //         text[index * 2 + 1].style.opacity = "1"; // 변경: 텍스트의 투명도를 1으로 설정
    //     }

    //     function hideText(index) {
    //         let text = document.querySelectorAll('#Slogun > .text, #Slogun > .text1'); // 변경: querySelectorAll 사용
    //         text[index * 2].style.opacity = "0"; // 변경: 텍스트의 투명도를 0으로 설정
    //         text[index * 2 + 1].style.opacity = "0"; // 변경: 텍스트의 투명도를 0으로 설정
    //     }


textSet.innerHTML = textSet.innerHTML + "<ul id='productList'><li id='list0' class='active'></li><li id='list1'></li><li id='list2'></li></ul>";

let totalNum = 3;
let moveX = 0;
let imgNum = 0;
let imgWidth = document.getElementById("img0").width;
// console.log(imgWidth);

imgMove = function(){
    console.log(imgNum);
    console.log(moveX);
    document.getElementById("imgSet").style.transform = "translateX(" + moveX + "px)";
    for(var i=0; i<totalNum; i++){
        document.getElementById("dt"+i).classList.remove("active");
        document.getElementById("dd"+i).classList.remove("active");
        document.getElementById("btn"+i).classList.remove("active");
        document.getElementById("list"+i).classList.remove("active");
    }
    document.getElementById("dt"+imgNum).classList.add("active");
    document.getElementById("dd"+imgNum).classList.add("active");
    document.getElementById("btn"+imgNum).classList.add("active");
    document.getElementById("list"+imgNum).classList.add("active");
}

prevBtn.onclick = function(){
    if(imgNum == 0){
        imgNum = totalNum-1;
        moveX = -imgWidth * (totalNum-1);
    } else {
        imgNum--;
        moveX = moveX + imgWidth;
    }
    imgMove();
}

nextBtn.onclick = function(){
    if(imgNum == (totalNum-1)){
        imgNum = 0;
        moveX = 0;
    } else {
        imgNum++;
        moveX = moveX - imgWidth;
    }
    imgMove();
}

for(var i=0; i<totalNum; i++){
    document.getElementById("list" + i).onclick = function(){
        console.log(this.id);
        console.log(this.id.slice(4,5));

        imgNum = this.id.slice(4,5);
        moveX = imgNum * - imgWidth;
        imgMove();
    };
}
};
