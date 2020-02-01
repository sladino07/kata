 const express = require('express');
 const app = express();
 const brujoData = require('./brujo-data.js');

    app.post('/evaluacionPociones/', (req, res) => {
         var request= req.body;
         res.send(brujoData.getEvaluacionPocion(request));
    });
 
    module.exports = app;
