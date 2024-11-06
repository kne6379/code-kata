function solution(myString, pat) {
    let answer = "";
    for(let i=0; myString.length > i; i++){
        myString[i] === "A" ? answer += "B" : answer += "A"
    }
    
    return Number(answer.includes(pat))
}