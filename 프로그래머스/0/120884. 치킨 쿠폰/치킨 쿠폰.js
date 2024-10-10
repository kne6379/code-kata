function solution(chicken, result = 0) {

    if(chicken >= 10) {

        result += Math.floor(chicken/10);

        chicken = Math.floor(chicken/10) + chicken % 10;
        
        return solution(chicken, result)
    }

    return result;
}

