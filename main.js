// main.js
const path = require("path");

function joinPaths(input1, input2) {
  const joinedPath = path.join(input1, input2);
  console.log(joinedPath);
}

const args = process.argv.slice(2);
joinPaths(args[0], args[1]);
