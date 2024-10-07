function solution(a, b) {
  var answer = Math.max(Number(`${a}${b}`),Number(`${b}${a}`));
  return answer;
}