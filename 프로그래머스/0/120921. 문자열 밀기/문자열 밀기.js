function solution(A, B) {
    let temp = A.split("");
    let temp2 = ""
    const length = temp.length;
    
    for(let i=0; i < length ; i++){
        if(A===B) return i;
        temp.unshift(temp[length-1]);
        temp.pop();
        temp2 = temp.join("");
        if(temp2 === B){
            return i+1;
        }
        
    }
    return -1;
}