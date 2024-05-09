process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = "*";
    let width = "";
        for(let i=0; i< a; i++){
          width = width + star;
        }
        for(let j=0; j< b; j++){
        console.log(width);
    }
});