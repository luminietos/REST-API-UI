// uses express-module
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

// for the templates
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// mongo db module
const MongoClient = require("mongodb").MongoClient;

/* let's take env parameters in use */
require("dotenv").config();

// sets user id and pw
var user = process.env.MONGO_USERID
var pw = process.env.MONGO_PW

// creates connection script to db

const uri = "mongodb+srv://" + user + ":" + pw + "@cluster1.zl9za8m.mongodb.net/?retryWrites=true&w=majority";

// make the routes

// prints the movies
app.get("/api/movies", function(req, res) {
    // creates connection object
    const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

    //res.send("Printout the movies.");
    
  async function connectAndFetch(){
    try {
      // takes connection to "sample_mflix" and collection "movies"
      //var data = "";
      await client.connect();
      const collection = client.db("sample_mflix").collection("movies");
      
      // makes query with collection-object
      var result = await collection
        .find() // uses empty find to show all contents
        .limit(10)
        .toArray() 

      res.send(result);
  
    } catch (e){
      console.error(e);
    } finally {
      await client.close();
      console.log("Connection closed to MONGO");
    }
  }
  connectAndFetch();

});

// adds one movie - see how to read the POST parameters
app.post("/api/add", function(req, res) {  
  res.send("Add movie: " + req.body.title + " (" + req.body.year + ")");
});

// modifies the information of movie by ID number
app.put("/api/modify/:id", function (req, res) {
  try {
    // modified movie logic, dummy data
    const modifiedMovie = {
      id: req.params.id,
      title: "Barbie",
      director: "Greta Gerwig",
      year: "2023"
    };

    // (assuming the modification was successful) 
    // send the modified movie as a JSON response
    res.json(modifiedMovie);
  } catch (error) {
    console.error(error);
    // send an error response if an error occurs during the modification process
    res.status(500).json({ error: "Failed to modify the movie. " + error.message });
  }
});

// remove movie by ID. See how to read the ID
app.delete("/api/remove/:id", function(req, res) {
  res.send("Remove the movie by " + req.params.id);
});

app.get("*", function (req, res) {
  res.status(404).send("Can't find the requested page");
});

// web server by express
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log("Example app is listening on port %d", PORT);
});