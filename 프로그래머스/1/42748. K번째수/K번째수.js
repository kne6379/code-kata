function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        let num = array.slice(commands[i][0]-1,commands[i][1]);
        num = num.sort((a,b)=>a-b);
        let last = commands[i][2];
        answer.push(num[last-1])
    }
    return answer;
}