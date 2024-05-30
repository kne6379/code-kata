function solution(food) {
    var answer = [];
    let sum = ''
    for (let i = 1; i < food.length; i++){
        sum += String(i).repeat(Math.floor(food[i]/2)) 
    }
    sum += '0' + [...sum].reverse().join("")
    
    return sum;
}

// 배열을 (반복문) 순환한다. 
// food[j]만큼 1, 2, 3을 각각 push한다. 
// 