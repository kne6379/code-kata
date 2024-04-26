function solution(n) {
    var answer = 0;
    var x = 0;
    for(let i = n-1; i >= 1; i--){
        if(n % i == 1){
            x = i;
        }
    }
    return x;
}