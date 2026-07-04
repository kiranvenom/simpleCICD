const express = require("express");
const app = express();

const port = 3000;

app.get("/health-check",(req,res) => {
    res.send({
	status: "working fine",
	msg: "dont worry => with github actions , change new 1"
    })
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})
