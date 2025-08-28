let manga = prompt(" hay nhap 10 chu so nguyen cach nhau boi dau cach");
let mangb = prompt(" hay nhap 10 chu so nguyen khac cach nhau boi dau cach");

let arraA = manga.split("").map(Number);
let arraB = manga.split("").map(Number);
let mangc = arraA.concat(arraB);

console.log("mảng mới sau khi nối là ",mangc.join(" ; "));
