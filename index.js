const express = require("express");
const app = express();

const port = 3000;

app.get("/health-check",(req,res) => {
    res.send({
	status: "working fine"
    })
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})
