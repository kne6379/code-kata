function solution(myString) {
    return myString
        .replaceAll("a", "A")               // 모든 "a"를 "A"로 변환
        .replace(/[A-Z]/g, (char) => char === "A" ? "A" : char.toLowerCase()); // 나머지 대문자는 소문자로 변환
}