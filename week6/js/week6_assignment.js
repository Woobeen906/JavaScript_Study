let str="00001000000"
let reg=/(010|011)\d{2,3}/

console.log(reg.test(str));
