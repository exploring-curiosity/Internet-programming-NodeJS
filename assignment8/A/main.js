var fs=require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What is your name ? ", function(name) {
    fs.readFile('../input.txt', function (err, data) {
        if (err) return console.log("File Not Found");
        data+='';
        var x=data.split(/\r?\n/)
        var greet = x[Math.floor(Math.random()*x.length)]
        console.log(greet,name);
    });
    rl.close();
});