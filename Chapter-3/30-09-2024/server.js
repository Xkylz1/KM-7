const fs = require("fs");
const express = require("express");

const app = express();

// default URL = Health check
app.get("/", (req, res) => {
  res.status(200).json({
    "status":"Success",
    "message":"Application is running good..."
  });
});

app.get("/fauzan", (req, res) => {
  res.status(200).json({
    "message    ": "ping successfully!",
  });
});

// middleware / handler url yang tidak ada
app.use((req, res, next)=>{
    res.status(404).json({
        "status": "Failed",
        "message":"API not exist"
    })
})



app.listen("3000", () => {
  console.log("Start aplikasi di port 3000");
});
