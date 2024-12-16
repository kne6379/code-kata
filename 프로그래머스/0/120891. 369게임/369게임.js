function solution(order) {
    return String(order)
        .split("")
        .map((v) => (Number(v) % 3 === 0 && v !== "0" ? 1 : 0))
        .reduce((acc, cur) => acc + cur, 0);
}
