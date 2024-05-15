function solution(n) {
    var answer = 0;
    const remain = [];
    if(n<3){
    answer = n;
    }
    while(n>=3){
        remain.push(parseInt(n%3));
        n /= 3;
        if(n<3){
            remain.push(parseInt(n));
        }
    }
    
    let i = remain.length-1;
    
    remain.forEach((index)=>{
        answer += index * (3 ** i);
    i--;

        
    });

    return answer;
}

