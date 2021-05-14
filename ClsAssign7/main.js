var fs = require("fs");
var buf = new Buffer.alloc(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!\n");

    console.log("reading file")

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err) {
            console.log(err);
        }
        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
        fs.ftruncate(fd, 28, function(err) {
            if (err) {
                console.log(err);
            }
            console.log("\nGoing to truncate the file");
            console.log("\nFile truncated successfully.");
            console.log("\nGoing to read the same file"); 
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err) {
                    console.log(err);
                }

                if(bytes > 0) {
                    console.log(buf.slice(0, bytes).toString());
                }

                fs.close(fd, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("\nFile closed successfully.");
                });
            });
        });
    });
});
