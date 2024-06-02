function solution(k, score) {
    var answer = [];
    const rank = [];
        score.forEach(index=>{
            rank.push(index);
            rank.sort((a,b)=>b-a).splice(k);
            answer.push(Math.min(...rank));
        })
    return answer;

}
