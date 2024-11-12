function solution(num_list) {
    return num_list.length >= 11 ? calculate(num_list, "+") : calculate(num_list,"*") 
}

function calculate(numList, operator){
    return numList.reduce((acc, cur) => {
        if(operator === "+"){
            return acc + cur       
        }else if(operator === "*"){
            return acc * cur
        }
    }
    )
}