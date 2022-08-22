let info = Number(document.getElementById("user"));
let result = null;

function footToMeter(){
    result = 0.305 * info;
    alert(result);
    return;
}

function  meterToFoot(){
    result = 3.279 * info;
    alert(result);
    return;
}
