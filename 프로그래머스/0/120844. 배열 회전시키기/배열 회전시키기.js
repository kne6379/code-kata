function solution(numbers, direction) {
    let temp = 0;
    switch(direction){
        case "left" :
            numbers.push(numbers.shift());
            break;
        case "right" :
            numbers.unshift(numbers.pop());
            break;
    }
    return numbers;
}