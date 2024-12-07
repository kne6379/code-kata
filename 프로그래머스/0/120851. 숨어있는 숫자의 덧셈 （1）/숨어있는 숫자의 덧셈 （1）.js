function solution(my_string) {
    return my_string.split("").filter(v=> Number(v)).reduce((arr, cur)=> arr + Number(cur), 0);
}