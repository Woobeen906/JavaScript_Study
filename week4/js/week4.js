function dis(number){
    let discount=setInterval(() => {
            console.log(number);
            number--;
            if(number<0)clearInterval(discount);
    }, 1000);
}


while (true) {
    let num = prompt("1~10 사이의 정수를 입력하시오", "0");

    if (isNaN(num) || num === "") alert("숫자를 입력하세요");
    else if ((Number(num) < 1 || Number(num) > 10)) alert("범위 내 숫자를 입력하세요");
    else {
        let number = Number(num);
        dis(number);
        break;
    }
}