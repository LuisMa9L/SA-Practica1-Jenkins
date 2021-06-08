const express = require('express')
const app = express()
const path = require('path');
const port = process.env.KE || 3004;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
  <body>
    <h1>SA -Practica 1</h1>
    <p>Luis Morales - 201314160</p>
  </body>
</html>
  `)
})

app.get('/2', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})