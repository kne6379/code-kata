function solution(n)
{
   let answer = n.split("").map(v=> {
       switch(v){
        case '2':
            return '0';
            break;
        case '0':
            return '5';
            break;
        case '5':
            return '2';
            break;
       }
    }).join("");
    return answer;
}
