function solution(answers) {
    var answer = [];
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const cntArray = [0,0,0];
    const length1 = person1.length, length2 = person2.length, length3 = person3.length ;
    const result =[];
    
    for(let i=0; i<answers.length ; i++){
       if(person1[i%length1] === answers[i]) cntArray[0]+=1;
       if(person2[i%length2] === answers[i]) cntArray[1]+=1;
       if(person3[i%length3] === answers[i]) cntArray[2]+=1;
    }
    
    const maxValue = Math.max(...cntArray);
    
    if(maxValue){
        cntArray.forEach((item, idx)=>item === maxValue ? result.push(idx+1) : '')
    }
    return result;
    return answer;
}