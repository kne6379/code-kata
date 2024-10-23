function solution(polynomial) {
    var answer = polynomial.split("+").map(v=>v.trim())
    let polyStr = ''
    let returnStr = ''
    let poly = 0;
    let moly = 0;
    answer.forEach((v,idx)=>{
        if(v[v.length-1]==="x"){
         v.length == 1 ? poly += 1 : poly += Number(v.slice(0,v.length-1))
        }else{
            moly += Number(v)
        }
    }) 
    polyStr = poly > 1 ? `${poly}x` : `x`

    if(poly && moly){
           polyStr += ` + ${moly}`
    } else if(!poly){
        console.log(moly)
       return returnStr += `${moly}`
    }
    
    
       return moly ? polyStr : polyStr;
}
