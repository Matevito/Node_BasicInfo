const http = require("http")
const url = require("url")
const fs = require("fs")

const landPage_404 = fs.readFileSync("404.html", "utf-8", (err, data) => {
    if (err) throw err;
    return data;
});

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
            res.writeHead(404, {"Content-Type":"text/html"})
            res.write(landPage_404)
            return res.end()
        }
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(data)
        return res.end()
    })
}).listen(8080)