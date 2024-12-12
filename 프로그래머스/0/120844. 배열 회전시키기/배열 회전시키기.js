function solution(numbers, direction) {
    let temp = 0;
    switch(direction){
        case "left" :
            temp = numbers.shift();
            numbers.push(temp);
            break;
        case "right" :
            temp = numbers.pop();
            numbers.unshift(temp);
            break;
    }
        
    return numbers;
}