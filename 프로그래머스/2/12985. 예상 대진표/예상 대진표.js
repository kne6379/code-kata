function solution(n, a, b) {
  let round = 0;

  const recursion = (a, b, round) => {
    if (a !== b) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      round++;
      return recursion(a, b, round);
    }
    return round;
  };
  const answer = recursion(a, b, round);
  return answer;
}
