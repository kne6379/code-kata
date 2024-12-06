function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
출처: https://rei050r.tistory.com/169 [rei050r:티스토리]