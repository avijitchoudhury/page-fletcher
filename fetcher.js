const fs = require('fs');
const request = require('request');
const readline = require('readline');
let args = process.argv.splice(2)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question()

request(args[0], (error, response, body) => {
  let fileContent = body;
  let filepath = args[1];
  
  fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
    fs.stat(filepath, (err, stats) => {
      console.log(`Download and saved ${stats.size} bytes to ${filepath}`)
    })
  })
});



