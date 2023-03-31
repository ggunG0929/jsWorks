// 배열에 알파벳 대문자 저장
let alphabet = new Array(26);
let char = 'A';
char = char.charCodeAt(0); // 0번 인덱스

/*
console.log(char); // code - 65(아스키코드)

char=char.charCodeAt(0); // 아스키코드를 찾는 함수
console.log(String.fromCharCode(char)); // 문자출력하는 함수
*/

// 배열 입력
for(var i=0;i<alphabet.length;i++){
    alphabet[i] = char;
    char++;
}
for(var i=0;i<alphabet.length;i++){
    document.write(alphabet[i] + ", " + String.fromCharCode(alphabet[i])+"<br>");
}
console.log(alphabet);