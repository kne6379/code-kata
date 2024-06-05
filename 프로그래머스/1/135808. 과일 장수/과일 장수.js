function solution(k, m, score) {
    var answer = 0;
    let box = []
    score.sort((a,b)=>a-b)
    
    while(score.length >= m){
     box = score.splice(score.length-m, m)
    answer += box[0] * m    
    }
    

    return answer;
}


