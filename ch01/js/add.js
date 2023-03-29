let n1 = prompt("첫번째 수 입력: ");
let n2 = prompt("두번째 수 입력: ");
let sum_v;

// 실수로 변환 parseFloat
sum_v = parseFloat(n1) + parseFloat(n2);

// 소수 자리수 설정함수 - 객체.toFixed()
document.write("두 수의 합: " + sum_v.toFixed(2));