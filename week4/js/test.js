let num1=prompt("양의 정수를 입력하세요","0");
let num2=prompt("양의 정수를 입력하세요","0");


let sum=function(n){ //1부터 n까지 합
    let result=0;
    n=Number(n);
    for(let i=1;i<=n;i++){
        result+=i;
    }
    console.log(result);
}

function measure(n){ //약수 중 가장 큰거
    n=Number(n);
    let result=1;
    for(let i=2;i<=n;i++){
        if(n%i==0){
            result=n/i;
            break;
        }
    }
    console.log(result);
}

function compare(callback){ //비교함수
    callback();
}


sum(num1);
measure(num2);
compare(function(){
    let n1,n2;
    for(let i=0;i<2;i++){
    let n=prompt("2개의 양의 정수를 입력하시오","0");
    if(i==0)n1=n;
    if(i==1)n2=n;
    }
    let result=n1>n2?n1:n2;
    console.log(result);
})