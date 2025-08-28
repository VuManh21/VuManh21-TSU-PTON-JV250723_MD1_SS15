let input = prompt(" hay nhap cac so nguyen cach nhau boi dau cach");
let number = input.split(" ").map(Number);

let numberMax = Number(number[0]);
let sum = 0;
for (let i = 0; i < number.length; i++) {
    if (numberMax < number[i]) {
        numberMax = number[i]
    }
    sum = sum + number[i];
} 
let trungBinhCong = sum / number.length;
console.log(`cac so ban da nhap la ${number}`);

console.log(`so lon nhat la ${numberMax}`);

console.log(`trung binh cong cua day so la ${trungBinhCong}`);

