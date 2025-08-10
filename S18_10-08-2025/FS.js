const fs = require("fs");

// fs.writeFile("demo.txt", "", (error) => {
//   if (error) {
//     console.log("Error writing file:", error);
//   } else {
//     console.log("File created successfully");
//   }
// });

// fs.unlink("demo.txt", (error) => {
//   if (error) {
//     console.log("Error deleting file:", error);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

// fs.mkdir("NodeJS_Files", (error) => {
//   if (error) {
//     console.log("Error creating directory:", error);
//   } else {
//     console.log("Directory created successfully");
//   }
// });

fs.readFile("first.js", "utf-8", (error, data) => {
  if (error) {
    console.log("Error reading file:", error);
  } else {
    console.log("File read successfully");
    console.log(data);
  }
});
