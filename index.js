const http = require("http")
const url = require("url")
const fs = require("fs")


http.createServer((req, res) => {
    const q  = url.parse(req.url, true);
    let fileName
    if (q.pathname === "/"){
        fileName = "./index.html"
    }else{
        fileName = "." + q.pathname+".html";
    }

    fs.readFile(fileName, (err, data) => {
        if(err){
            //todo
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(data)
        return res.end()
    })
}).listen(8080)