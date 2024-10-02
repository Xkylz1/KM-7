const http = require("http");
const url = require("url");

// express
const server = http.createServer((req, res) => {
  console.log(req.url);
  //   res.end("Hello FSW 2!!!");
  const pathUrl = req.url;
  if (req.url == "/yogi") {
    res.end("INI TUGASNYA YOGI");
  } else {
    res.end("Ini gak ada! status code: 404");
  }
});

server.listen(8000, "localhost", () => {
  console.log("aplikasi jalan di port 8000");
});
