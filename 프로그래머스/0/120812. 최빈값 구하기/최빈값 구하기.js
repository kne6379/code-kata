// function solution(array) {
//     const hashSet = new Set(array);
//     const hashMap = new Map();
    
//     let hashNum = [];
    
//     hashSet.forEach((v)=>{
//         hashMap.set(v,0);
//     })
    
//     array.forEach((v)=>{
//          let cashNum = hashMap.get(v) + 1
//          hashMap.set(v,cashNum)
//     })
//     hashNum.push(hashMap.values().next().value);
//     for (const [key, value] of hashMap) {
//         if(hashNum[0] < value){
//             hashNum = [];
//             hashNum.push(key);
//         } else if(hashMap.get(hashNum[0]) == value){
//             hashNum.push(key);
//         }
            
//     }
//     const unique = [...new Set(hashNum)]
//     return unique.length > 1 ? -1 : hashNum[0];
// }


function solution(array) {
    const hashMap = new Map();

    // 각 숫자의 빈도수를 계산
    array.forEach((v) => {
        hashMap.set(v, (hashMap.get(v) || 0) + 1);
    });

    let maxFreq = 0; // 최빈값의 빈도수
    let result = []; // 최빈값을 저장할 배열

    // Map을 순회하며 최빈값을 찾음
    for (const [key, value] of hashMap) {
        if (value > maxFreq) {
            maxFreq = value; // 더 큰 빈도수를 찾으면 업데이트
            result = [key]; // 새로운 최빈값이 생기면 배열 초기화
        } else if (value === maxFreq) {
            result.push(key); // 같은 빈도수를 가진 값이 있으면 추가
        }
    }

    // 최빈값이 여러 개일 경우 -1 반환, 하나일 경우 최빈값 반환
    return result.length > 1 ? -1 : result[0];
}