function solution(s) {
    return (s.length == 4 || s.length == 6) && s == parseInt(s);
}

// 문자열 검사 > 문자열 하나씩 뜯어본다. 
// 타입오브로 검사할 수 있지 않을까? 
// 반복문은 어떤 걸로 돌릴까 ? 