const fs = require("fs");

//read and write file with buffer - chunk by chunk
const readStream = fs.createReadStream("./docs/large.txt");
const writeStream = fs.createWriteStream("./docs/large_write.txt"); //if the path exits, it will update, otherwise, it will create a new file

//pipe
// readStream.on("data", (data) => {
//   console.log(data.toString()); //convert buffer to string
//   console.log("__chunk__");
//   writeStream.write(data.toString()); //write large file
// });

//pipe - short way
readStream.pipe(writeStream); //instead of writing the whole large file, we write it by chunk - stream&buffer
