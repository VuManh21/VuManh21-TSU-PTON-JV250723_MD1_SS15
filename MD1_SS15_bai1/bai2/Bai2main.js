let inPut = prompt("hay nhap 10 so nguyen co 2 chu so cach nhau bang dau cach");
let numBer = inPut.split(" ").map(Number);

let max = Number(numBer[0]);
for (let i = 0; i < numBer.length; i++) {
    if (max < Number(numBer[i])) {
        max = Number(numBer[i]);
       
        
    }
} 
console.log(`so lon nhat la ${max}`);