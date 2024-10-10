function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);
    console.log(dots)
    const width = Math.abs(dots[0][0] - dots[2][0])
    const height = Math.abs(dots[0][1] - dots[1][1])
    
    return width * height;
}
