function solution(start_num, end_num) {
    const result = [];

    const recursiveHelper = (current) => {
        if(current <= end_num){
            result.push(current)
            return recursiveHelper(current+1);
        }else{
            return result
            }
        }
    return recursiveHelper(start_num);
    }
