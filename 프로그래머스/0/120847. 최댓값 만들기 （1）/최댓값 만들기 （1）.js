function solution(numbers) {
    return multiplication(numbers.sort((a,b) => b-a).slice(0,2));;
}

function multiplication(arr){
    return arr[0] * arr[1];
}