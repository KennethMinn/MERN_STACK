const fs = require("fs"); //default package
const { afterEach } = require("node:test");

const file_path = "./docs/doc.txt";

//they are asynchronous

//read file
fs.readFile(file_path, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

//write file
//if the file name is wrong, it will create a new file in the docs folder
//if the folder name is wrong, it will show an error

//checking if the path exists
if (fs.existsSync(file_path)) {
  fs.writeFile(file_path, "hello world", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

//delete file
// fs.unlink("./docs/doc2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });

// //create folder
// fs.mkdir("./new_folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created");
//   }
// });

// //delete folder
// fs.rmdir("./new_folder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder deleted");
//   }
// });
