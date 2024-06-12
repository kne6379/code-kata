function solution(number, limit, power) {
    var answer = 0;
    
    for(let i=1; i<=number; i++){ 
        let count = 0;
        for(let j=1; j<=Math.sqrt(i);j++){
            if(i%j==0){
                if(i/j==j){
                    count++
                }else{
                    count = count+2
                }
            }
        }
        if(count > limit){
        count = power;
        }
        answer += count;
    }
    return answer;
}

// number의 숫자만큼 약수의 개수를 구합니다.
// 개수를 검증합니다. 리밋보다 높다면 power를 할당합니다. 
// 배열에 푸쉬합니다.
// 전부 더하면 result 