let customer = prompt("입장객은 몇 명인가요?");
let colNum = parseInt(prompt("한 줄에 몇 명씩 앉나요?")); // 열의 수
let rowNum; // 행(줄)의 수

if(isNaN(customer) || isNaN(colNum)){
    document.write("입력이 취소되었습니다.");
}
else{
    // 나머지에 따라 처리
    if((customer) % (colNum) === 0){
        rowNum = customer / colNum;
    }else{
        rowNum = (customer / colNum) + 1;
    }
}
// 배치
document.write("<table>")
for(var i=0; i<rowNum; i++){
    document.write("<tr>")
    for(var j=1; j<=colNum; j++){
        var seatNum = colNum*i + j;
        if(seatNum > customer){break;} // 한 줄일때는 {} 생략가능
        document.write("<td>좌석" + seatNum + "</td> ");
    }
    document.write("</tr>")
}
document.write("</table>")