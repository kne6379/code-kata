function solution(a, b) {
    let answer = 0;
   for(let i=0; i < a.length; i++){
       answer += a[i] * b[i];
   }
    return answer;
}

// 각 배열의 인덱스끼리 곱한다. 
// 곱한 값을 answer 에 더해서 저장한다. 