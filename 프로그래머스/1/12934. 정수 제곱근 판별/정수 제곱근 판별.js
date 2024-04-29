function solution(n) {
  var answer = 0;
  let x = Math.sqrt(n);
  if (parseInt(x) === x) {
    answer = (x + 1) ** 2;
    console.log(answer);
  } else {
    answer = -1;
    console.log(answer);
  }
  return answer;
}