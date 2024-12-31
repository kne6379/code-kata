function solution(num_list, n) {
    const result = [];
    let temp = [];
    num_list.map((v)=> {
        temp.push(v)
        if(temp.length === n){
            result.push(temp);
            temp = [];
        }
    });
    return result
}