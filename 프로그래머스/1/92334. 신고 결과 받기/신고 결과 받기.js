function solution(id_list, report, k) {
    const answer = new Array(id_list.length); // id_list만큼의 길이를 가진 배열 생성
    answer.fill(0); // 배열 전부 0으로 초기화
    
    const report_list = {};
    id_list.forEach((user)=>{
        report_list[user] = []
    })
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(" ");
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }
    })
    
    for(const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1;
            })
        }
    }
    console.log(report_list["frodo"]);
    return answer;
}