function solution(hp){
    let ant = 0;
    
    if(hp >= 5){
        ant += Math.floor(hp / 5);
        hp %= 5;
    }
    
    if(hp >= 3){
        ant += Math.floor(hp / 3);
        hp %= 3;
    }
    
    return ant += hp;
}
