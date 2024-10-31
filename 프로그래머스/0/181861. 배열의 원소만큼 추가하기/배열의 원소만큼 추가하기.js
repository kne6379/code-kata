function solution(arr) {
    const result = [];
    arr.forEach((v,idx)=>{
        for(let i=0; i < v; i++){
            result.push(v);
        }
    })
    return result
}