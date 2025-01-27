function solution(name, yearning, photo) {
    // 이름과 점수를 객체로 매핑
    const score = name.reduce((acc, cur, idx) => {
        acc[cur] = yearning[idx];
        return acc;
    }, {});

    // 각 그룹의 점수 합산
    return photo.map(group =>
        group.reduce((total, person) => total + (score[person] || 0), 0)
    );
}
