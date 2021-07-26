var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'))

app.get("/showJsProjects",(req,res) => {
    var title = "InFuture, Work in progress"
    res.json({statusCode: 200, data: title, message:"Success"})
})

app.listen(port,()=>{
    console.log("App listening to: "+port)
})