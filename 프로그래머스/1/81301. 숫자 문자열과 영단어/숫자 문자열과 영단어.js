function solution(s) {
    var answer = 0;
    const str = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    for(let i=0; i<=10; i++){
    const index = str[i];
    const regExp = new RegExp (`${index}`,"gi");
    s = s.replace(regExp,i);   
    }
    return +s;
}