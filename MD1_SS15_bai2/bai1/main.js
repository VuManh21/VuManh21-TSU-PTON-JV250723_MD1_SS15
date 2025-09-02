let num = ["c", "s", "c", "2", "6", "1"];
//  tim ra hai so chan 
let filterchan  =  num.filter(num =>num%2 === 0);
//  tim ra 2 so le
let filterle = num.filter (num=> num%2 !==0);
//   dao nguoc mang
let reversele = filterle.reverse();

// noi mang thanh chuoi
let result = filterchan.concat(reversele).join("");
console.log(result);