var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json(req);
    res.json({ "ipAddress": lastProxy });
});

app.listen(process.env.PORT || 80);
