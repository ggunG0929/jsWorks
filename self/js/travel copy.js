// 아이템 리스트
let itemList = []
/*
// 엔터키를 눌렀을때 동시이벤트
let input = document.querySelector('#item');
input.addEventListener('keyup',function(e){ //keyup: 키를 눌렀을때
	if (e.keyCode === 13) { // 키코드13인 엔터키 와 일치했을때 ; 요즘에는 코드해서 "Enter"
  	addList();
    return false; //안됨
  }
});
*/
let addBtn = document.getElementById("add");
addBtn.addEventListener("click",addList);
// 아이템 추가함수
function addList(){
    // item은 itemList에 push()로 저장(입력)
    let item = document.getElementById("item").value;
    itemList.push(item);
    showList();
    document.getElementById("item").value = "";
    document.getElementById("item").focus();
}
function showList(){
    // document.getElementById("itemList").innerHTML = itemList[0];
    let list = "<ul>"; // 목록 리스트 변수
    for(let i=0;i<itemList.length;i++){
        // 아이템 배열 출력
        // document.getElementById("itemList").innerHTML = itemList[i];
        list += "<li>"+itemList[i]+"<span class='close' id="+i+">X</span></li>";
    }
    list += "</ul>"
    document.getElementById("itemList").innerHTML = list;//아이템리스트가 아니라 아이템에 쓰고 있었음;
    // 아이템 삭제
    // 'x'를 선택
    let removeList = document.querySelectorAll(".close");
    // 'x'를 클릭했을 때 삭제 이벤트가 발생
    for(let i=0;i<removeList.length;i++){
        removeList[i].addEventListener("click",remove);
    }
    function remove(){
        //console.log(this); // 클릭 이벤트가 일어난 대상
        let id = this.getAttribute("id"); // id 값 가져옴
        itemList.splice(id,1) // 해당 위치에서 1개 삭제
    // 목록새로고침
        showList();
    }
}