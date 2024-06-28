function solution(players, callings) {
    const hash = new Map();
    players.forEach((name,index)=>{
        hash.set(name,index);
    })
    
    callings.forEach((name)=>{
        const idx = hash.get(name)
        const front = players[idx-1];
        
        [players[idx], players[idx-1]] = [players[idx-1], players[idx]];
        
        hash.set(name, hash.get(name)-1)
        hash.set(front, hash.get(name)+1)
        
    })
    return players;
}

// 컬링 배열이 어떤 값을 부르는지에 따라 players 배열의 순서가 바뀌어야 한다. 
// 반복문을 돌아 callings의 값마다 검사를 진행하고
// players 배열의 순서를 바꾼다. 