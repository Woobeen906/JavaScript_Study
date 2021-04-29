

let arr = new Array();
function Info(name,sub1, sub2,sub3) {
    this.name = name;
    this.sub1 = sub1;
    this.sub2 = sub2;
    this.sub3 = sub3;
}
while (1) {
    let a = prompt("이름 국어 영어 수학 점수를 ,로 구별하여 차례로 입력하시오");
    let chack = /^[가-힣]{2,4},[0-9]{0,3},[0-9]{0,3},[0-9]{0,3}$/;
    let chack1 = /^[가-힣]{2,4},[0-9]{0,3},[0-9]{0,3}$/;
    let chack2 = /^[가-힣]{2,4},[0-9]{0,3}$/;
    let chack3 = /^[가-힣]{2,4}$/;
    if (a === null) break;
    if (chack.test(a)||chack1.test(a)||chack2.test(a)||chack3.test(a)) {
        let temp = a.split(",");
        if (temp.length < 4) {
            while (temp.length < 4) {
                temp.push(-100);
            }
        }
        arr.push(new Info(temp[0],temp[1],temp[2],temp[3]));
    }
    else{
        alert("잘못된 입력입니다");
    }
}
arr.sort((a,b)=>{
    return a.sub2-b.sub2;
})

for(let k in arr){
    console.log(arr[k].name);
}