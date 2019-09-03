const server = require("./server.js");
// If server was wrapped in an object - destructure it!
// - import {server} from './server.js'
// - const {server} = require('./server.js')

const port = 8000;
server.listen(port, () =>
  console.log(`
\n API on port ${port} \n`)
);
