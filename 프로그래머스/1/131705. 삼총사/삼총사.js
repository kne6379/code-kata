function solution(number) {
    let result = 0;
    
    function three(index, count, sum) {
        if (index > number.length) {
            return;
        }
        if (count === 3) {
            if (sum === 0) {
                result++;
            }
            return;
        }
        three(index + 1, count + 1, sum + number[index]);
        three(index + 1, count, sum);
    }
    three(0, 0, 0);
    
    return result;
}
