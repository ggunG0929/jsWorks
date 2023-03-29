let i = parseInt(prompt("점수를 입력하세요"));
let grade;

if(i >= 90){
    grade = "A";
}else if(i >= 80 && i < 90){
    grade = "B";
}else if(i >= 70 && i < 80){
    grade = "C";
}else if(i >= 60 && i < 70){
    grade = "D";
}else if(i >= 0 && i < 60){
    grade = "F";
}else{
    // 임의로 숫자값이 아닐 경우 오류메시지 뜨도록 함
    grade = "환산할 없는 입력값"
    document.write("다시 입력해주세요.<br>");
}

document.write("학점은 <span>" + grade + "</span>입니다.")