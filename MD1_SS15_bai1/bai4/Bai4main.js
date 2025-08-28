let input = prompt("hay nhap cac so nguyen cach nhau boi dau cach");
let number = input.split(" ").map(Number);
let in_reverse = number.slice();

console.log(`cac so nguyen la da chon la ${in_reverse}`);
let out_reverse = in_reverse.reverse();
console.log(`cac so nguyen khi duoc dao nguoc la ${out_reverse}`);





