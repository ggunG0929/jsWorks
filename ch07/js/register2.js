// 유효성 검사
function checkMember(){
    let form = document.regForm;
    let id = form.uid;
    let mail = form.email;
    let pw1 = form.upw1;
    let pw2 = form.upw2;

    let pw_pat1 = /[0-9]/;
    let pw_pat2 = /[~!@#$%^&*]/;
    let pw_pat3 = /[a-zA-Z]/;

    console.log(pw_pat1.test(pw1.value))
    // console.log(pw_pat2.test(pw1.value))
    // console.log(pw_pat3.test(pw1.value))

    if(id.value.length<4||id.value.length>12){
        alert("아이디를 4~12자리로 입력해 주세요")
        id.select();
        return false; // 전송 x
    }else if(mail.value == ""){
        alert("이메일은 필수 입력 사항입니다")
        mail.select();
        return false;
    }else if(pw1.value.length<8 || !pw_pat1.test(pw1.value) || !pw_pat2.test(pw1.value) || !pw_pat3.test(pw1.value)){
        alert("비밀번호는 영문자, 숫자, 특수문자 포함 8자리 이상입니다")
        pw1.select();
        return false;
    }else if(pw1.value!==pw2.value){
        alert("비밀번호는 동일해야 합니다")
        pw2.select();
        return false;
    }else{
        // form.submit();
        return false;
    }
}