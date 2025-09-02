let input = prompt("hay nhap vao mot mang ki tu").split(""); 
 let includeinput = "-";
 if (input.includes(includeinput)) {
    console.log(`"${includeinput}" có trong mảng`);
    
} else {
    console.log(`"${includeinput}" không có trong mảng`);
}
 let result = input.map(item => item.replace(/-/g,"_"));
 console.log(result.join(""));
 