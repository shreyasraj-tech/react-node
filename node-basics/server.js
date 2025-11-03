import https from 'http';

const server = https.createServer((req,res) =>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-type':'text/plain'});
        res.end('Hello World from Node http module\n');
        return;
        }
        res.writeHead(404);
        res.end('Not found');
});

const PORT= 3000;
server.listen(PORT, ()=> console.log(` Server running : ${PORT}`))
