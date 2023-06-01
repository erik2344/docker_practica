const http = require('http');
const fs = require('fs');

//funcion para abrir el archivo html 
const myserver = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    //el if indicara si hay un error al no encontrar el archivo
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    const abrirhtml = data.toString().replace('{fecha}', new Date());
    res.write(abrirhtml);
    return res.end();
  });
});

myserver.listen(3000, () => {
  console.log('listen on port 3000');
});