const os = require('os');
const { DefaultSerializer } = require('v8');

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus().length);
// console.log(os.constants);

// const SIZE = 1024
// function kb(bytes) { 
//   return bytes / SIZE;
// }
// console.log(kb(os.freemem()));
// console.log(kb(os.totalmem()));

// console.log(os.homedir());
// console.log(os.tmpdir());

// console.log(os.hostname());

console.log(os.networkInterfaces());
