function solution(num_list) {
    const resultL = num_list.filter(v=> v%2===0).length;
    const resultR = num_list.length - resultL;
    return [resultL, resultR];
}