function solution(land) {
  let queue = [[0, 0]]; 
  const dx = [-1, 1, 0, 0]; 
  const dy = [0, 0, -1, 1]; 
  const n = land.length;
  const m = land[0].length; 
  let oilMap = new Map();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let indexSet = new Set(); 
      let tempCount = 0; 
      if (land[j][i] === 1) {
        queue = [[j, i]];
        while (queue.length > 0) {
          let [y, x] = queue.shift();
          if (land[y][x] === 1) {
            land[y][x] = 0;
            tempCount++;
            if (!indexSet.has(x)) indexSet.add(x);

            for (let k = 0; k < 4; k++) {
              let ny = y + dy[k];
              let nx = x + dx[k];

              if (
                nx >= 0 &&
                ny >= 0 &&
                nx < m &&
                ny < n &&
                land[ny][nx] === 1
              ) {
                queue.push([ny, nx]);
              }
            }
          }
        }
      }
      if (tempCount !== 0) {
        for (let idx of indexSet) {
          oilMap.set(
            idx,
            oilMap.has(idx) ? oilMap.get(idx) + tempCount : tempCount
          );
        }
      }
    }
  }

  const answer = Math.max(...oilMap.values());
  return answer;
}
