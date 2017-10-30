const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const connectionString = require("./config").dbConnection
const dbController = require("./dbController.js")
const port = 4001;
const app = express();

const corsOptions = {
    origin : "http://localhost:3000"
}

massive( connectionString ).then(function(dbInstance){
    app.set("db", dbInstance)
})


app.use(express.static(__dirname + '/public'))
app.use( bodyParser.json() );
app.use( cors(corsOptions) );


app.get( '/api/allpokemon', dbController.getAll );
app.get( '/api/pokemon/:id', dbController.getOne );

app.listen(port, () => {
    console.log("Listening on port 4001")
})