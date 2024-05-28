function solution(numbers) {
    var answer = [];    
    var filter = [];
    for(let i =0; i<numbers.length; i++){
        for(let j=(i+1); j<numbers.length; j++){
        filter.push(numbers[i] + numbers[j]);
  
      }   
    }
    answer = [...new Set(filter)];
    answer.sort((a,b)=>a-b);
    return answer;
}

