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

app.get('/api/name/:pokedex_id', function(req, res, next){ //change api/name/whatever to get something specific
  var db = req.app.get('db');
  db.get_pokemon([req.params.pokedex_id]) //same here
  .then(response => res.status(200).json(response))
  .catch(err => res.status(404).json(err))
})

app.listen(port, () => {
    console.log("Listening on port 4k")
})