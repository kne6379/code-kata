function solution(price, money, count) {
    var answer = 0;
    let sum = 0;
    let i=0;
    while(i<=count){
    sum +=(price * i)
    i++;   
    };
    answer= sum-money;
    if(answer<=0){
        answer=0;
    }
    return answer;
}

//누적값 += (price * count) 