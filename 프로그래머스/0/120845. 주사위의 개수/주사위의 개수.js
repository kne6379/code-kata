function solution(box, n) {
    const divide = (number) => Math.floor(number / n);
    return divide(box[0]) * divide(box[1]) * divide(box[2]);
}

