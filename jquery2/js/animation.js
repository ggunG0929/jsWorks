$(document).ready(function () {
    $('button:eq(0)').click(function () {
        // animate(속성, 시간, 효과)
        $('.m0').animate({ left: 500 }, "fast", "linear")
            .animate({ left: 0 }, "slow", "swing");
    });
    $('button:eq(1)').click(function () {
        // 이동할 때는 500px만큼 이동
        // 돌아올 때는 텍스트 애니메이션을 함께 작동
        $('.m1').animate({ left: 500 }, "fast", "swing")
            .animate({ left: 0 }, "slow", "swing", function () {
                // find()는 선택한 요소(this)의 자식 요소를 선택함
                $(this).find('span').animate({ top: 10 }, "fast", "swing");
            });
    });
    $('button:eq(2)').click(function () {
        $('.m2').animate({ width: "toggle" }, "fast", "linear");
    });
});