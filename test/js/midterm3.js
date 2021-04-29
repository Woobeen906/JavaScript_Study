var data = new Array(34,121,1,45,74,46,255,295,25,36);

data.sort(function(a, b) {
    return a - b;
});
console.log(data);

for(let i=0;i<3;i++){
let num=prompt("정수를 입력하세요","0");
if(num===null)break;
if(num===null||num===""||isNaN(num)){
    while(1){
        let number=prompt("정수를 입력하세요","0");
        if(!(number===null||number===""||isNaN(number)))break;
        else continue;
    }
    let chack=false;    
    for(let j=0;j<data.length();j++){
        if(data[j]===Number(number)){
            chack=true;
            alert(number+"는 "+(j+1)+"번째로 작은 수입니다.");
            break;
        }
    }
    if(chack===false){
        alert(number+"은 배열에 없습니다.");
    }
}

else{
    let chack=false;
    for(let j=0;j<data.length;j++){
        if(data[j]===Number(num)){
            chack=true;
            alert(num+"는 "+(j+1)+"번째로 작은 수입니다.");
            break;
        }
    }
    if(chack===false){
        alert(num+"은 배열에 없습니다.");
    }
}
}