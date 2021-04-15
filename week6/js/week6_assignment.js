let mailChack = /^\w{3,12}@\w{3,12}$/;

let Member = [];     //일반 배열로 사용
let MemberEmail = [];//객체 배열로 사용


while (Member.length < 5) {  // 5개 정도의 이메일을 prompt로 입력받고

    let mail = prompt("이메일을 입력해주세요", " ");
    let chack = false;
    if (mail === null) continue;
    else {
        if (mailChack.test(mail)) {  //정규 표현식을 이용해 Email형식인지 파악
           
            let mailIdChack = mail.split("@");                               
            if (Member.length != 0) {                                        //중복체크부분
                for (let k in Member) {                                      //5개 입력이기때문에 반복문으로 
                    let memberIdChack =Member[k].split("@");                 //기존 배열 Member에 @앞부분(ID)이 같은 값이 있는지
                    if (memberIdChack[0] === mailIdChack[0]) {               //확인한 후 
                        alert("중복된 회원이 존재합니다. 다시 입력해주세요."); //있을 경우 재입력하도록하고 
                        chack = true;                                       //chack 를 true로 설정해 
                        break;                                              //Member배열에 들어가지 않도록 처리
                    }                                                      
                }
                if (chack === false) Member.push(mail);
            }
           else Member.push(mail);
        }

        else alert("다시 입력해주세요"); //Email형식 아니면 재입력 
    }
}

Member.sort(); //배열 정렬

let x = 0
while (MemberEmail.length < 5) {   //객체 배열에 ID, domain value에 값을 저장
    let temp = Member[x].split("@");
    MemberEmail.push({ ID: temp[0], domain: temp[1] });
    x++;
}

for (let k in MemberEmail)  //객체배열에 ID만 출력
    console.log(MemberEmail[k].ID);




/** 문제
* 1. 5개 정도의 Email 을 prompt 로 입력 받음
* 이때 정규 표현식을 이용하여 Email 형식이 아닐 경우는 재 입력(@ 이 있으면 정규표현식으로 처리)
* 배열 : 입력 받은 정상적인 Email을 배열로 저장
* 배열 정렬
* 객체 배열: 입력된  Emial 에서 @ 앞의 것은 객체 ID 키의 value에 저장, @ 뒤의 것은 domain 키의 value에 저장
* 객체 배열의 ID 만 출력
*/
