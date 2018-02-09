const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));
app.get('/', function(req, res){
    res.sendfile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('connected to port', port);
});
