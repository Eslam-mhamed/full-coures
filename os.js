const os = require("os");
// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`the time is ${os.uptime()} seconds`);

const currentos = {
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    free:os.freemem(),
}
console.log(currentos);