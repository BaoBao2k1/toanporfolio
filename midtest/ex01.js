const listCharacters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generatorId(length, prefix) {
// Xử lý và return về kết quả
// kiểm tra người dùng không truyền prefix thì mặc định prefix là chuỗi rỗng.
if(prefix === undefined){
    prefix ='';
}


//Kiểm tra length phải là số nguyên dương nhỏ hơn 100 (0.5đ)
  // Number.isInteger: kiểm tra là số nguyên
  // length > 0: số dương
  // length < 100: nhỏ hơn 100

  if(!Number.isInteger(length) || length <=0 || length >= 100){
    return 'Độ dài (length) phải là số nguyên dương và nhỏ hơn 100';
  }

  // Chuỗi id ngẫu nhiên được tạo ra (trừ phần prefix) thì chỉ được phép chứa các ký tự trong

let randomStr = '';
for(let i =0; i< length; i++){
    const randomIn = Math.floor(Math.random() * listCharacters.length);

    randomStr += listCharacters.charAt(randomIn);
}
return prefix + randomStr;
}
console.log(generatorId(8, "user")); // Output: "user5a3Fb2DF"
console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
console.log(generatorId(10)); // Output: "5a3Fb2DFc1"






