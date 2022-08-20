function isprime(n){
    let flag = 1;

    if (n <2) return flag = 0;
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break;
        }
        i++;
    }

    return flag;
}

let n= prompt("Nhap so tu nhien= ");


let check = isprime(n);

if( check == 1 ) alert(n + " la so nguyen to");
else alert(n + " khong phai la so nguyen to");
