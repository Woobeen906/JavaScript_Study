function Student(name, korean, english, math, science) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
    this.science = science;

    let Sum = 0;
    let Ave = 0;
    this.sum = function () {
        Sum = korean + english + math + science;
        return Sum;
    }
    this.ave = function () {
        Ave = Sum / 4;
        return Ave;
    }
    this.print_info = function () {
        console.log(this.name + "의 총합 " + this.sum() + " 평균 : " + this.ave());
    }
}

let class1 = [];

for (let i = 0; i < 5; i++) { //각각 입력할 때마다 예외처리 적용
    let name = prompt("이름을 입력하세요! : ");
    if (!isNaN(name) || name === '') {
        while (!isNaN(name) || name === '') {
            alert("문자를 입력해주세요!");
            name = prompt("이름을 입력하세요! : ");
            if (!(!isNaN(name) || name === ''))break;
        }
    }

    let korean = prompt("국어 점수를 입력하세요  ", "0");
    if (isNaN(korean) || korean === '') {
        while (isNaN(korean) || korean === '') {
            alert("숫자를 입력해주세요!");
            korean = prompt("국어 점수를 입력하세요  ", "0");
            if (!(isNaN(korean) || korean === ''))break;
        }
    }
    let english = prompt("영어 점수를 입력하세요 ", "0");
    if (isNaN(english) || english === '') {
        while (isNaN(english) || english === '') {
            alert("숫자를 입력해주세요!");
            english = prompt("영어 점수를 입력하세요 ", "0");
            if (!(isNaN(english) || english === ''))break;
        }
    }
    let math = prompt("수학 점수를 입력하세요 ", "0");
    if (isNaN(math) || math === '') {
        while (isNaN(math) || math === '') {
            alert("숫자를 입력해주세요!");
            math = prompt("수학 점수를 입력하세요 ", "0");
            if (!(isNaN(math) || math === ''))break;
        }
    }
    let science = prompt("과학 점수를 입력하세요 ", "0");
    if (isNaN(science) || science === '') {
        while (isNaN(science) || science === '') {
            alert("숫자를 입력해주세요!");
            science = prompt("과학 점수를 입력하세요 ", "0");
            if (!(isNaN(science) || science === ''))break;
        }
    }
    class1.push(new Student(name, Number(korean), Number(english), Number(math), Number(science)));
}

for (let i = 0; i < 5; i++)class1[i].print_info();