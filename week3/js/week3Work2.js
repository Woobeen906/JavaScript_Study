let arr = new Array();
let i = 0, cnt = 0, sum = 0;

while (i<10) {
    let num = prompt("숫자 입력");
    if (num === null || num === "") continue;
    else {
        if (isNaN(num)) {
            arr.push(num);
            i++;
        }
        else {
            arr.push(Number(num));
            sum += Number(num);
            cnt++;
            i++;
        }
    }
}
for(i in arr)console.log(arr[i]);
let ave=(sum/cnt);
console.log("양의 정수 개수 : "+cnt+"평균 : "+ave.toFixed(2));
