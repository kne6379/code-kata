function solution(my_string) {
    const splitString = my_string.split(" ")
    let answer = Number(splitString[0])
    splitString.forEach((v,idx)=>{
        switch(v){
            case "+":
                answer += Number(splitString[idx+1])
                break;
            case "-":
                answer -= Number(splitString[idx+1])
                break;
        }
    })
    return answer;
}