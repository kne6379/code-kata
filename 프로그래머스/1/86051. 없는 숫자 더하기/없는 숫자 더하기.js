function solution(numbers) {
    let answer = 45;
    for(let i = 0; i <= numbers.length-1; i++){
    answer = answer - numbers[i];
     }
    return answer;
}