var express = require("express")
var app = express()
var port = process.env.port || 3000;

var users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname+'/public'))

//Created couple of APIs which can be put to use in future.
 
// 1. To showcase specific JS projects I worked on and similarly can add my other work like C#, Android etc.
app.get("/showJsProjects",(req,res) => {
    var title = "InFuture, Work in progress"
    res.json({statusCode: 200, data: title, message:"NA"})
})

// 2. Interested visitor who wants to connect with me after visiting my website, can enter their emailID and wait for a response.
app.post("/user/email",(req,res) => {
    let userData = {}
    userData.name = req.body.name;
    userData.email = req.body.email;
    users.push(userData);
    res.json({statusCode: 200, data: userData, message:"will connect with you in 2 working days"})
})

app.listen(port,()=>{
    console.log("App listening to: "+port)
})