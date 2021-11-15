// html 이 준비가 되면 실행한다.
$(document).ready(function () {
    // visual slide
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".sw-visual-next",
            prevEl: ".sw-visual-prev",
        },
        pagination: {
            el: ".sw-visual-pg",
            type: "fraction",
        },
    });

    // sw-visual 콘트롤
    // 버튼을 저장한다.
    let sw_visual_bt = $('.sw-visual-bt');
    sw_visual_bt.click(function () {
        $(this).toggleClass('sw-visual-bt-play');

        // 현재 아이콘 상태를 임시로 저장한다.
        let temp = $(this).hasClass('sw-visual-bt-play');

        // 아이콘이 > 이라면 temp == true
        // 멈추고
        // 그렇지 않다면( || ) 
        // 자동실행하라
        if (temp == true) {
            sw_visual.autoplay.stop();
        } else {
            sw_visual.autoplay.start();
        }
    });

    // 알뜰물품 슬라이드
    new Swiper('.sw-sales', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-sales-next",
            prevEl: ".sw-sales-prev",
        },
        pagination: {
            el: ".sw-sales-pg",
            type: "fraction",
        },
    });

    // 추천 슬라이드 관련
    new Swiper('.sw-pick', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-pick-next",
            prevEl: ".sw-pick-prev",
        },
        pagination: {
            el: ".sw-pick-pg",
            type: "fraction",
        },
    });

    // 유명물품 슬라이드 관련 10 픽셀 여백 7개 배치
    new Swiper('.sw-famous', {
        slidesPerView: 7,
        slidesPerGroup: 7,
        spaceBetween: 10,
        navigation: {
            nextEl: ".sw-famous-next",
            prevEl: ".sw-famous-prev",
        },
    });

    // famous 를 위한 기능
    let famous_good_box = $('.famous .good-box');
    $.each(famous_good_box, function () {
        // good-box-special 찾아본다.
        let temp = $(this).find('.good-box-special');
        if (temp.length > 0) {
        } else {
            $(this).find('.good-box-price').css('bottom', '3rem');
            $(this).find('.good-box-cart').css('bottom', '3rem');
        }
    });

    // 목록을 보여주는 버튼들
    let famous_icon = $('.sw-famous .swiper-slide>a');
    // 목록들
    let famous_good_list = $('.famous .good-list');
    famous_good_list.eq(0).show();

    $.each(famous_icon, function(index, item){
        $(this).click(function(event){
            // a 태그의 href 를 막는다.
            event.preventDefault();
            famous_good_list.hide();
            famous_good_list.eq(index).show();
        });
    });  
    
    // brand 슬라이드
    new Swiper('.sw-brand', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-brand-next",
            prevEl: ".sw-brand-prev",
        },
    });

    // banner 슬라이드
    new Swiper('.sw-banner', {
        slidesPerView: 2,
        slidesPerGroup:1,
        loop: true,
        navigation: {
            nextEl: ".sw-banner-next",
            prevEl: ".sw-banner-prev",
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // recipe 슬라이드
    $(".recipe-con-scroll").niceScroll({
        cursoropacitymax: 0.4,
        cursorwidth: "0.8rem",
    });

    // 리뷰 슬라이드
    new Swiper('.sw-review', {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 15,
        navigation: {
            nextEl: ".sw-review-next",
            prevEl: ".sw-review-prev",
        },
        pagination: {
            el: ".sw-review-pg",
            type: "fraction",
        },
    });

});