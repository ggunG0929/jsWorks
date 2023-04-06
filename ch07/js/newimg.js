function addContents(){
    // 문장 추가
    let newP = document.createElement("p"); // 태그추가
    let text = document.createTextNode("은은하고 다채로운 꽃향") // 텍스트내용추가
    newP.appendChild(text); // <p>은은하고 다채로운 꽃향</p> 태그 속에 텍스트 넣기
    let spot = document.getElementById("info"); // 위치
    spot.appendChild(newP); // 문장을 위치에
    // 이미지 추가
    // src 속성
    let newImg = document.createElement("img"); // 태그추가
    let src = document.createAttribute("src"); // 속성추가
    src.value = "./images/coffee-blue.jpg"; // 속성값
    newImg.setAttributeNode(src); // 태그에 속성 세팅
    // alt 속성
    let alt = document.createAttribute("alt"); //속성추가
    alt.value = "커피 이미지"; //속성값
    newImg.setAttributeNode(alt); // 태그에 속성 세팅
    spot.appendChild(newImg); // 이미지를 위치에
}