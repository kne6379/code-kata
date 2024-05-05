function solution(n) {
    var answer = '';
    let checkArea = 0;
    while (checkArea < n){
        if (checkArea % 2 ==0){
            answer += "수";
        } else{
            answer += "박";
        }
        checkArea++;
    }
    return answer;
}

//while문을 돌려서 
// checkArea <= n 
// checkArea ++ 해서 n과 같을 때까지 업데이트. 
// checkArea % 2 == 0 일 경우 수를 리턴해서 더함. 
// checkArea % 2 != 0 일 경우 박을 리턴해서 더함.
// answer 에 값을 저장한다. 