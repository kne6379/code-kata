function solution(s1, s2) {
    let result = 0;
    s1.forEach(v1 => 
            s2.forEach(v2 => v1 === v2 ? result++ : 0))
    return result;
}