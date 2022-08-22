let info = Number(document.getElementById("user"));
let result = null;

function footToMeter(){
    result = 0.305 * info;
    alert(result);
}

function  meterToFoot(){
    result = 3.279 * info;
    alert(result);
}
