function Info(gender, name, grade, stuNumber) {
    this.gender = gender;
    this.name = name;
    this.grade = grade;
    this.stuNumber = stuNumber;

    this.print_name = function () {
        console.log("학번 : " + this.stuNumber + " 이름 : " + this.name);
    }
    Info.prototype.print_info = function () {
        console.log("학번 : " + this.stuNumber + " 성별 : " + this.gender);
    }

}

let info1 = new Info("남자", "박우빈", 3, 1724347);
let info2 = new Info("남자", "권훈아", 3, 1235429);
let info3 = new Info("여자", "김서희", 4, 5176662);

info1.print_info();
info1.print_name();
info2.print_info();
info2.print_name();
info3.print_info();
info3.print_name();