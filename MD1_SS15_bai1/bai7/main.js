let input =prompt("hay nhap cac so nguyen cua ban cach nhau bang dau cach");
let number = input.split(" ").map(Number);
 
 console.log(`so nguyen ban da chon la ${number}`);
let sortNumber= [...number].sort();
console.log(` cac so nguyen duoc sap xep theo thu tu tang dan ${sortNumber}`);
 

let reverseNumber = [...sortNumber].reverse();
console.log(` cac so nguyen duoc sap xep theo thu tu giam  dan ${reverseNumber}`);