let input = prompt("hay nhap chuoi ki tu cua ban cach nhau bang dau cach");
let number1 = input.split("");
let filternum1 = number1.filter(item => !isNaN(item) && item.trim() !== "");
 console.log(filternum1);