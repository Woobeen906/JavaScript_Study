

let num=prompt("정수를 입력하세요","0");

function dis(number){
    let discount=setTimeout(() => {
        alert(number+'초 경과');
    }, number*1000);
}

if(num===null||num===""||isNaN(num)){
    while(1){
        let number=prompt("정수를 입력하세요","0");
        if(!(number===null||number===""||isNaN(number)))break;
        else continue;
    }
    dis(number);
}

else{
    dis(num);
}

