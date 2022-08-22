function alertMessage() {
    return alert("Xin chào");
}
let result;
let user1 = Number(document.getElementById("userNumber1"));
let user2 = Number(document.getElementById("userNumber2"));


function addNumber() {
    result = user++;
    document.write(result);
    return ;
}


function checknumber() {
    if (user1 > user2) {
        alert("giá trị đầu tiên lớn hơn")
    } else {
        result = user1 + user2;
        return result;
    }
}

function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    alert(result)
    return result;
}
result = 0;
result = addNumbers();

let userStar = prompt("Mời bạn nhập ngôi sao");
let fileStar = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
let fileStarName = ["UrsaMinor","Tarurus","Cygnus","Lyra","Aquila","UrsaMajor","Leo"];
let s = "không tìm thấy";

for (let i = 0; i <= fileStar.length-1;i++) {
    if (userStar === fileStar[i]) {
        s = fileStarName[i];
        break;
    }
}
alert(s);
