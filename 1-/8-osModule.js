const os = require('os')

// info current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in second
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);