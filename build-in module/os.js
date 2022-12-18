// const os = require('node:os');
// console.log(os.cpus())
const os = require('os');

// info about current user
const user = os.userInfo()
console.log(user)

// get system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

// get current os info
const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentos)
