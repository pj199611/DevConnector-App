const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API Running");
});


app.listen(PORT,(req,res)=>{
    console.log(`Server Started on ${PORT}`)
})
