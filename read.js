var fs = require('fs');

// Synchronous read (commented out)
var data = fs.readFileSync('lern.txt', 'utf-8');
console.log(data);

// Asynchronous read
fs.readFile('lern.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
    } else {
        console.log(data);
    }
});