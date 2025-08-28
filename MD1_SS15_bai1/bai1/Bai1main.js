
let input = prompt("hay nhap 10 so nguyen co 2 chu so cach nhau bang dau cach");
let number = input.split(" ").map(Number);
let soNguyen = 0
let cacsoNguyen = [];
for (let i = 0; i < number.length; i++) {
    if(number[i] >= 10 && number[i]<100){
        soNguyen++
        cacsoNguyen.push(number[i]);
    }
}
if(soNguyen >0){
    console.log(`Số lượng số nguyên có 2 chữ số là: ${soNguyen}`);
    console.log("cac so nguyen  >=10",cacsoNguyen.join(", "));

}else{
    console.log('khong co so nguyen nao thoa man ');
    
}

 







