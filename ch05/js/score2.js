// 학생 5명의 국어, 수학 점수
// score 배열 선언, 값 저장
let score = [
    [80, 70],
    [90, 60],
    [70, 70],
    [95, 90],
    [83, 35]
]
// 전체 출력
for(var i=0;i<score.length;i++){
    for(var j=0;j<score[i].length;j++){
        document.write(score[i][j]+" ");
    }
    document.write("<br>")
}


// 베열작성
// 과목별 총점
let arrSum = [0,0];
for(var i=0;i<score.length;i++){
    arrSum[0] += score[i][0];
    arrSum[1] += score[i][1];
}
document.write("국어 총점: "+arrSum[0]+"<br>")
document.write("수학 총점: "+arrSum[1]+"<br>")

// 과목별 평균
let arrAvg = [0.0,0.0];
arrAvg[0] = arrSum[0]/score.length;
arrAvg[1] = arrSum[1]/score.length;
document.write("국어 평균: "+arrAvg[0]+"<br>")
document.write("수학 평균: "+arrAvg[1]+"<br>")

