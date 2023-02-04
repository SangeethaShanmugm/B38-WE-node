const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart";

fs.writeFile("./awesome.html", quote, (err) => {
  console.log("Completed writing awesome.html");
});

const quote2 = "Live more, worry less🥳🥳😉";

//Task
//Create the below 10 files with quote2 as the content
// /backup/
//text-1.html
//text-2.html
//text-3.html
//.....
//text-10.html

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log(`Completed writing text-${i}.html`);
  });
}

const data = [
  {
    name: "hello",
  },
  {
    name: "hiii",
  },
];

fs.writeFile("./note.txt", JSON.stringify(data), (err) => {
  console.log("Completed writing");
});

// const [, , noofFiles] = process.argv;
// console.log(noofFiles);
const quote3 = "Hello Everyone";
//Task 2
// node fileSystem.js 20 -> 20 files to b created | text-1.html...text-20.html

for (let i = 1; i <= noofFiles; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote3, (err) => {
    console.log(`Completed writing text-${i}.html`);
  });
}

fs.readFile("./cool.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error ❌", err);
  }
  console.log("The content of the file is", data);
});

const niceQuote = "\nMake everyday a little less ordinarily🥳";

fs.appendFile("./nice.txt", niceQuote, (err) => {
  console.log("Completed writing nice.txt");
});

fs.unlink("./toRemove.txt", (err) => {
  console.log("Deleted Successfully");
});

fs.readdir("./backup", (err, files) => {
  console.log("All file name", files);
});

//Delete all files in backup folder

fs.readdir("./backup", (err, data) => {
  data.forEach((fileName) => {
    fs.unlink(`./backup/${fileName}`, (err) => {
      console.log("Deleted Successfully", fileName);
    });
  });
});

//writeFile -> CallStack -> WebApi(Whomsoever finishes first ) => Callback Q =>  CallStack
//writeFile, readFile, appendFile =  async
//WriteFileSync, readFileSync, appendFileSync =>  sync

for (let i = 1; i <= 10; i++) {
  fs.writeFileSync(`./backup/text-${i}.html`, quote2, (err) => {
    console.log(`Completed writing text-${i}.html`);
  });
}

// const [, , noofFiles] = process.argv;
// const quote3 = "Hello Everyone";

for (let i = 1; i <= noofFiles; i++) {
  fs.writeFileSync(`./backup/text-${i}.html`, quote3);
  console.log(`Completed writing text-${i}.html`, i);
}

fs.readdirSync("./backup", (files) => {
  console.log("The files are", files);
});
