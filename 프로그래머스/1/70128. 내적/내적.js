function solution(a, b) {
    let answer = 0;
   for(let i=0; i < a.length; i++){
       let sum = a[i] * b[i];
       answer += sum;
   }
    return answer;
}

// 각 배열의 인덱스끼리 곱한다. 
// 곱한 값을 answer 에 더해서 저장한다. 