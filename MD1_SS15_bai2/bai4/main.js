let input1 = prompt("hay viet chuoi ki tu dau tien cach nhau bang dau cach").split("");
let input2 = prompt("hay viet chuoi ki tu thu 2 cach nhau bang dau cach").split("");
 
const tatCaCoTrongInput1 = input2.every(item => input1.includes(item));

if (tatCaCoTrongInput1) {
    console.log("hai chuoi giong nhau");
} else {
    console.log("hai chuoi khac nhau");
}