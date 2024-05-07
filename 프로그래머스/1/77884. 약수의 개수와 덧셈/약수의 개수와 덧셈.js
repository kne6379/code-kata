function solution(left, right) {
    var answer = 0;
    let countArea = 0;
    let measure = [];
    do {
        countArea = left++;
        measure.push(countArea);
        let j=0;
        for(let i = 1; i <= countArea ; i++){
            if(countArea%i==0){
                j++;
            }
        }
        j%2==0?answer+=countArea:answer-=countArea;
    }while(left<=right)
    
    return answer;
}

// 최솟값과 최댓값의 사잇수를 구해야함. do while문 / 
// > left ++을 통해 right 까지 간다. 그 중 left++의 값을 countArea에 기록.
// 사잇 값의 약수를 구해야함. 
// > countArea의 약수를 찾는다(countArea%2==0)일 때 measure에 push. 
// 약수의 개수를 카운트 해야함.
// 약수의 개수에 따라서 사잇수를 더할 지 뺄지 결정. 