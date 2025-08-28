let input = prompt("hay nhap cac so nguyen cach nhau boi dau cach");
let number = input.split(" ").map(Number); 

let count = 0;
let in_count = [];
for (let i = 0; i < number.length; i++) {
    if (number[i]< 0) {
        count = count+1;
        in_count.push(number[i]);
    }
}

console.log(`cac so nguyen am la ${in_count}`)
console.log(`co tat ca  ${count} so nguyen am`);
