const express = require("express");
const app = express()
const port = 8000;
//we need this cors package later when we do full stack using react so that react application can talk to our express application. cors = cross origin resource sharing
const cors = require("cors");

app.use(express.json()) //allows us to use json
app.use(express.urlencoded({extended:true})) //more json related stuff
app.use(cors()) //be able to share resources with other origins (sources like react app)



//^^^^^^ keep those at the top most part of the page


//make server.js communicate with mongoose configuration file
require("./server/config/quotes.config");

//make server.js communicate with the routes
require("./server/routes/quote.routes")(app)


app.listen(port, ()=>console.log(`Listening on port number ${port}`))
