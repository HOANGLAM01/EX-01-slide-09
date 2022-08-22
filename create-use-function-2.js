//bài 1

function square(a) {
    let squareA = a * a;
}
square()
//bài 2

const PI = 3.14
let r = Number(prompt("mời nhập bán kính"));
let areaCircle;
let diameterCircle;
function  area(r) {
    areaCircle = r * r * PI
    diameterCircle = 2 * r * PI
    return areaCircle;
}
area()
//bài 3

function factorial() {
    let volume = 1;
    let number = +prompt("mời nhập số cần tính:");
    for (let i = 1; i <= number; i++) {
        volume = volume * i
    }
    alert(volume);
    return volume;
}
factorial();
//bài 4
let user = [prompt("mời nhập")];
function checkNumber(user)  {
    if (user > 0) {
        return true;
    }else {
        return false;
    }
}
//bài 5
let number1 = +prompt("số thứ nhất");
let number2 = +prompt("số thứ hai");
let number3 = +prompt("số thứ ba");
let min;
function smallestIn3Number(number1,number2,number3) {
    min = number1;
    if(min > number2){
        min = number2;
    }
    if (min > number3) {
        min = number3
    }
}
//bài 7

let userNumber1 = +prompt("Mời nhập số");
let userNumber2 = +prompt("Mời nhập số");
let userNumber = [userNumber1,userNumber2];
userNumber.reverse()

//bài 8

let UserNumber = [2,6,3,4,5,8];
for (let i = 0,changeNumber ; i < (UserNumber.length)/2; i++) {
    UserNumber[i] = changeNumber;
    changeNumber = UserNumber[UserNumber.length-i-1];
}

//bài 9

let Mang = [a,2,5,d,f,e,o];
let info = prompt("kiểm tra thông tin");
let result = "khong tìm thấy";
for (let i = 0; i < Mang.length; i++) {
    if (info === Mang[i]){
        result = "tìm thấy " +Mang[i] + "ở vị trí thứ" + i
        break;
    }
}
console.log(result)