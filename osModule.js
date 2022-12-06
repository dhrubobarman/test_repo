const os = require("os");

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMemmory: os.freemem(),
};

console.log(currentOs);
