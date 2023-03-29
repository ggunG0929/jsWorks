// 변수의 값을 교환하기
let x = 0, y = 1;
let temp;

document.write("----교환 전----<br>");
document.write("x=" + x + ", y=" + y);
document.write("<p>==========</p>");

// 교환 처리
// 임의로 교환과정 표시
temp = x; // temp=0
document.write("----교환 중----<br>");
document.write("x=" + x + ", y=" + y + ", temp=" + temp);

x = y; // x=1
document.write("<br>----교환 중----<br>");
document.write("x=" + x + ", y=" + y + ", temp=" + temp);

y = temp; // y=0
document.write("<br>----교환 중----<br>");
document.write("x=" + x + ", y=" + y + ", temp=" + temp);

document.write("<p>==========</p>");
document.write("----교환 후----<br>");
document.write("x=" + x + ", y=" + y);