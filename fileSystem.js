const fs = require("fs");

// const quote = "No beauty shines brighter than that of a good heart";

// fs.writeFile("./awesome.html", quote, (err) => {
//   console.log("Completed writing awesome.html");
// });

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
