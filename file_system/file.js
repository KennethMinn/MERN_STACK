const fs = require("fs"); //default package

const file_path = "./docs/doc.txt";

//they are asynchronous

//read
fs.readFile(file_path, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

//write
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

//delete
// fs.unlink("./docs/doc2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });
