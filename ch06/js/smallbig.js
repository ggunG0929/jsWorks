// 이미지 바꾸기
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small");
// console.log(smallPics.length); 확인
for(let i=0;i<smallPics.length;i++){
    // smallPics[i].onclick = showBig;
    // smallPics[i].addEventListener("click",showBig); // addEventListener()이벤트처리기(접두어 on을 붙이지않음)
    smallPics[i].addEventListener("mouseover",function(){ // 바로 함수정의
    bigPic.setAttribute("src",this.src);
    });
}
/*
// 함수이름을 적어줬을 때 필요
function showBig(){
    // console.log(this.src); // 클릭한 대상(자기 자신) 확인
    bigPic.setAttribute("src",this.src);
}
*/