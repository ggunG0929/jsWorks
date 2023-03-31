function showText(){
    document.getElementById("down").style.display = "block";
    document.getElementById("show").style.display = "none";
}
function hideText(){
    document.getElementById("down").style.display = "none";
    document.getElementById("show").style.display = "block";
}
let i=1
function toggle(){
    if(i===1){
        document.getElementById("up").style.display = "none";
        document.getElementById("total").innerHTML = "설명글 보이기";
        i = 0;
    }else{
        document.getElementById("up").style.display = "block";
        document.getElementById("total").innerHTML = "설명글 숨기기";
        i = 1;
    }
}