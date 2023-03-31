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