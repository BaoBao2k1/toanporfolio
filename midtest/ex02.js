function highlightKeyword(content, keyword){
    //Nếu không tìm được keyword trong content thì trả về content ban đầu, nếu dữ liệu nhập vào không phải là chuỗi thì trả về Invalid.
    if(typeof content !== 'string' || typeof keyword !== 'string'){
        return 'Invalid'
    }

    if(keyword === '') return content;

    //Không phân biệt chữ hoa, chữ thường.

    const timKiem = new RegExp(keyword, 'gi')

    //Thay thế các từ tìm được bằng thẻ strong
    const ketQua = content.replace(timKiem, function(match) {
    return "<strong>" + match + "</strong>";
    });

    return ketQua
}

const cauChuyen = "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!";
const tuKhoa = "javascript";

console.log(highlightKeyword(cauChuyen, tuKhoa));