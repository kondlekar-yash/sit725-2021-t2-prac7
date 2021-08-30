let express = require("express")
let app = express()
let mdb = require("./mdb");

let http = require('http').createServer(app);

let projectsRoute = require('./routes/projects');

var port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/projects',projectsRoute)

/* app.get("/test", function (request, response) {
    var user_name = request.query.user_name;
    response.end("Hello " + user_name + "!");
  }); */

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
  var firstNumber = parseInt(req.params.firstNumber) 
  var secondNumber = parseInt(req.params.secondNumber)
  var result = firstNumber + secondNumber || null
  if(result == null) {
    res.json({result: result, statusCode: 400}).status(400)
  }
  else { res.json({result: result, statusCode: 200}).status(200) } 
})

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
  var firstNumber = parseInt(req.params.firstNumber) 
  var secondNumber = parseInt(req.params.secondNumber)
  var result = firstNumber + secondNumber || null
  if(result == null) {
    res.json({result: result, statusCode: 400}).status(400)
  }
  else { res.json({result: result, statusCode: 200}).status(200) } 
})


http.listen(port,()=>{
    console.log("Listening on port ", port);
  });

/* const MongoClient = require('mongodb').MongoClient;
let clientCollection;
const uri = "mongodb+srv://725:13111995@725week4.ghoce.mongodb.net/725Portfolio?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser: true}) */

//var users = [];
/* 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname+'/public'))
app.use('/api/projects', projectsRoute);

 */
/* const createCollection = (collectionName) => {
    client.connect ((err,db) => {
        clientCollection = client.db().collection(collectionName);
        if(!err) {
            console.log("MongoDB connected.");
        }
        else {
            console.log("MongoDB error.", err);
            process.exit(1);
        }
    })
}

const insertClients = (client,callback) => {
    clientCollection.insert(client,callback);
}

const getClients = (callback) => {
    clientCollection.find({}).toArray(callback);
} */

/* app.get('/api/clients',(req,res) => {
    getclients((err,resullt) => {
        if(err) {
            res.json({statusCode: 400, message:err})
        }
        else {
            res.json({statusCode:200, message:"success",data:result})
        }
    })
})

app.post('/api/clients', (req,res) => {
    console.log("New client added, please wait for response on mail",req.body)
    var newClient = req.body;
    insertClients(newClient,(err,result) => {
        if(err) {
            res.json({statusCode:400 , message: err})
        }
        else {
            res.json({statusCode:200, message:"Client added.", data : result})
        }
    })
}) */

//Created couple of APIs which can be put to use in future.
 
// 1. To showcase specific JS projects I worked on and similarly can add my other work like C#, Android etc.
/* app.get("/showJsProjects",(req,res) => {
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
})   */

/* function showProjects(){
    window.location.replace("http://localhost:8080/showJsProjects");   
} */

/* app.listen(port,()=>{
    console.log("App listening to: "+port)
    //createCollection("Clients");
}) */