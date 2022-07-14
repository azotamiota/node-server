const http = require('http');

const server = http.createServer((req, res) => {

    // console.log(req.url);
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Welcome')
    } else if (req.url === '/cats') {
        res.statusCode = 200;
        res.end('This is a cat')
    } else {
        res.statusCode = 404;
        res.end('404 not found')
    }

    res.statusCode = 200;
    res.end('Hi')
})

server.listen(3000, () => {
    console.log('Server listening at port 3000')
});
