function solution(t, p) {
    var answer = 0;
// 문자열 추출 
// t의 문자열에서 p의 길이만큼 추출한다. 
// t 문자열의 길이 / p의 길이 만큼 반복
    let i=0;
    const solNum = p.length;
    const idxNum = t.length;
        while(i<idxNum){    
            let ansNum= t.slice(i,solNum+i)
            console.log(ansNum);
            if(ansNum <= p){
            answer++;
            }
            if(solNum+i == idxNum){
            break;
            }
        i++;

        }
// 길이 안에 포함된 문자열의 숫자를 비교한다 
// t 와 p를 비교하여 작거나 같은 경우의 수를 기록한다. 
// 반환 
    return answer;
}

