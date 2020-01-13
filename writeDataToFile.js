const fs = require('fs');
 
fs.appendFile('file.txt', 'Writing To The Filesystem! ', (error) => {
    console.log(error);
});
 
console.log('Data has been written to file.txt');
