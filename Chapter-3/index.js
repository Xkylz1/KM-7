const test = "hello fsw2";

console.log(test);

const htpp = require("http");
const fs = require("fs");
const { error } = require("console");

const fsSync = require("fs").promises;

// membaca file
const loveLetter = fs.readFileSync(`./index.txt`, "utf-8");
console.log(loveLetter);

// membuat file baru
const loveFeedback = "aku juga sayang fsw2";
fs.mkdir("test_folder", () => {});
fsSync.writeFileSync("./balasan.txt", loveFeedback);

const avv = fs
  .readFile("balasan.txt", "utf-8")
  .then((isiSuratCinta) => {
    loveLetter = isiSuratCinta;
  })
  .catch((err) => {
    console.error("Error Occured: ", error);
  });
console.log(avv);

// biasakan  tidak langsung mengisikan string di function, tapi buat dulu variable penampungnya
