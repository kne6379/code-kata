function solution(n,k) {
    let service = Math.floor(n / 10);
    let juiceCount = n >= 10 ? k-service : k
    
    return (n * 12000) + (juiceCount * 2000);
}