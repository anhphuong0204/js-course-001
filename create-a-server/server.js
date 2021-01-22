const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method); // log req object to console
    // Response a file to client from server we have made
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./view/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.end(data);
        }
    })
})

server.listen(3000, () => {
    console.log("Listening");
})