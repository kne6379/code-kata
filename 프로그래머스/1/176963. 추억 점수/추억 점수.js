function solution(name, yearning, photo) {
    const score = {};
    let answer = [];
        name.forEach((v, idx)=>{
            score[name[idx]] = yearning[idx];
        })
        answer = photo.map(group => {
            return group.reduce((acc, cur) => {
                return acc + (score[cur] || 0);
            }, 0
        )});
    return answer;
}