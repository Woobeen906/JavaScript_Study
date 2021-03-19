let num=prompt("This page say","숫자를 입력하시오");
if(isNaN(num)||num===null)alert("숫자를 입력하시오");
else if(!(Number(num)>=0&&Number(num)<=100))alert("0이상 100이하의 숫자를 입력하시오");
else if(Number(num)%3===0)alert("3의 배수입니다.");
else alert("3의 배수가 아닙니다");