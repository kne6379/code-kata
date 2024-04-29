function solution(n) {
  var answer = 0;
  let array = String(n);
  answer = array.split("").sort().reverse().join("");
  return Number(answer);
};
