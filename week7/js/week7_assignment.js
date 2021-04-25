
var arr = [
    { subject: "read", score: 85 },
    { subject: "math", score: 95 },
    { subject: "write", score: 5 },
    { subject: "gim", score: 65 },
    { subject: "write", score: 88 },
];

arr.sort(function (a, b) {  //#1 subject기준 정렬
    if (a.subject < b.subject) return -1;
    if (a.subject > b.subject) return 1;
    if (a.subject === b.subject) {
        if (a.score > b.score) return -1;
        else return 1;
    }
    //#2 subject가 같으면 점수를 내림차순으로 정렬
});

let key_subject = prompt("subject를 입력하세요");  //#3 prompt로 값 입력받아서 배열에 대입
let key_score = prompt("score를 입력하세요", "0");
let temp;
if (key_score === null || isNaN(key_score)) {
    while (1) {
        let key_score2 = prompt("score를 입력하세요", "0");
        if (key_score2 === null || isNaN(key_score2)) continue;
        else break;
    }
    arr.push({ subject: key_subject, score: key_score2 });
}
else {
    arr.push({ subject: key_subject, score: key_score });
}

let sum=0;
for (i in arr) sum += Number(arr[i].score);

let ave =0;
ave= (sum / arr.length); //#4-1 평균구하고
var deviation = function (value) {
    return (Number(value.score) - ave);
}; 

var arr2 = arr.map(deviation); //#4-2 편차 구하기

for(i in arr2)console.log(arr2[i]);
console.log(arr);