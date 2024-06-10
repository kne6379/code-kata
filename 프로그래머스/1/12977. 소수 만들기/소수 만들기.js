function solution(nums) {
    var answer = 0;
    let checkNum = 0;
    let result =0;
    for(let i=0; i<=nums.length-2; i++){
        for(let j=i+1; j<=nums.length-1; j++){
            for(let k=j+1; k < nums.length; k++){
                checkNum = nums[i]+nums[j]+nums[k]
                answer = getResult(checkNum);
                if(answer){
                    result += 1;
                }
            }
        }
    }
    return result;
}

function getResult(n){
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}