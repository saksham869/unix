var http=require('http')
var host='127.0.0.1'
var port=6468
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>This is NodeJs</h1>')
    res.end()
}).listen(port,host,()=>{
    console.log('Server is up')
})
