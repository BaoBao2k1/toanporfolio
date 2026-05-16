function findSecondLargestNumber(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        return 'Invalid'
    }

    let Number = []
    for(let i =0; i <arr.length; i++){
       if(!Number.includes(arr[i])){
        Number.push(arr[i])
       }
    }

    if(Number.length < 2){
        return null
    }

    Number.sort(function(a,b){
        return b-a
    })

    return Number[1]
}

console.log(findSecondLargestNumber([20,5,20,6])) // số 6
console.log(findSecondLargestNumber([20,20,20])) //null 
console.log(findSecondLargestNumber([]))// 'invialid'
console.log(findSecondLargestNumber(456))// 'invialid'