const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());

app.get("/health-check",(req,res) => {
    res.send({
	status: "working fine",
	msg: "dont worry => with github actions , change new 3"
    })
})

app.post("/add", (req,res) => {
    const {a, b} = req.body
    const sum = function add(a,b){
	return a+b
    }
    
    res.send({sum})
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})
