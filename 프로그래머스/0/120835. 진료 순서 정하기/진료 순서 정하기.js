function solution(emergency) {
    const sortArray = [...emergency].sort((a, b)=> b-a);
    return emergency.map((v)=> sortArray.indexOf(v)+1)
}