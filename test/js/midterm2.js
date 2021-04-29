let num=prompt("정수를 입력해주세요","0");
let date=new Date();
var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

if(num===null||num===""||isNaN(num)){
    while(1){
        var number=prompt("정수를 입력하세요","0");
        if(!(number===null||number===""||isNaN(number)))break;
        else continue;
    }
    var today=date.setDate(date.getDate()+Number(number));
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    console.log(year+"년 "+month+"월 "+day+"일 "+week[date.getDay()]);
}

else{
    var today=date.setDate(date.getDate()+Number(num));
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    console.log(year+"년 "+month+"월 "+day+"일 "+week[date.getDay()]);
}