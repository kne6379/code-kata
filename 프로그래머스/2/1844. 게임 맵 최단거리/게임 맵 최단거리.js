function solution(maps) {
    const yLen = maps.length; // 지도에 y값, 세로 
    const xLen = maps[0].length; // 지도 x값, 가로 
    const goalY = yLen - 1; // Y값이 해당 값과 같아진다면 도착
    const goalX = xLen - 1; // X값이 해당 값과 같아진다면 도착 
    const dy = [0, 0, 1, -1]; // 상하좌우 이동 
    const dx = [-1, 1, 0, 0]; // 상하좌우 이동 
    
    const queue = []; // 큐 선언 
    queue.push([0, 0, 1]); // 초기 값을 넣어준다. 각각 y, x,이동 횟수 
    
    while(queue.length) { // 큐 안에 값이 있다면 반복문 실행 
        const [curY, curX, move] = queue.shift(); // 큐에서 값을 빼준다. 
        if(curY === goalY && curX === goalX) return move; // 해당 값들이 초기 목표값과 일치할 때 이동한 횟수를 반환 
        

        for(let i = 0; i < 4; i++) { // 좌표 값을 입력하기 위해 반복문 
            const ny = curY + dy[i]; // 현재 내 Y 좌표 + 상하좌우 값 
            const nx = curX + dx[i];  // 현재 내 X 좌표 + 상하좌우 값 
            if(ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
                queue.push([ny, nx, move + 1]); // 이동할 좌표 값이 0이 아니고, 지도 안에 속하고, 방문하지 않은 곳일 때(1일때)
                maps[ny][nx] = 0;               // 큐에 값을 푸쉬. 이동거리 +1을 반환, 방문했던 곳은 0으로 처리 
            }
        }
    }
  return -1;
}
 
