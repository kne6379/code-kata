function solution(arr1, arr2) {
    let result = 0;
    if(arr1.length > arr2.length){
        result = 1
    }else if(arr1.length === arr2.length){
     if(reduceArr(arr1) > reduceArr(arr2)){
         result = 1
     }else if(reduceArr(arr1) === reduceArr(arr2)){
         result = 0
     }else{
         result = -1
     }
    }else{
        result = -1
    }
    return result;
}

function reduceArr(arr){
    return arr.reduce((acc,cur)=> acc+cur)
}