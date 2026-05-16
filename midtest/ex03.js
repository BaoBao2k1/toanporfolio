const categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];


let content = '<select>';

function Select(data,prefix =''){
    data.forEach(element => {
        // thêm <option></option>
        content += `<option value =${element.id}>${prefix}${element.name}</option>`

        //Thêm được chính xác chuỗi "|--" để phân biệt các cấp cho chuyên mục con
        if(element.children && element.length > 0){
            Select(element.children, prefix + '|--')
        }

    });
}

Select(categories)
content += '</select>'
document.write(content)
console.log(content)