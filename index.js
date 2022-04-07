const express = require('express');
const app = express();
const importDb = require("./db.json")
let port = process.env.PORT || 3001;
app.get("/products",(req,res)=>{
    res.send(importDb);
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})