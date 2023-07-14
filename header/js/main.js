// // 자바스크립트
// let toggleBtn = document.querySelector(".navbar_toggleBtn");
// let menu = document.querySelector(".navbar_menu");

// toggleBtn.addEventListener('click', function(){
//     menu.classList.toggle('active');
// });

// 제이쿼리(왼쪽에서 나타나는 애니메이션이 들어감)
$(function(){
    // 메뉴바 클릭 이벤트
    $(".navbar_toggleBtn").click(function(){
        $(".navbar_menu").toggle("active");
    });
    // 윈도우 크기를 조절하는 기능
    $(window).resize(function(){
        if(parseInt($('nav').css('width')) > 768){
            $('.navbar_menu').css('display', 'flex');
        }
    });
});