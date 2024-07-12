function solution(progresses, speeds) {
    var answer = [];
    let day = [];
    let count=0;
    
    progresses.forEach((program,index)=>{
    count = 0;
    while(program < 100){
      program = program + speeds[index]
      count++;      
    }
    day.push(count)
    })
    
    let checkNum = day[0]
    count = 1;
    
    for(let i =1 ; i < day.length ; i++){
        if(checkNum >= day[i]){
            count++;
        }else{
            answer.push(count)
            count=1;
            checkNum = day[i]
        }
    }
     answer.push(count)
    return answer;
}

// progressse => queue
// 작업이 완료되어도 앞선 작업이 끝나야 배포 가능 
// 각 progresses 돌며 완료까지 며칠이 걸리는 지 산출
// 첫번째 작업 기간 day
// 다음 작업 기간 nextDay
// 비교 day > nextDay -> day++ , day < nextDay 일 때는 answer.push(day) 다시 반복, 
// 모든 작업을 순회, 모든 배열을 다 돌았을 때 다시 answer.push 
// 
