function solution(box, n) {
    const divide = (number) => Math.floor(number / n);
    const [wide, depth, height] = [divide(box[0]), divide(box[1]), divide(box[2])];
    return wide * depth * height;
}

