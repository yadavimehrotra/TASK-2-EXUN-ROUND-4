const readline = require("readline");
const fs = require("fs");

const takinginput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const documentWithString = (stringToBeChecked) => {
  fs.writeFile("string.txt", `${stringToBeChecked}`, (err) => {
    if (err) {
      console.log("error try again");
    }
  });
};

takinginput.question(
  "ENTER A STRING TO CHECK IF IT IS IN OUR DOCUMENT: ",
  (stringToBeChecked) => {
    takinginput.close();
    documentWithString(stringToBeChecked);
    const text = Buffer.from(
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications."
    );

    console.log(text.includes(`${stringToBeChecked}`));
  }
);
