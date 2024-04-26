function solution(x, n) {
    var answer = [x];
    let i = 1;
    let z = x;
    while (n > i){
        i++;
        z += x;
        answer.push(z);
    }
        
    return answer;
}