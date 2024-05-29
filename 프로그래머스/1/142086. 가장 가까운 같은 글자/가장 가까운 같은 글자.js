function solution(s) {
    var answer = [];
    let strChk = [];
       for(let i = 0; i < s.length; i++){
        if(!strChk.includes(s[i])){
            answer.push(-1);
            strChk.push(s[i]);
        } else if(strChk.includes(s[i])){
            answer.push(i - strChk.lastIndexOf(s[i]));
            strChk.push(s[i]);
        }
    }
    return answer;
}