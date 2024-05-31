function solution(a, b, n) {
    var answer = 0;
    let sum = 0;
    
    while(n>=a){
        sum += Math.floor(n/a)*b
         n = Math.floor(n/a)*b + n%a        
    }
   return answer = sum
}



