function solution(x) {
    var answer = true;
    let strx = String(x);
    let arrNum = 0;
    for(let i of strx){
        arrNum += Number(i);
    }
    return strx%arrNum === 0 ? answer : false;
}