function solution(n, m) {
    let a, b;
    let c=[];
    let lcm;
    if(n > m){
        a = n;
        b = m;
    } else{
        a = m;
        b = n;
    }
      while( b !== 0 ){
        let temp = a;
        a = b;
        b = temp % b;
    }
    lcm = n * m / a
    c.push(a,lcm)
    return c;
}
// 최대공약수를 구하는 로직.
// N과 m을 나눠야한다. > 더이상 나눠지지 않을때까지. 
// n과 m을 나누고 나눌 때의 몫을 기록. 
// 몫을 기록하는데 성공했고 그것의 최대값을 추출하여 새로운 배열에 넣기. 

// 최소공배수를 구하는 로직. 
// n과 m이 각각 곱셈을 반복. 
// 서로 같은 배수가 되었을 때 반복을 멈춤.
// 배수들을 기록하고 검사해야함. 