// 배열에 알파벳 대문자 저장
let alphabet = new Array(26);

let char = 'ABCD'; // 대문자A로 시작하는 단어
char = char.charCodeAt(0); // 첫번째 글자인 A를 아스키코드로 환산
console.log(char); // 대문자 A의 아스키코드인 65출력
console.log(String.fromCharCode(char)); //65인 char를 문자로 환산해서 콘솔에 출력

// 배열 입력
/*
for(var i=0;i<alphabet.length;i++){  //아스키코드인 숫자로 배열을 입력한 상태
    alphabet[i] = char;
    char++;
}
*/
for(var i=0;i<alphabet.length;i++){
    alphabet[i] = String.fromCharCode(i+65);
}
document.write(alphabet);
document.write("<hr>");

// 알파벳 소문자 배열
let al_s = new Array(26);
for(var i=0;i<al_s.length;i++){
    al_s[i] = String.fromCharCode(97+i);
}
document.write(al_s);
document.write("<hr>");

//한글 자음 배열
let kor = 'ㄱ';

kor = kor.charCodeAt(0);
console.log(kor);
console.log(String.fromCharCode(kor));

let korean = new Array(19)
for (var i=0;i<korean.length;i++){
    korean[i] = String.fromCharCode((i*3)+12593);
}
document.write(korean);
// 한글은 공식으로 환산할만큼 아스키코드가 일정하지가 않다... ㄹ부터 흐트러짐
document.write("<hr>");

//한글 모음 배열
let kor_ = 'ㅏ';

kor = kor_.charCodeAt(0);
console.log(kor_);
console.log(String.fromCharCode(kor_));

let korean_ = new Array(21)
for (var i=0;i<korean_.length;i++){
    korean_[i] = String.fromCharCode((i*2)+12623);
}
document.write(korean_);
// 한글 모음도 ㅛ부터 흐트러짐