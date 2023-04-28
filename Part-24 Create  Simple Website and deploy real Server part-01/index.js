


const http = require('http');
const fs = require('fs');
const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    if(req.url ==='/'){
       let data = fs.readFileSync('home.html',
       'utf-8');
       res.end(data)
    }
    else if(req.url ==='/contact'){
        let data = fs.readFileSync("contact.html", "utf-8");
        res.end(data);
    }
    else if(req.url ==='/about'){
        let data = fs.readFileSync("about.html", "utf-8");
        res.end(data);
    }
    else if(req.url ==='/terms'){
        let data = fs.readFileSync("terms.html", "utf-8");
        res.end(data);
    }
});

myServer.listen(port, hostName, () => {
    console.log(`Server is Running Successfully at http://${hostName}:${port}`);
});

