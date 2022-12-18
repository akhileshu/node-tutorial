const { readFileSync,writeFileSync } = require("fs")

const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')

console.log(first,second)

// if file dont exists node will create and write,if you want to append then 3rd argument-flag 
writeFileSync('./content/result-sync.txt',`here is the result :${first},${second} `,{flag:'a'})





