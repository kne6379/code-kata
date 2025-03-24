function solution(a, b) {
    const stringNum = Number(String(a) + String(b));
    const num = 2*a*b
    return stringNum > num ? stringNum : num;
}