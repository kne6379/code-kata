function solution(todo_list, finished) {
    const result = [];
    todo_list.forEach((v,i)=>{
        if(!finished[i]){
            result.push(v)
        }
    })
    return result
}