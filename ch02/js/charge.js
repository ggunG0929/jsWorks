// 놀이공원 입장료 계산
let age = prompt("나이를 입력하세요.","1");
age = parseInt(age); // 계산을 위해 숫자처리
let charge;

//if문 처리
// 임의로 반점 넣으려고 charge를 문자처리
if(/* age >= 0 && */ age < 8){
    document.write("취학전 아동입니다.<br>");
    charge = '1,000'; 
}else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>")
    charge = '2,000';
}else if(age >= 14 && age < 20){
    document.write("중, 고등학생입니다.<br>")
    charge = '2,500';
}else{ //age >= 20
    document.write("일반인입니다.<br>")
    charge = '3,000';
}
document.write("입장료는 <span class='access'>"+ charge + "원</span>입니다.");