const http = require ('http');
const fs  = require ('fs');

const hostname ='127.0.0.1';
const port = 8000;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')
const services = fs.readFileSync('services.html')

const Server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader = ("content-type", "text/html");
    res.end("hello world");
});

Server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

