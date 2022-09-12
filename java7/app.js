const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express();
const port = 80;
 
/*----servinf statics files over network==*/
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//use express templpate engine
app.set("view engine", "pug");

//set view directory
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res)=>{
const con = "welcome to the pug template";
const params = {'title':'pubg is the best','content':con};
res.status(200).render("index.pug", params);
});

app.post("/",(req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message':'Form is Submitted'};
    res.status(200).render("index.pug", params);
});




/*
//our pug demmo endpoint
app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey vijay', message: 'Hello there!' })
  })

app.get("/", (req, res)=>{
res.send("this is home page on first express app");
});
app.get("/about", (req, res)=>{
res.send("this is about page on first express app");
});
app.get("/contact", (req, res)=>{
res.send("this is contact page on first express app");
});
app.get("/services", (req, res)=>{
res.send("this is services page on first express app");
});*/

app.listen(port, ()=>{
    console.log(`app running on port ${port}`);
}); 