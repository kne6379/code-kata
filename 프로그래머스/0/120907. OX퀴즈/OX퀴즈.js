function solution(quiz) {
    const operatorMap = {
        '+': (x,y) => x + y,
        '-': (x,y) => x - y
    }
    const result = quiz.map(v=>{
        const [a, b, c, d, e] = v.split(" ")
        
        if(operatorMap[b](Number(a),Number(c)) === Number(e)){
            return "O"
        }else{
            return "X"
        }
    })

    return result;
}